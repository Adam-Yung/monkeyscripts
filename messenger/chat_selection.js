// ==UserScript==
// @name         Selectable Options Menu (Alt-Tab Style)
// @namespace    https://dev.mooibee.us
// @version      1.3
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

        /* The selected state */
        .menu-option.highlighted {
            background-color: #ebf5ff; /* Messenger Blue Tint */
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

        /* Dark Mode Support */
        .__fb-dark-mode #myMenuContainer { background-color: #242526; border: 1px solid #3e4042; }
        .__fb-dark-mode .option-text { color: #e4e6eb; }
        .__fb-dark-mode .option-subtext { color: #b0b3b8; }
        .__fb-dark-mode .menu-option.highlighted { background-color: #3a3b3c; border-color: #2D88FF; }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.textContent = css_styles;
    document.head.appendChild(styleSheet);

    function getChatList() {
        const options = [];
        
        const allLinks = document.querySelectorAll('[class="x1n2onr6"]');

        if (allLinks.length === 0) {
            console.error("Error: Chat list container element not found.");
            return;
        }

        const chatList = allLinks[0].children;

        if (!chatList || chatList.length === 0) {
            console.log("There are no chats loaded.");
            return;
        }

        console.log("There are %d chats loaded", chatList.length);

        let max_options = Math.min(chatList.length, 6);
        let person = null;

        for (let i = 0; i < max_options; ++i) {

            person = chatList[i];

            if (!person) {
                return;
            }

            const nameElement = person.querySelector('span');
            const imgElement = person.querySelector('img');
            const linkElement = person.querySelector('a[href]');
            const unreadElement = person.querySelector('span[data-visualcompletion]');
            
            let emojis = "";
            const name = nameElement ? nameElement.textContent : "N/A";
            const imagesInName = nameElement.querySelectorAll('img');
            if (imagesInName) {
                imagesInName.forEach(img => {emojis += img.getAttribute('alt')});
            }
            const img = imgElement ? imgElement.src : "N/A";
            const unread = !!unreadElement; // Check if the unread element exists


            options.push({text: name+emojis, imageUrl: img, linkElement: linkElement, unread: unread});
        }
        const currentIndex = options.findIndex(opt => opt.isCurrent);

        if (currentIndex > 0) {
            const [currentChat] = options.splice(currentIndex, 1);
            options.unshift(currentChat);
        }
        return options
    }

    // --- Menu UI ---
    function createMenu() {
        if (myOverlay) myOverlay.remove();
        overlayOptions = [];

        const optionsData = getChatList();

        myOverlay = document.createElement('div');
        myOverlay.id = 'myMenuOverlay';

        const container = document.createElement('div');
        container.id = 'myMenuContainer';

        if (optionsData.length === 0) {
            const msg = document.createElement('div');
            msg.className = 'option-text';
            msg.innerText = "No chats found. (Scroll sidebar?)";
            container.appendChild(msg);
        } else {
            optionsData.forEach((opt) => {
                // console.log(`Name: ${opt.text}\nlinkElement: ${opt.linkElement}\nsubtext: ${opt.subtext}\nImage: ${opt.imageUrl}\n\n`)
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

                if (opt.subtext) {
                    const sub = document.createElement('div');
                    sub.className = 'option-subtext';
                    sub.innerText = opt.subtext;
                    info.appendChild(sub);
                }

                el.appendChild(info);

                // Allow clicking
                el.addEventListener('click', (e) => {
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

        console.log("Navigating to:", optionObj.text);

        // 1. Try Native Click (Best for Single Page Apps)
        optionObj.linkElement.click();

        // 2. Hide Menu
        hideMenu();
    }

    function highlightOption(index) {
        overlayOptions.forEach(o => o.element.classList.remove('highlighted'));
        if (index >= 0 && index < overlayOptions.length) {
            overlayOptions[index].element.classList.add('highlighted');
        }
    }

    function showMenu() {
        if (isMenuVisible) return;
        createMenu();
        isMenuVisible = true;

        // Select the second item (index 1) by default if it exists (Alt-Tab behavior usually skips current)
        // If only 1 item, select index 0.
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
        // Direction: 1 for forward, -1 for backward
        currentSelectedIndex = (currentSelectedIndex + direction + len) % len;

        highlightOption(currentSelectedIndex);
    }

    // --- Event Listeners ---

    document.addEventListener('keydown', (e) => {
        // 1. Open Menu: Ctrl + `
        if (e.ctrlKey && (e.key === '`') || (e.key === '~')) {
            e.preventDefault(); // Stop ` char from typing

            if (!isMenuVisible) {
                showMenu();
            } else {
                // If menu is open, this is a repeat tap
                // Check for Shift to reverse
                const direction = (e.key === '~') ? -1 : 1;
                cycleSelection(direction);
            }
        }

        // 2. Select: Enter
        if (isMenuVisible && e.key === 'Enter') {
            e.preventDefault();
            e.stopPropagation();
            if (currentSelectedIndex > -1) commitSelection(overlayOptions[currentSelectedIndex].data);
        }
    });

    document.addEventListener('keyup', (e) => {
        // 3. Commit Selection: Release Ctrl
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
