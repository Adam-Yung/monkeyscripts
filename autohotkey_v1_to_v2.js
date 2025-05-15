// ==UserScript==
// @name         AutoHotkey V1 to V2 Docs Redirect
// @namespace    https://dev.mooibee.us
// @version      0.1
// @description  Redirects AutoHotkey V1 documentation pages to V2 documentation pages.
// @author       Adam
// @match        https://www.autohotkey.com/docs/v1/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // Get the current URL
    var currentUrl = window.location.href;

    // Check if the URL contains the V1 documentation path
    if (currentUrl.includes('/docs/v1/')) {
        // Construct the new URL by replacing '/v1/' with '/v2/'
        var newUrl = currentUrl.replace('/docs/v1/', '/docs/v2/');

        // Redirect to the new URL immediately using replace()
        // Using replace() is better than assign() for redirects as it
        // prevents the original V1 page from being added to the browser history.
        window.location.replace(newUrl);
    }
})();
