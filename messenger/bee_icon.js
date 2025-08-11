// ==UserScript==
// @name         Change icon
// @namespace	https://dev.mooibee.us
// @version      2025-02-27
// @description  try to take over the world!
// @author       Bee
// @match        https://www.messenger.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=messenger.com
// @run-at       document-body
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const originalFavicon = 'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.15752-9/527666362_1304318201076971_5041916544845737421_n.png?_nc_cat=100&ccb=1-7&_nc_sid=9f807c&_nc_ohc=9UfeTkLGf2EQ7kNvwGoa0EX&_nc_oc=AdnEIfZrPGIddQ7owvbJ4yK9m3hP8rNnl42VqB78rgrA5ChFXXB_tgXv_Jt2TNxnvZqwQ5P3aHIV7brVaSOXnRF6&_nc_zt=23&_nc_ht=scontent-sjc3-1.xx&oh=03_Q7cD3AENC8K0fp8_TO6WjCzup8ec7LjmQfakrLdtgYVK23CTfQ&oe=68C09CC4';

    const faviconLink = document.querySelector('link[rel="shortcut icon"]');

    function change_icon() {
        console.log('Favicon changed');
        faviconLink.href = originalFavicon;
    }
    let observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.attributeName === 'href' && mutation.target.href !== originalFavicon) {
                console.log('Favicon changed');
                change_icon(); // Call your function
            }
        });
    });

    const observerConfig = { attributes: true };

    change_icon();
    observer.observe(faviconLink,observerConfig);
})();
