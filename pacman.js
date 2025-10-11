// ==UserScript==
// @name         Pac-Man Vim Keys & Auto-Pause
// @namespace    https://dev.mooibee.us
// @version      2025-10-10
// @description  Remaps h,j,k,l to arrow keys and auto-pauses the game on tab switch.
// @author       You
// @match        https://freepacman.org/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=freepacman.org
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    /**
     * Creates and dispatches a keyboard event on the document body.
     * @param {string} key - The key value of the event (e.g., 'ArrowLeft', 'Escape').
     * @param {number} keyCode - The numerical key code for the event.
     */
    function simulateKeyPress(key, keyCode) {
        const event = new KeyboardEvent('keydown', {
            key: key,
            keyCode: keyCode,
            bubbles: true,
            cancelable: true,
            view: window
        });
        document.body.dispatchEvent(event);
    }

    // --- Key Remapping Logic (h,j,k,l to Arrows) ---

    const keyMap = {
        'h': { key: 'ArrowLeft',  keyCode: 37 }, // Left
        'j': { key: 'ArrowDown',  keyCode: 40 }, // Down
        'k': { key: 'ArrowUp',    keyCode: 38 }, // Up
        'l': { key: 'ArrowRight', keyCode: 39 }  // Right
    };

    document.addEventListener('keydown', (event) => {
        // Check if the pressed key is one we need to remap.
        const mapping = keyMap[event.key];
        if (mapping) {
            // Prevent the default browser action for the key (e.g., scrolling).
            event.preventDefault();
            // Simulate the corresponding arrow key press.
            simulateKeyPress(mapping.key, mapping.keyCode);
        }
    });

    // --- Auto Pause/Unpause Logic ---

    // When the tab loses focus (e.g., you switch to another window),
    // send 'Escape' to pause the game.
    window.addEventListener('blur', () => {
        console.log('Tab lost focus. Simulating Escape key to pause.');
        simulateKeyPress('Escape', 27);
    });

    // When the tab regains focus, send 'Escape' again to unpause.
    window.addEventListener('focus', () => {
        console.log('Tab gained focus. Simulating Escape key to unpause.');
        simulateKeyPress('Escape', 27);
    });

})();
