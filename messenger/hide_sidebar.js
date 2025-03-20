// ==UserScript==
// @name         Messenger Hide Sidebar
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Hide Sidebar from page view and adapt to theme
// @author       Bee
// @match        https://www.messenger.com/*
// @run-at       document-end
// @icon         https://www.google.com/s2/favicons?sz=64&domain=messenger.com
// @grant        none
// ==/UserScript==
function GM_addStyle(aCss) {
    'use strict';
    let head = document.getElementsByTagName('head')[0];
    if (head) {
        let style = document.createElement('style');
        style.setAttribute('type', 'text/css');
        style.textContent = aCss;
        head.appendChild(style);
        return style;
    }
    return null;
};

GM_addStyle(`
    .toggle-button-class {
        margin-right: 5px;
        margin-bottom: 7.5px;
    }
`);

(function() {
    'use strict';
    let extension_name = "Messenger Hide Sidebar";
    console.log("Running %s", extension_name);

    function find_thread_list() {
        let threadList = document.querySelector('[role="navigation"][aria-label="Thread list"]');
        return (threadList) ? threadList : null;
    }

    let new_button = null;
    function create_new_toggle(button, thread) {
        let old_button = document.querySelector('[aria-label="Thread List Button"]');
        if (old_button) {
            console.log("Button already exists, not adding again");
            return;
        }
        new_button = button.cloneNode(true);
        new_button.setAttribute('aria-label', 'Thread List Button');
        new_button.style.marginTop = '10px';

        const svg = new_button.querySelector('svg');
        const paths = svg.querySelectorAll('path');
        paths.forEach(path => path.remove());
        new_button.innerHTML = '<svg class="toggle-button-class" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)" stroke-width="1.2"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.70710678,12 L8.85355339,15.1464466 C9.04881554,15.3417088 9.04881554,15.6582912 8.85355339,15.8535534 C8.65829124,16.0488155 8.34170876,16.0488155 8.14644661,15.8535534 L4.14644661,11.8535534 C3.95118446,11.6582912 3.95118446,11.3417088 4.14644661,11.1464466 L8.14644661,7.14644661 C8.34170876,6.95118446 8.65829124,6.95118446 8.85355339,7.14644661 C9.04881554,7.34170876 9.04881554,7.65829124 8.85355339,7.85355339 L5.70710678,11 L16.5,11 C16.7761424,11 17,11.2238576 17,11.5 C17,11.7761424 16.7761424,12 16.5,12 L5.70710678,12 Z M19,3.5 C19,3.22385763 19.2238576,3 19.5,3 C19.7761424,3 20,3.22385763 20,3.5 L20,19.5 C20,19.7761424 19.7761424,20 19.5,20 C19.2238576,20 19,19.7761424 19,19.5 L19,3.5 Z"></path> </g></svg>';

        button.parentNode.insertBefore(new_button, button.nextSibling);

        const original_display = window.getComputedStyle(thread).getPropertyValue('display');
        let isHidden = (original_display === "none");
        new_button.addEventListener('click', () => {
            isHidden = !isHidden;
            thread.style.display = isHidden ? 'none' : 'flex';
        });
    }

    function add_thread_list_toggle(thread_list) {
        if (thread_list) {
            let inbox_button =
                document.querySelector('[role="button"][aria-label="Expand inbox sidebar"]') ||
                document.querySelector('[role="button"][aria-label="Collapse inbox sidebar"]');
            if (inbox_button) {
                create_new_toggle(inbox_button, thread_list);
                inbox_button.addEventListener('click', () => {
                    setTimeout(() => {
                        add_thread_list_toggle(thread_list);
                    }, 100);
                });
            } else {
                console.log("Target element for button placement NOT found.");
                return false;
            }
        } else {
            console.log("Sidebar element NOT found.");
            return false;
        }
        return true;
    }

    function isDarkModeEnabled() {
        return document.documentElement.classList.contains('__fb-dark-mode');
    }

    function updateToggleButtonColor() {
        const toggleButton = document.querySelector('.toggle-button-class');
        if (toggleButton) {
            if (isDarkModeEnabled()) {
                toggleButton.style.stroke = '#e4e6ea';
                toggleButton.style.fill = '#e4e6ea';
            } else {
                toggleButton.style.stroke = '#000000';
                toggleButton.style.fill = '#000000';
            }
        }
    }

    const observer = new MutationObserver((mutationsList, observer) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class' && mutation.target === document.documentElement) {
                updateToggleButtonColor();
            }
        }
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    let thread_list_check, max_run = 10;
    let thread_list;
    (function() {
        clearInterval(thread_list_check);
        thread_list_check = setInterval(() => {
            if (max_run <= 0) {
                console.log("Failed to add button over 10 times, stop...");
                clearInterval(thread_list_check);
                thread_list_check = null;
            }
            --max_run;

            console.log("Finding thread list div");
            thread_list = find_thread_list();

            if (thread_list) {
                console.log("Found, adding toggle button");
                if (add_thread_list_toggle(thread_list)) {
                    clearInterval(thread_list_check);
                    thread_list_check = null;
                    // Initial call to set the color based on the current theme
                    setTimeout(updateToggleButtonColor, 100);
                }
            } else {
                console.log("Cannot find thread list div");
            }
        }, 500);
    })();

    let resizeTimeout;
    function debouncedResizeHandler() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            console.log("Debounced resize handling...");
            console.log("Width:", window.innerWidth);
            console.log("Height:", window.innerHeight);

            const thread_list = find_thread_list();
            if (thread_list) {
                add_thread_list_toggle(thread_list);
                setTimeout(updateToggleButtonColor, 100); // Update color on resize as well
            }
        }, 250);
    }
    window.addEventListener('resize', debouncedResizeHandler);

    console.log("Init %s finished", extension_name);

})();
