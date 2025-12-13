// ==UserScript==
// @name         Selectable Options Menu (Alt-Tab Style)
// @namespace    https://dev.mooibee.us
// @version      1.7
// @description  Messenger Quick Switcher: Hold Ctrl+` to open. Tap ` to cycle. Release Ctrl to select. Shift+` to reverse.
// @match        https://www.messenger.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // --- Configuration ---
    const MAX_CHATS_TO_SHOW = 6;
    const PLACEHOLDER_IMG = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI0JDQzBDNCI+PHBhdGggZD0iTTEyIDEyYzIuMjEgMCA0LTEuNzkgNC00cy0xLjc5LTQtNC00LTQgMS43OS00IDQgMS43OSA0IDQgNHptMCAyYy0yLjY3IDAtOCAxLjM0LTggNHYyaDE2di0yYzAtMi42Ni01LjMzLTQtOC00eiIvPjwvc3ZnPg==';

    // --- State Variables ---
    let myOverlay = null;
    let overlayOptions = [];
    let isMenuVisible = false;
    let currentSelectedIndex = -1;

    // --- CSS Styles ---
    const css_styles = `
        #myMenuOverlay {
            position: fixed !important;
            z-index: 2147483647 !important;
            left: 0;
            top: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgba(0,0,0,0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: system-ui, -apple-system, sans-serif;
            pointer-events: auto;
        }

        #myMenuContainer {
            background-color: #fff;
            padding: 12px;
            border-radius: 12px;
            width: 380px;
            box-shadow: 0 12px 28px rgba(0,0,0,0.3);
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .menu-option {
            display: flex;
            align-items: center;
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
            border: 2px solid transparent;
        }

        .menu-option.highlighted {
            background-color: #ebf5ff;
            border-color: #0084ff;
        }

        .option-image {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            margin-right: 12px;
            object-fit: cover;
            background-color: #ddd;
            flex-shrink: 0;
        }

        .option-info {
            display: flex;
            flex-direction: column;
            overflow: hidden;
            flex-grow: 1;
        }

        .option-text {
            font-size: 16px;
            font-weight: 600;
            color: #050505;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .option-subtext {
            font-size: 12px;
            color: #65676b;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .option-subtext.current-label {
            color: #0084ff;
            font-weight: 500;
        }

        /* Unread Indicator Dot */
        .unread-dot {
            width: 10px;
            height: 10px;
            background-color: #0084ff;
            border-radius: 50%;
            margin-left: 8px;
            flex-shrink: 0;
            box-shadow: 0 0 0 2px #fff;
        }

        /* Dark Mode Support */
        .__fb-dark-mode #myMenuContainer { background-color: #242526; border: 1px solid #3e4042; }
        .__fb-dark-mode .option-text { color: #e4e6eb; }
        .__fb-dark-mode .option-subtext { color: #b0b3b8; }
        .__fb-dark-mode .menu-option.highlighted { background-color: #3a3b3c; border-color: #2D88FF; }
        .__fb-dark-mode .unread-dot { box-shadow: 0 0 0 2px #242526; }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.textContent = css_styles;
    document.head.appendChild(styleSheet);

    // --- Helper: URL Normalizer ---
    // Removes trailing slash and query params for accurate comparison
    function normalizeUrl(url) {
        if (!url) return '';
        return url.split('?')[0].replace(/\/$/, '');
    }

    function getChatList() {
        const options = [];

        // Fragile selector as requested - DO NOT CHANGE
        const allLinks = document.querySelectorAll('[class="x1n2onr6"]');

        if (allLinks.length === 0) {
            // Quiet fail if container not found yet (loading state)
            return [];
        }

        const chatList = allLinks[0].children;
        if (!chatList || chatList.length === 0) {
            return [];
        }

        const max_options = Math.min(chatList.length, MAX_CHATS_TO_SHOW);
        const currentUrl = normalizeUrl(window.location.href);

        for (let i = 0; i < max_options; ++i) {
            try {
                const person = chatList[i];
                if (!person) continue;

                // Elements
                const nameElement = person.querySelector('span');
                const imgElement = person.querySelector('img');
                const linkElement = person.querySelector('a[href]');

                // --- 1. Robust Name & Emoji Extraction ---
                let name = nameElement ? nameElement.textContent : "N/A";
                let emojis = "";
                if (nameElement) {
                    const imagesInName = nameElement.querySelectorAll('img');
                    if (imagesInName) {
                        imagesInName.forEach(img => {
                            const alt = img.getAttribute('alt');
                            if (alt) emojis += alt;
                        });
                    }
                }

                // --- 2. Fix: Unread Detection ---
                // Previous selector (data-visualcompletion) was flaky.
                // Reliable method: Check if name is BOLD (weight > 400).
                let unread = false;
                if (nameElement) {
                    const style = window.getComputedStyle(nameElement);
                    const weight = parseInt(style.fontWeight) || 400;
                    if (weight > 500) {
                        unread = true;
                    }
                }

                // --- 3. Fix: Current Chat Logic ---
                // Priority: check 'aria-current' attribute (standard), fallback to URL match
                let isCurrent = false;
                let subtext = "";

                if (linkElement && linkElement.href) {
                    const isAriaCurrent = linkElement.getAttribute('aria-current') === 'page';
                    const isUrlMatch = normalizeUrl(linkElement.href) === currentUrl;

                    if (isAriaCurrent || isUrlMatch) {
                        isCurrent = true;
                        subtext = "Current";
                    }
                }

                const img = imgElement ? imgElement.src : null;

                options.push({
                    text: name + emojis,
                    imageUrl: img,
                    linkElement: linkElement,
                    unread: unread,
                    subtext: subtext,
                    isCurrent: isCurrent
                });

            } catch (err) {
                console.warn("Quick Switcher: Error parsing a chat item", err);
                continue;
            }
        }

        // REORDER: Move the "Current" chat to the top (index 0)
        const currentIndex = options.findIndex(opt => opt.isCurrent);
        if (currentIndex > 0) {
            const [currentChat] = options.splice(currentIndex, 1);
            options.unshift(currentChat);
        }

        return options;
    }

    // --- Menu UI ---
    function createMenu() {
        if (myOverlay) myOverlay.remove();
        overlayOptions = [];

        const optionsData = getChatList();

        myOverlay = document.createElement('div');
        myOverlay.id = 'myMenuOverlay';

        // Close if clicking background
        myOverlay.addEventListener('click', (e) => {
            if (e.target === myOverlay) hideMenu();
        });

        const container = document.createElement('div');
        container.id = 'myMenuContainer';

        if (optionsData.length === 0) {
            const msg = document.createElement('div');
            msg.className = 'option-text';
            msg.style.textAlign = 'center';
            msg.innerText = "No chats found.\n(Try scrolling sidebar)";
            container.appendChild(msg);
        } else {
            optionsData.forEach((opt) => {
                const el = document.createElement('div');
                el.className = 'menu-option';

                const img = document.createElement('img');
                img.className = 'option-image';
                img.src = opt.imageUrl || PLACEHOLDER_IMG;
                el.appendChild(img);

                const info = document.createElement('div');
                info.className = 'option-info';

                const name = document.createElement('div');
                name.className = 'option-text';
                name.innerText = opt.text;
                info.appendChild(name);

                // Add Subtext (e.g. "Current")
                if (opt.subtext) {
                    const sub = document.createElement('div');
                    sub.className = 'option-subtext';
                    if (opt.isCurrent) sub.classList.add('current-label');
                    sub.innerText = opt.subtext;
                    info.appendChild(sub);
                }
                el.appendChild(info);

                // Add Blue Dot if unread
                if (opt.unread) {
                    const dot = document.createElement('div');
                    dot.className = 'unread-dot';
                    el.appendChild(dot);
                }

                el.addEventListener('click', (e) => {
                    e.preventDefault(); // Prevent double firing
                    e.stopPropagation();
                    commitSelection(opt);
                });

                container.appendChild(el);
                overlayOptions.push({ element: el, data: opt });
            });
        }

        myOverlay.appendChild(container);
        document.body.appendChild(myOverlay);
    }

    // --- Core Logic ---

    function commitSelection(optionObj) {
        if (!optionObj || !optionObj.linkElement) return;
        optionObj.linkElement.click();
        hideMenu();
    }

    function highlightOption(index) {
        overlayOptions.forEach(o => o.element.classList.remove('highlighted'));
        if (index >= 0 && index < overlayOptions.length) {
            overlayOptions[index].element.classList.add('highlighted');
            // Ensure element is scrolled into view if menu gets long
            overlayOptions[index].element.scrollIntoView({ block: 'nearest' });
        }
    }

    function showMenu() {
        if (isMenuVisible) return;
        createMenu();
        isMenuVisible = true;

        // Default selection:
        // Index 0 is "Current" (if present), so we default to Index 1 (Previous Chat)
        // unless there is only 1 item total.
        currentSelectedIndex = overlayOptions.length > 1 ? 1 : 0;
        highlightOption(currentSelectedIndex);
    }

    function hideMenu() {
        if (myOverlay) myOverlay.remove();
        isMenuVisible = false;
        myOverlay = null;
        overlayOptions = [];
    }

    function cycleSelection(direction) {
        if (!isMenuVisible || overlayOptions.length === 0) return;
        const len = overlayOptions.length;
        currentSelectedIndex = (currentSelectedIndex + direction + len) % len;
        highlightOption(currentSelectedIndex);
    }

    // --- Event Listeners ---

    document.addEventListener('keydown', (e) => {
        // Toggle/Open
        if (e.ctrlKey && (e.key === '`' || e.key === '~')) {
            e.preventDefault();
            if (!isMenuVisible) {
                showMenu();
            } else {
                const direction = (e.key === '~') ? -1 : 1;
                cycleSelection(direction);
            }
        }

        // Selection with Enter
        if (isMenuVisible && e.key === 'Enter') {
            e.preventDefault();
            e.stopPropagation();
            if (currentSelectedIndex > -1 && overlayOptions[currentSelectedIndex]) {
                commitSelection(overlayOptions[currentSelectedIndex].data);
            }
        }
        
        // Close with Escape
        if (isMenuVisible && e.key === 'Escape') {
            e.preventDefault();
            hideMenu();
        }
    });

    document.addEventListener('keyup', (e) => {
        if (e.key === 'Control') {
            if (isMenuVisible) {
                e.preventDefault();
                if (currentSelectedIndex > -1 && overlayOptions[currentSelectedIndex]) {
                    commitSelection(overlayOptions[currentSelectedIndex].data);
                } else {
                    hideMenu();
                }
            }
        }
    });

})();
