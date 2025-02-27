// ==UserScript==
// @name         Change icon
// @namespace    http://tampermonkey.net/
// @version      2025-02-27
// @description  try to take over the world!
// @author       Bee
// @match        https://www.messenger.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=messenger.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const originalFavicon = 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.15752-9/480817344_1152606983233583_7896116075902917274_n.png?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_ohc=94Z2TDDESWUQ7kNvgG3sqyS&_nc_oc=AdjzD9QODa-0_1-MTZwW7SIfjo0n9IsEpB_z0wXZ_rWPaaopGbmi12I79VgwmYPeIl4&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&oh=03_Q7cD1gGSsXPROj40lgcGFfT_pEVEnL8RT_mV8n4qZuPE-JuC6g&oe=67E743F9'

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
