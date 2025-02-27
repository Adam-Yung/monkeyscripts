// ==UserScript==
// @name         Messenger Auto Focus on Keypress
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Automatically focuses the Messenger message input box on any keypress.
// @author       Gemini (Bard, based on user prompt)
// @match        https://www.messenger.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=messenger.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to find the message input box.  This is crucial and may need
    // adjustment if Facebook changes its HTML structure.  Use your browser's
    // developer tools (usually F12) to inspect the HTML and find a reliable
    // selector.  Look for a unique ID, class, or other attribute.
    function findMessageBox() {
        // Example using a class name.  Adjust this if needed!
        // It's VERY common for Facebook to change class names, so a more robust approach
        // might be needed.  Look for consistent attributes or parent elements.
        // const messageBox = document.querySelector('._1mf'); // Example - REPLACE THIS!

        // More robust example. Uses a combination of attributes.  Inspect the
        // message input element in your browser's developer tools and find
        // some stable attributes.
        const messageBox = document.querySelector('[aria-label="Message"][aria-placeholder="Aa"][contenteditable="true"]');

        if (messageBox) {
            return messageBox;
        }

        // Alternative approach:  Find the parent of an element you *can* easily
        // identify, then traverse down to the input box.  This is useful if the
        // input itself is hard to target.
        // const someElement = document.querySelector('#someStableElement');
        // if (someElement) {
        //      messageBox = someElement.querySelector('.messageInputBox'); // Example
        //      return messageBox;
        // }


        return null; // Return null if the message box isn't found
    }

    document.addEventListener('keydown', function(event) {
        const messageBox = findMessageBox();

        // Check if the currently active element is an input, textarea, or select.
        const activeElement = document.activeElement;
        const isInput = activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA' || activeElement.tagName === 'SELECT';

        // More robust check for contenteditable elements (if needed):
        const isContentEditable = activeElement.contentEditable === 'true'; // Check for string "true", not boolean

        if (messageBox && document.activeElement !== messageBox && !isInput && !isContentEditable) { // Add conditions
            messageBox.focus();
            // Optional: messageBox.select();
        }
    });

    // Optional:  A more robust way to handle dynamic loading of the message box.
    // Facebook might load the message input asynchronously, so we periodically
    // check for it.
    let messageBoxCheckInterval;
    function startMessageBoxCheck() {
      messageBoxCheckInterval = setInterval(() => {
        const messageBox = findMessageBox();
        if (messageBox) {
          clearInterval(messageBoxCheckInterval); // Stop checking once found
          messageBox.focus(); // Focus it immediately
        }
      }, 500); // Check every 500 milliseconds (adjust as needed)
    }

    // Start checking for the message box after the page loads.
    window.addEventListener('load', startMessageBoxCheck);

    // If the page uses AJAX to load conversations, you might need to
    // re-trigger the focus logic.  This is more complex and depends on how
    // Messenger updates its content.  Look for events related to content
    // loading (e.g., mutation observers, or custom events if available).
    // Example (highly dependent on Messenger's implementation):
    // document.addEventListener('someMessengerConversationLoadedEvent', function() {
    //   setTimeout(function() { // Small delay to ensure the element is in the DOM
    //       const messageBox = findMessageBox();
    //       if (messageBox) {
    //         messageBox.focus();
    //       }
    //   }, 200);
    // });

})();
