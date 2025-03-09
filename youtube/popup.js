// ==UserScript==
// @name         YouTube Popup Dialog
// @namespace    http://your-namespace.com
// @version      1.0
// @description  Creates a popup dialog on YouTube with a dismiss button
// @author       You
// @match        https://www.youtube.com/*
// @grant        GM_addStyle
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

    // --- CSS for the Popup ---
    GM_addStyle(`
        #myPopupOverlay {
            position: fixed; /* Stay in place */
            z-index: 1; /* Sit on top */
            left: 0;
            top: 0;
            width: 100%; /* Full width */
            height: 100%; /* Full height */
            overflow: auto; /* Enable scroll if needed */
            background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
            display: flex; /* Enable flexbox for centering */
            justify-content: center; /* Center horizontally */
            align-items: center; /* Center vertically */
        }

        #myPopupContainer {
            background-color: #fefefe;
            margin: 15% auto; /* 15% from the top and centered */
            padding: 20px;
            border: 1px solid #888;
            width: auto; /* Could be more or less, depending on screen size */
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            border-radius: 5px;
        }

        #myPopupDialog {
            margin-bottom: 15px;
            font-size: 16px;
        }

        #myPopupButton {
            background-color: #4CAF50; /* Green */
            border: none;
            color: white;
            padding: 10px 20px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
            border-radius: 5px;
        }

        #myPopupButton:hover {
            background-color: #45a049;
        }
    `);

    // --- HTML Structure for the Popup ---
    function createPopup() {
        // Overlay div (the dark background)
        const overlay = document.createElement('div');
        overlay.id = 'myPopupOverlay';
        overlay.style.display = 'none'; // Initially hidden

        // Container div (the white box)
        const container = document.createElement('div');
        container.id = 'myPopupContainer';

        // Dialog text
        const dialogText = document.createElement('p');
        dialogText.id = 'myPopupDialog';
        dialogText.textContent = "Hello Mooi!"; // Default message

        // Dismiss button
        const dismissButton = document.createElement('button');
        dismissButton.id = 'myPopupButton';
        dismissButton.textContent = 'Dismiss';

        // Append elements
        container.appendChild(dialogText);
        container.appendChild(dismissButton);
        overlay.appendChild(container);

        document.body.appendChild(overlay);

        return { overlay, dialogText, dismissButton }; // Return references to elements
    }

    // --- Function to Show the Popup ---
    function showPopup(message) {
        const popupElements = getPopupElements(); // Get elements, creating if not exist
        popupElements.dialogText.textContent = message;
        popupElements.overlay.style.display = 'flex'; // Or 'block' depending on centering

        // Focus on the dismiss button for accessibility (optional)
        popupElements.dismissButton.focus();
    }

    // --- Function to Hide the Popup ---
    function hidePopup() {
        const popupElements = getPopupElements();
        popupElements.overlay.style.display = 'none';
    }

    // --- Get or Create Popup Elements (Singleton pattern to ensure only one popup) ---
    let popupElementsCache = null;
    function getPopupElements() {
        if (!popupElementsCache) {
            popupElementsCache = createPopup();
            // Add event listener to the button only once when created
            popupElementsCache.dismissButton.addEventListener('click', hidePopup);
        }
        return popupElementsCache;
    }

    // --- Example: Show popup after page load (you can trigger it based on other events) ---
    window.addEventListener('load', function() {
        // Example usage - you can call showPopup() anywhere in your script now.
        // For instance, based on a button click on the YouTube page, or after a video starts playing, etc.
        showPopup("Hello Froggy");
    });

    // --- Example of how you might trigger it from within YouTube page elements (example) ---
    // You'd need to identify a specific element on YouTube to attach an event to.
    // For demonstration, let's pretend there's a button with id 'myYoutubeTriggerButton'
    /*
    let youtubeTriggerButton = document.getElementById('myYoutubeTriggerButton'); // Replace with actual YouTube element selector if needed
    if (youtubeTriggerButton) {
        youtubeTriggerButton.addEventListener('click', function() {
            showPopup("You clicked the YouTube trigger button!");
        });
    }
    */

})();