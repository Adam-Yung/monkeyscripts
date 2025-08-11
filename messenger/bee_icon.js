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
    const originalFavicon = 'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.15752-9/528039451_24035391102799906_1825240269288145231_n.png?_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_ohc=6fm_h5Yjr1EQ7kNvwHrc--V&_nc_oc=AdmFphHsmQ6aPVZj0pkP2Wb4TDSoHR8yc0XZEhvTESNwQ67vwnL91zJ6lv7Kn4jM86IrPIfVCj_-eckqYKIjxCLC&_nc_zt=23&_nc_ht=scontent-sjc3-1.xx&oh=03_Q7cD3AGpd3hNVfzPIhS26pW_MVLt_pwbT5Hd18QDbV2QerCfIA&oe=68C0B9EE';

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
