// ==UserScript==
// @name         Mail hide stupid banner (Robust)
// @namespace    http://tampermonkey.net/
// @version      2025-04-07.1
// @description  Mail hide stupid banner using MutationObserver and a stable selector
// @author       You
// @match        https://mail.google.com/*
// @icon         https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_2x_r5.png
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    // --- IMPORTANT ---
    // Replace this with a stable CSS selector for the banner you want to hide.
    // Use browser developer tools (F12 -> Inspect) to find attributes like
    // class, role, aria-label, data-*, etc. Avoid dynamic IDs like ":7".
    // const BANNER_SELECTOR = 'div.your-banner-selector';
    // Example selectors (replace with one that works for YOUR banner):
    // const BANNER_SELECTOR = 'div[role="alert"]'; // If it's an alert role
    // const BANNER_SELECTOR = 'div[aria-label="Important announcement"]'; // Check aria-label
    const BANNER_SELECTOR = '.ZY'; // If there's a unique class
    // -----------------

    function hideBanner() {
        // Use querySelectorAll in case multiple matching elements appear
        const banners = document.querySelectorAll(BANNER_SELECTOR);
        if (banners.length > 0) {
            console.log(`Found ${banners.length} banner(s) with selector "${BANNER_SELECTOR}". Hiding...`);
            banners.forEach(banner => {
                // Check if already hidden to avoid unnecessary style changes
                if (banner.style.display !== 'none') {
                     banner.style.display = 'none';
                     console.log('Banner hidden:', banner);
                }
            });
        }
        // Optional: uncomment the line below to debug if selector is not found
        // else { console.log(`Banner with selector "${BANNER_SELECTOR}" not found.`); }
    }

    // --- MutationObserver Setup ---
    // Select the node that will be observed for mutations
    // document.body is usually a good choice for elements appearing anywhere
    const targetNode = document.body;

    // Options for the observer (watch for nodes being added/removed in the whole subtree)
    const config = { childList: true, subtree: true };

    // Callback function to execute when mutations are observed
    const callback = function(mutationsList, observer) {
        // We only care if nodes were added
        let nodeAdded = false;
        for(const mutation of mutationsList) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
               nodeAdded = true;
               break; // No need to check further mutations in this batch
            }
        }
        // If nodes were added, check for the banner again
        if (nodeAdded) {
             // Use a small timeout to allow the DOM to settle slightly if needed,
             // though often it's not necessary. 0ms defers execution slightly.
            setTimeout(hideBanner, 0);
        }
    };

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

    // --- Initial Run & Start Observing ---
    // Run once initially in case the banner is already present when the script loads
    // Using requestIdleCallback or setTimeout ensures we don't run too early
    // Changed @run-at to document-idle, so a small delay might still be good
    setTimeout(hideBanner, 500); // Initial check after a short delay

    // Start observing the target node for configured mutations
    if (targetNode) {
        observer.observe(targetNode, config);
        console.log("MutationObserver started watching for banner.");
    } else {
        console.error("Target node for MutationObserver not found!");
    }

    // Optional: Disconnect the observer when the page is unloading
    // window.addEventListener('beforeunload', () => {
    //     observer.disconnect();
    //     console.log("MutationObserver disconnected.");
    // });

})();
