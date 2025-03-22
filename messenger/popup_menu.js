// ==UserScript==
// @name         Selectable Options Menu
// @namespace    http://your-namespace.com
// @version      1.0
// @description  Creates a selectable options menu on YouTube with circular images and text.
// @icon         https://www.google.com/s2/favicons?sz=64&domain=messenger.com
// @author       Adam Yung
// @match        https://www.messenger.com/*
// @grant        none
// ==/UserScript==


// --- CSS Styles ---
const css_styles = `
    #myMenuOverlay {
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0,0,0,0.4);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #myMenuContainer {
        background-color: #fefefe;
        padding: 20px;
        border: 1px solid #888;
        width: fit-content; /* Adjust width to content */
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        border-radius: 10px;
        display: flex; /* Arrange options horizontally */
        flex-direction: column; /* Stack options vertically */
        gap: 10px; /* Spacing between options */
    }

    .menu-option {
        display: flex;
        align-items: center;
        padding: 10px;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        justify-content: space-between;
    }

    .menu-option:hover,
    .menu-option:focus {
        background-color: #f0f0f0;
    }

    .option-image-container {
        width: 40px;
        height: 40px;
        border-radius: 50%; /* Make it circular */
        overflow: hidden; /* Hide any part of the image that goes outside the circle */
        margin-right: 10px;
        background-color: #ddd; /* Placeholder background */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .option-image {
        width: 100%;
        height: 100%;
        object-fit: cover; /* Ensure the image covers the entire circle */
    }

    .option-text {
        font-size: 16px;
        flex-grow: 1; /* Fill remaining space */
    }

        .unread-chat .option-text {
        font-weight: bold;
    }

    .unread-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #0078FF; /* Blue color */
    }

    #myMenuDismissButton {
        background-color: #f44336; /* Red */
        border: none;
        color: white;
        padding: 8px 16px;
        text-align: center;
        text-decoration: none;
        display: block; /* Make it take full width */
        font-size: 14px;
        margin-top: 15px;
        cursor: pointer;
        border-radius: 5px;
        align-self: center; /* Center the button in the container */
    }

    #myMenuDismissButton:hover {
        background-color: #d32f2f;
    }

    /* Dark Mode Styles */
    .dark-mode #myMenuOverlay {
        background-color: rgba(0, 0, 0, 0.7); /* Darker overlay */
    }

    .dark-mode #myMenuContainer {
        background-color: #333; /* Dark background */
        border: 1px solid #555; /* Darker border */
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.6); /* Darker shadow */
        color: #eee; /* Light text */
    }

    .dark-mode .menu-option {
        color: #ddd; /* Slightly lighter text for options */
    }

    .dark-mode .menu-option:hover,
    .dark-mode .menu-option:focus {
        background-color: #555; /* Darker hover/focus */
        color: #fff; /* White text on hover/focus */
    }

    .dark-mode .option-image-container {
        background-color: #555; /* Darker placeholder background */
    }

    .dark-mode #myMenuDismissButton {
        background-color: #c62828; /* Darker red */
        color: #fff;
    }

    .dark-mode #myMenuDismissButton:hover {
        background-color: #a71d1d; /* Even darker red */
    }
`;

(function() {
    'use strict';

    let menu_open = false;

    // --- CSS for the Menu ---
    GM_addStyle(css_styles);

    let overlay = null;
    let overlay_buttons = [];

    // --- HTML Structure for the Menu ---
    function createMenu() {
        if (overlay) {
            overlay.remove();
        }
        overlay = document.createElement('div');
        overlay.id = 'myMenuOverlay';
        overlay.style.display = 'none';

        const container = document.createElement('div');
        container.id = 'myMenuContainer';

        // Options data (you can extend this)
        const optionsData = get_chat_list();



        // Create menu options
        optionsData.forEach(option => {
            /*
            console.log("Creating entry for\nName: %s\nimg: %s\nlink: %s",
                        option.text,
                        option.imageUrl,
                        option.link.href
                       );
            */
            const optionDiv = document.createElement('div');
            optionDiv.classList.add('menu-option');
            optionDiv.tabIndex = 0;
            if (option.unread) {
                optionDiv.classList.add('unread-chat');
            }

            overlay_buttons.push(optionDiv);

            const imageContainer = document.createElement('div');
            imageContainer.classList.add('option-image-container');

            const image = document.createElement('img');
            image.classList.add('option-image');
            image.src = option.imageUrl;
            image.alt = option.text;

            imageContainer.appendChild(image);

            const textSpan = document.createElement('span');
            textSpan.classList.add('option-text');
            textSpan.textContent = option.text;

            optionDiv.appendChild(imageContainer);
            optionDiv.appendChild(textSpan);
            container.appendChild(optionDiv);


            if (option.unread) {
                const unreadDot = document.createElement('div');
                unreadDot.classList.add('unread-dot');
                optionDiv.appendChild(unreadDot);
            }


            // Add event listener for option selection (example)
            optionDiv.addEventListener('click', () => chat_selection(option));
            // Add event listener for keyboard navigation (optional, for Enter key selection)
            optionDiv.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    chat_selection(option);
                }
            });
        });

        /*
        // Dismiss button
        const dismissButton = document.createElement('button');
        dismissButton.id = 'myMenuDismissButton';
        dismissButton.textContent = 'Close Menu';
        dismissButton.addEventListener('click', hideMenu);

        container.appendChild(dismissButton);
        */
        if (isDarkModeEnabled()) {
            document.body.classList.add('dark-mode');
        }
        else {
            document.body.classList.remove('dark-mode');
        }
        overlay.appendChild(container);
        document.body.appendChild(overlay);

        return { overlay };
    }

    function chat_selection(option) {
        console.log(`Selected: ${option.text}`);
        hideMenu();
        if (window.location.href == option.link.href) {
            console.log("Already on selected chat");
        }
        else {
            option.link.click();
        }
    }
    // --- Function to Show the Menu ---
    function showMenu() {
        const menuElements = getMenuElements();
        menuElements.overlay.style.display = 'flex';
        const firstOption = document.querySelector('#myMenuContainer .menu-option');
        if (firstOption) {
            firstOption.focus();
        }
        menu_open = true;
    }

    // --- Function to Hide the Menu ---
    function hideMenu() {
        overlay.style.display = 'none';
        overlay.remove();
        document.body.classList.remove('dark-mode');

        overlay = null;
        menu_open = false;
    }

    function getMenuElements() {
        let menuElementsCache = createMenu();

        return menuElementsCache;
    }


    function get_chat_list() {
        let options = [];
        const chatListContainer = document.querySelectorAll('[class="x1n2onr6"]');

        if (chatListContainer.length === 0) {
            console.error("Error: Chat list container element not found.");
            return;
        }

        const chatList = chatListContainer[0].children;

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

            const name = nameElement ? nameElement.textContent : "N/A";
            const img = imgElement ? imgElement.src : "N/A";
            const unread = !!unreadElement; // Check if the unread element exists


            options.push({text: name, imageUrl: img, link: linkElement, unread: unread});
        }

        return options
    }

    document.addEventListener('keydown', function(event) {
        if (event.ctrlKey && event.key === '`') {
            showMenu();
            return;
        }

        // if (menu_open) {
        //     switch(event.key) {
        //         case '`':

        //     }
        // }
    });



})();

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


function isDarkModeEnabled() {
    return document.documentElement.classList.contains('__fb-dark-mode');
}
