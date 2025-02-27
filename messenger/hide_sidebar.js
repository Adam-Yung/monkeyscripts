// ==UserScript==
// @name         Messenger Hide Sidebar
// @namespace    http://tampermonkey.net/

// @version      1.2
// @description  Hide Sidebar from page view
// @author       Bee
// @match        https://www.messenger.com/*
// @run-at       document-end
// @grant        none
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


GM_addStyle(`
	.toggle-button-class {
		margin-right: 5px;
		margin-bottom: 7.5px;
    }
    @media (prefers-color-scheme: dark) {
        .toggle-button-class {
            stroke: #ffffff;
            fill: #ffffff;
        }
    }
    @media (prefers-color-scheme: light) {
        .toggle-button-class {
            stroke: #000000;
            fill: #000000;
        }
    }

`);

(function() {
    'use strict';
    let extension_name = "Messenger Hide Sidebar";
    console.log("Running %s", extension_name);

    function find_thread_list() {
        let threadList = document.querySelector('[role="navigation"][aria-label="Thread list"]');
        // console.log("find_thread_list: ", threadList);
        return (threadList) ? threadList : null;
    }


    // Create the new button
    let new_button = null;
    function create_new_toggle(button, thread) {
        let old_button = document.querySelector('[aria-label="Thread List Button"]');
        if (old_button) {
            console.log("Button already exists, not adding again");
            return;
        }
        new_button = button.cloneNode(true);
        // Optionally change aria-label or icon path if needed
        new_button.setAttribute('aria-label', 'Thread List Button');
        new_button.style.marginTop = '10px';
        // 2. Find the <svg> and its <path>
        const svg = new_button.querySelector('svg');
        const paths = svg.querySelectorAll('path');

        // Remove old paths
        paths.forEach(path => path.remove());
        new_button.innerHTML = '<svg class="toggle-button-class" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)" stroke-width="1.2"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.70710678,12 L8.85355339,15.1464466 C9.04881554,15.3417088 9.04881554,15.6582912 8.85355339,15.8535534 C8.65829124,16.0488155 8.34170876,16.0488155 8.14644661,15.8535534 L4.14644661,11.8535534 C3.95118446,11.6582912 3.95118446,11.3417088 4.14644661,11.1464466 L8.14644661,7.14644661 C8.34170876,6.95118446 8.65829124,6.95118446 8.85355339,7.14644661 C9.04881554,7.34170876 9.04881554,7.65829124 8.85355339,7.85355339 L5.70710678,11 L16.5,11 C16.7761424,11 17,11.2238576 17,11.5 C17,11.7761424 16.7761424,12 16.5,12 L5.70710678,12 Z M19,3.5 C19,3.22385763 19.2238576,3 19.5,3 C19.7761424,3 20,3.22385763 20,3.5 L20,19.5 C20,19.7761424 19.7761424,20 19.5,20 C19.2238576,20 19,19.7761424 19,19.5 L19,3.5 Z"></path> </g></svg>'

        button.parentNode.insertBefore(new_button, button.nextSibling);

        const original_display = window.getComputedStyle(thread).getPropertyValue('display');
		console.log("Original display value: ");
		console.log(original_display);
		let isHidden = (original_display === "none");
        new_button.addEventListener('click', () => {
            isHidden = !isHidden;
            thread.style.display = isHidden ? 'none' : 'flex';
            // toggleButton.textContent = isHidden ? 'Show Sidebar' : 'Hide Sidebar';
            console.log("Sidebar toggled!");
        });
    }


    function add_thread_list_toggle(thread_list) {
        if (thread_list) {
            // thread_list.style.display = 'none';

            // Find the target element below which to insert the button
			let inbox_button =
				document.querySelector('[role="button"][aria-label="Expand inbox sidebar"]') ||
				document.querySelector('[role="button"][aria-label="Collapse inbox sidebar"]');
            if (inbox_button) { // Check if it exists
                console.log("Creating button");
                create_new_toggle(inbox_button, thread_list);
				inbox_button.addEventListener('click', () => {
					console.log("Run add_thread_list_toggle again after each keypress on inbox_button");
					setTimeout(() => {
                        add_thread_list_toggle(thread_list);
					}, 100);
				});

            }
            else {
                console.log("Target element for button placement NOT found.");
                return false;
            }
        } else {
            console.log("Sidebar element NOT found.");
            return false;
        }

        // let icon = document.querySelector("link[rel*='icon']")
        // icon.href = 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.15752-9/480817344_1152606983233583_7896116075902917274_n.png?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_ohc=94Z2TDDESWUQ7kNvgG3sqyS&_nc_oc=AdjzD9QODa-0_1-MTZwW7SIfjo0n9IsEpB_z0wXZ_rWPaaopGbmi12I79VgwmYPeIl4&_nc_zt=23&_nc_ht=scontent-lax3-1.xx&oh=03_Q7cD1gGSsXPROj40lgcGFfT_pEVEnL8RT_mV8n4qZuPE-JuC6g&oe=67E743F9'

        return true;
    }

    let thread_list_check, max_run = 10;
    let thread_list;
    (function() {
        clearInterval(thread_list_check); // Clear any existing interval
        thread_list_check = setInterval(() => {
            if (max_run <= 0) {
                console.log("Failed to add button over 10 times, stop...");
                clearInterval(thread_list_check);
                thread_list_check = null; // Important: Reset the variable
            }
            --max_run;

            console.log("Finding thread list div");
            thread_list = find_thread_list();

            if (thread_list) {
                console.log("Found, adding toggle button");
                if (add_thread_list_toggle(thread_list)) {
                    clearInterval(thread_list_check);
                    thread_list_check = null; // Important: Reset the variable
                }
            } else {
                console.log("Cannot find thread list div");
            }
        }, 500);
    })();

    let resizeTimeout;

    function debouncedResizeHandler() {
    clearTimeout(resizeTimeout); // Clear any previous timeout
    resizeTimeout = setTimeout(function() {
        // Your actual resize handling logic here (the original handleResize content)
        console.log("Debounced resize handling...");
        console.log("Width:", window.innerWidth);
        console.log("Height:", window.innerHeight);

        const thread_list = find_thread_list();
        if (thread_list) {
            add_thread_list_toggle(thread_list);
        }

    }, 250); // Wait 250 milliseconds after the last resize event
    }

    window.addEventListener('resize', debouncedResizeHandler);

    console.log("Init %s finished", extension_name);

})();
