// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2025-02-20
// @description  try to take over the world!
// @author       You
// @match        https://freepacman.org/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=freepacman.org
// @grant        none
// ==/UserScript==

/*
keydown { target: body
, key: "ArrowLeft", charCode: 0, keyCode: 37 }
New-Userscript.user.js:19:17
keydown { target: body
, key: "ArrowUp", charCode: 0, keyCode: 38 }
New-Userscript.user.js:19:17
keydown { target: body
, key: "ArrowRight", charCode: 0, keyCode: 39 }
New-Userscript.user.js:19:17
keydown { target: body
, key: "ArrowDown", charCode: 0, keyCode: 40 }
New-Userscript.user.js:19:17
keydown { target: body
, key: "h", charCode: 0, keyCode: 72 }
New-Userscript.user.js:19:17
keydown { target: body
, key: "j", charCode: 0, keyCode: 74 }
New-Userscript.user.js:19:17
keydown { target: body
, key: "k", charCode: 0, keyCode: 75 }
New-Userscript.user.js:19:17
keydown { target: body
, key: "l", charCode: 0, keyCode: 76 }
New-Userscript.user.js:19:17
*/

(function() {
    'use strict';

    document.addEventListener('keydown', function(event) {
        let keyToSimulate = null, key_code = 0;

        switch (event.key) {
            case 'h': // Left arrow
                keyToSimulate = 'ArrowLeft';
                key_code = 37;
                break;
            case 'j': // Down arrow
                keyToSimulate = 'ArrowDown';
                key_code = 40;
                break;
            case 'k': // Up arrow
                keyToSimulate = 'ArrowUp';
                key_code = 38;
                break;
            case 'l': // Right arrow
                keyToSimulate = 'ArrowRight';
                key_code = 39;
                break;
        }

        if (keyToSimulate) {
            console.log("Key %s pressed, simulating %s", event.key, keyToSimulate);
            event.preventDefault(); // Prevent default behavior of h,j,k,l

            // Create and dispatch a new KeyboardEvent for the arrow key
            let arrowEvent = new KeyboardEvent('keydown', {
                key: keyToSimulate,
                keyCode: key_code,

                bubbles: true, // Allow event to bubble up the DOM tree
                cancelable: true, // Allow event to be cancelled
                view: window // Set the view to the current window
            });
            document.body.dispatchEvent(arrowEvent); // Dispatch the event on the document body
        }
    });

})();
