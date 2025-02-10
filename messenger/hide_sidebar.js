// ==UserScript==
// @name         Messenger Hide Sidebar
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Hide Sidebar from page view
// @author       Bee
// @match        https://www.messenger.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let extension_name = "Messenger Hide Sidebar";
    console.log("Running %s", extension_name);

    function find_sidebar() {
        const side_bar = document.querySelector('[role="navigation"] > div:first-child');
        return (side_bar) ? side_bar : null;
    }

    const side_bar = find_sidebar();

    if (side_bar) {
        side_bar.style.display = 'none';

        // Find the target element *below* which to insert the button
        const targetElement = document.querySelector('[aria-label="Expand inbox sidebar"]'); // Selects the div you provided

        if (targetElement) { // Check if it exists
            const toggleButton = document.createElement('button');
            toggleButton.textContent = 'Toggle Sidebar';
            toggleButton.style.marginTop = '10px'; // Add some spacing
            toggleButton.style.display = 'block'; // Makes it a block element so it sits below
            toggleButton.style.width = '100%'; // Makes the button full width of the parent.
            targetElement.parentNode.insertBefore(toggleButton, targetElement.nextSibling); // Insert the button *after* the target

            let isHidden = true;
            toggleButton.addEventListener('click', () => {
                isHidden = !isHidden;
                side_bar.style.display = isHidden ? 'none' : 'block';
                toggleButton.textContent = isHidden ? 'Show Sidebar' : 'Hide Sidebar';
            });
        } else {
            console.log("Target element for button placement NOT found.");
        }
    } else {
        console.log("Sidebar element NOT found.");
    }
})();