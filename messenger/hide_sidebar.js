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
		margin-left: 5px;
		margin-top: 5px;
}
`);

(function() {
    'use strict';
    let extension_name = "Messenger Hide Sidebar";
    console.log("Running %s", extension_name);

    function find_thread_list() {
        let threadList = document.querySelector('[role="navigation"][aria-label="Thread list"]');
        return (threadList) ? threadList : null;
    }

    function create_new_toggle(button, thread) {
        const toggleButton = button.cloneNode(true);
        // Optionally change aria-label or icon path if needed
        toggleButton.setAttribute('aria-label', 'Thread List Button');
        toggleButton.style.marginTop = '10px';
        // 2. Find the <svg> and its <path>
        const svg = toggleButton.querySelector('svg');
        const paths = svg.querySelectorAll('path');

        // Remove old paths
        paths.forEach(path => path.remove());
        toggleButton.innerHTML = '<svg class="toggle-button-class" viewBox="0 0 18 18" overflow="visible" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#CFF09E" d="M2,3 C2.55228475,3 3,3.44771525 3,4 L3,12 C3,12.5522847 2.55228475,13 2,13 C1.44771525,13 1,12.5522847 1,12 L1,4 C1,3.44771525 1.44771525,3 2,3 Z M10.2929,4.29289 C10.6834,3.90237 11.3166,3.90237 11.7071,4.29289 L15.4142,8 L11.7071,11.7071 C11.3166,12.0976 10.6834,12.0976 10.2929,11.7071 C9.90237,11.3166 9.90237,10.6834 10.2929,10.2929 L11.5858,9 L5,9 C4.44772,9 4,8.55229 4,8 C4,7.44772 4.44772,7 5,7 L11.5858,7 L10.2929,5.70711 C9.90237,5.31658 9.90237,4.68342 10.2929,4.29289 Z"></path> </g></svg>'


        button.parentNode.insertBefore(toggleButton, button.nextSibling);

        const original_display = window.getComputedStyle(thread).getPropertyValue('display');
		console.log("Original display value: ");
		console.log(original_display);
		let isHidden = (original_display === "none");
        toggleButton.addEventListener('click', () => {
            isHidden = !isHidden;
            thread.style.display = isHidden ? 'none' : 'flex';
            // toggleButton.textContent = isHidden ? 'Show Sidebar' : 'Hide Sidebar';
            console.log("Sidebar toggled!");
        });
    }


    function add_thread_list_toggle(thread_list) {
        if (thread_list) {
            // thread_list.style.display = 'none';

            // Find the target element *below* which to insert the button
			let inbox_button =
				document.querySelector('[role="button"][aria-label="Expand inbox sidebar"]') ||
				document.querySelector('[role="button"][aria-label="Collapse inbox sidebar"]');
            if (inbox_button) { // Check if it exists
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
        return true;
    }

    let thread_list_check;
    function start_thread_list_check() {
		thread_list_check = setInterval(() => {
			console.log("Finding thread list div");
			let thread_list = find_thread_list();

			if (thread_list) {
				console.log("Found, adding toggle button");
				clearInterval(thread_list_check); // Stop checking once found
				add_thread_list_toggle(thread_list);
			}
			else {
				console.log("Cannot find thread list div");
			}
		}, 500); // Check every 500 milliseconds (adjust as needed)
	}

    // Start checking for the message box after the page loads.
    start_thread_list_check();
    window.on
    console.log("Init %s finished", extension_name);

})();