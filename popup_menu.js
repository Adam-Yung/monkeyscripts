// ==UserScript==
// @name         Selectable Options Menu
// @namespace    http://your-namespace.com
// @version      1.0
// @description  Creates a selectable options menu on YouTube with circular images and text.
// @icon         https://www.google.com/s2/favicons?sz=64&domain=messenger.com
// @author       Adam Yung
// @match        https://www.messenger.com/*
// @grant        GM_xmlhttpRequest
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

(function() {
    'use strict';

    // --- CSS for the Menu ---
    GM_addStyle(`
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
        }

        .menu-option:hover {
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
    `);

    // --- HTML Structure for the Menu ---
    function createMenu() {
        const overlay = document.createElement('div');
        overlay.id = 'myMenuOverlay';
        overlay.style.display = 'none';

        const container = document.createElement('div');
        container.id = 'myMenuContainer';

        // Options data (you can extend this)
        const optionsData = [
            { text: "Yourself", imageUrl: "https://via.placeholder.com/40/007bff/FFFFFF?Text=You" },
            { text: "Person 1", imageUrl: "https://via.placeholder.com/40/28a745/FFFFFF?Text=P1" },
            { text: "Person 2", imageUrl: "https://via.placeholder.com/40/dc3545/FFFFFF?Text=P2" }
        ];

        // Create menu options
        optionsData.forEach(option => {
            const optionDiv = document.createElement('div');
            optionDiv.classList.add('menu-option');

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

            // Add event listener for option selection (example)
            optionDiv.addEventListener('click', function() {
                console.log(`Selected: ${option.text}`);
                hideMenu(); // Optionally hide the menu after selection
                // You can add more logic here based on the selected option
            });
        });

        // Dismiss button
        const dismissButton = document.createElement('button');
        dismissButton.id = 'myMenuDismissButton';
        dismissButton.textContent = 'Close Menu';
        dismissButton.addEventListener('click', hideMenu);

        container.appendChild(dismissButton);
        overlay.appendChild(container);
        document.body.appendChild(overlay);

        return { overlay };
    }

    // --- Function to Show the Menu ---
    function showMenu() {
        const menuElements = getMenuElements();
        menuElements.overlay.style.display = 'flex';
    }

    // --- Function to Hide the Menu ---
    function hideMenu() {
        const menuElements = getMenuElements();
        menuElements.overlay.style.display = 'none';
    }

    // --- Get or Create Menu Elements (Singleton) ---
    let menuElementsCache = null;
    function getMenuElements() {
        if (!menuElementsCache) {
            menuElementsCache = createMenu();
        }
        return menuElementsCache;
    }


    function fetch_page(url, _callback) {
        GM_xmlhttpRequest({
            method: 'GET',
            url: url,
            onload: _callback
        })
    }
    function fetch_threads(response) {
        // chat_list = document.querySelectorAll('[class="x1n2onr6"]')
        console.log(response.responseText);
    }

    function get_chat_list() {
        fetch_page('https://www.messenger.com/', fetch_threads);
    }


    // --- Example: Show menu after page load ---
    window.addEventListener('load', function() {
        showMenu();
        get_chat_list();
    });

})();
