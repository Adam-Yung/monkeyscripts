// ==UserScript==
// @name         Messenger Hide Sidebar
// @namespace	 https://dev.mooibee.us
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
        cursor: pointer;
    }
    .toggle-button-class.right {
        margin: 8px 0 0 10px;
    }
    .toggle-button-class.left {
        margin: 0 10px 8px 0;
    }
    
    .menu_collapse {
        max-width: 480px;
        min-width: 300px;
        overflow: hidden;
        /* Added min-width to the transition */
        transition: max-width 0.5s ease-in-out, min-width 0.5s ease-in-out;
        display: flex !important;
        flex-direction: column;
    }

    .menu_collapse.hidden {
        max-width: 0;
        min-width: 0;
    }
`);

const right_button_old = `<svg class="toggle-button-class" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)" stroke-width="1.2"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.70710678,12 L8.85355339,15.1464466 C9.04881554,15.3417088 9.04881554,15.6582912 8.85355339,15.8535534 C8.65829124,16.0488155 8.34170876,16.0488155 8.14644661,15.8535534 L4.14644661,11.8535534 C3.95118446,11.6582912 3.95118446,11.3417088 4.14644661,11.1464466 L8.14644661,7.14644661 C8.34170876,6.95118446 8.65829124,6.95118446 8.85355339,7.14644661 C9.04881554,7.34170876 9.04881554,7.65829124 8.85355339,7.85355339 L5.70710678,11 L16.5,11 C16.7761424,11 17,11.2238576 17,11.5 C17,11.7761424 16.7761424,12 16.5,12 L5.70710678,12 Z M19,3.5 C19,3.22385763 19.2238576,3 19.5,3 C19.7761424,3 20,3.22385763 20,3.5 L20,19.5 C20,19.7761424 19.7761424,20 19.5,20 C19.2238576,20 19,19.7761424 19,19.5 L19,3.5 Z"></path> </g></svg>`;

const left_button = `<svg class="toggle-button-class left" viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>arrow-right-from-line</title> <path d="M31.218 15.838c-0.007-0.058-0.018-0.109-0.031-0.159l0.002 0.008c-0.051-0.223-0.158-0.416-0.305-0.571l0 0.001-5-5c-0.226-0.227-0.539-0.367-0.885-0.367-0.691 0-1.251 0.56-1.251 1.251 0 0.345 0.14 0.658 0.366 0.884v0l2.867 2.866h-18.982c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h18.981l-2.866 2.865c-0.226 0.226-0.366 0.539-0.366 0.884 0 0.691 0.56 1.251 1.251 1.251 0.345 0 0.658-0.14 0.884-0.366l5-5.001c0.012-0.012 0.016-0.029 0.027-0.041 0.099-0.103 0.18-0.223 0.239-0.356l0.003-0.008 0-0.003c0.051-0.13 0.080-0.28 0.080-0.437 0-0.071-0.006-0.141-0.017-0.208l0.001 0.007zM2 0.75c-0.69 0-1.25 0.56-1.25 1.25v0 28c0 0.69 0.56 1.25 1.25 1.25s1.25-0.56 1.25-1.25v0-28c0-0.69-0.56-1.25-1.25-1.25v0z"></path> </g></svg>`;

const right_button = `<svg class="toggle-button-class right" viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>arrow-right-from-line</title> <path d="M31.218 15.838c-0.007-0.058-0.018-0.109-0.031-0.159l0.002 0.008c-0.051-0.223-0.158-0.416-0.305-0.571l0 0.001-5-5c-0.226-0.227-0.539-0.367-0.885-0.367-0.691 0-1.251 0.56-1.251 1.251 0 0.345 0.14 0.658 0.366 0.884v0l2.867 2.866h-18.982c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h18.981l-2.866 2.865c-0.226 0.226-0.366 0.539-0.366 0.884 0 0.691 0.56 1.251 1.251 1.251 0.345 0 0.658-0.14 0.884-0.366l5-5.001c0.012-0.012 0.016-0.029 0.027-0.041 0.099-0.103 0.18-0.223 0.239-0.356l0.003-0.008 0-0.003c0.051-0.13 0.080-0.28 0.080-0.437 0-0.071-0.006-0.141-0.017-0.208l0.001 0.007zM2 0.75c-0.69 0-1.25 0.56-1.25 1.25v0 28c0 0.69 0.56 1.25 1.25 1.25s1.25-0.56 1.25-1.25v0-28c0-0.69-0.56-1.25-1.25-1.25v0z"></path> </g></svg>`;


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
            if (thread && !thread.classList.contains('menu_collapse')) {
                thread.classList.add('menu_collapse');
             }
            return;
        }

        // Add the base class for transition to the thread list element
        // This needs to happen before we determine the initial state or add listeners.
        if (thread) {
             thread.classList.add('menu_collapse');
        } else {
            console.log("Thread element not found when creating toggle.");
            return;
        }

        new_button = button.cloneNode(true);
        new_button.setAttribute('aria-label', 'Thread List Button');
        new_button.style.marginTop = '10px';

        const svg = new_button.querySelector('svg');
        const paths = svg.querySelectorAll('path');
        paths.forEach(path => path.remove());
        new_button.innerHTML = left_button;

        button.parentNode.insertBefore(new_button, button.nextSibling);

        let isHidden = thread.classList.contains('hidden') || window.getComputedStyle(thread).getPropertyValue('display') === "none";
        
        if (isHidden) {
             thread.classList.add('hidden');
             new_button.innerHTML = right_button; // Show expand button
        } else {
             thread.classList.remove('hidden');
             new_button.innerHTML = left_button; // Show collapse button
        }

        new_button.addEventListener('click', () => {
            // Check the current hidden state based on our class
            const currentlyHidden = thread.classList.contains('hidden');

            // Toggle the 'hidden' class. This triggers the CSS transition.
            thread.classList.toggle('hidden', !currentlyHidden);

            // Update our button SVG based on the new state
            if (!currentlyHidden) { // If it was visible and is now hidden
                new_button.innerHTML = right_button; // Show expand button
            }
            else { // If it was hidden and is now visible
                new_button.innerHTML = left_button; // Show collapse button
            }

            // Update button color based on current theme
            updateToggleButtonColor();
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
