// ==UserScript==
// @name         Enhanced Keyboard Navigation (Improved)
// @namespace    http://tampermonkey.net/
// @version      1.6
// @description  Navigate webpages with a stylish and robust keyboard-only interface (Navigation, Scrolling modes).
// @author       Adam Yung
// @match        http://*/*
// @match        https://*/*
// @grant        GM_addStyle
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    const DEBUG = true;
    const log = (...args) => DEBUG && console.log('[NavScript]', ...args);

    // --- S T Y L E S ---
    GM_addStyle(`
        /* Style for the dedicated navigation highlighter overlay */
        #keyboard-nav-highlighter {
            position: absolute;
            z-index: 99999998; /* Sits just below the mode indicator */
            background-color: rgba(13, 110, 253, 0.15);
            border: 2px solid #0d6efd;
            border-radius: 6px;
            pointer-events: none; /* Clicks pass through to the element below */
            transition: top 0.15s ease-out, left 0.15s ease-out, width 0.15s ease-out, height 0.15s ease-out, opacity 0.15s ease-out;
            opacity: 0;
        }
        #keyboard-nav-highlighter.visible {
            opacity: 1;
        }
        /* Style for the targeted scroll container in Scrolling mode */
        .keyboard-scroll-target {
            outline: 3px dashed #dc3545 !important;
            outline-offset: 2px;
            box-shadow: 0 0 10px rgba(220, 53, 69, 0.5);
        }
        /* Style for the on-screen mode indicator */
        #keyboard-nav-indicator {
            position: fixed;
            bottom: 10px;
            right: 10px;
            background-color: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 5px 10px;
            border-radius: 5px;
            font-family: sans-serif;
            font-size: 12px;
            z-index: 99999999;
            pointer-events: none;
            transition: opacity 0.3s ease-in-out;
            opacity: 0;
        }
        #keyboard-nav-indicator.visible {
            opacity: 1;
        }
    `);

    // --- S T A T E   M A N A G E M E N T ---
    const MODES = {
        NORMAL: 'NORMAL',
        NAVIGATION: 'NAVIGATION',
        SCROLLING: 'SCROLLING'
    };

    let currentMode = MODES.NORMAL;
    let lastFocusedElement = null;
    let focusableElements = [];
    let currentFocusIndex = -1;
    let scrollableElements = [];
    let currentScrollIndex = -1;
    let modeIndicator;
    let navHighlighter;

    // --- M O D E   M A N A G E M E N T ---

    function createUIElements() {
        modeIndicator = document.createElement('div');
        modeIndicator.id = 'keyboard-nav-indicator';
        document.body.appendChild(modeIndicator);

        navHighlighter = document.createElement('div');
        navHighlighter.id = 'keyboard-nav-highlighter';
        document.body.appendChild(navHighlighter);
    }

    function updateModeIndicator() {
        if (!modeIndicator) return;
        modeIndicator.textContent = `Mode: ${currentMode}`;
        if (currentMode !== MODES.NORMAL) {
            modeIndicator.classList.add('visible');
        } else {
            modeIndicator.classList.remove('visible');
        }
    }

    function changeMode(newMode) {
        const oldMode = currentMode;
        if (oldMode === newMode) return;

        cleanupMode(oldMode);
        currentMode = newMode;
        log(`Switched to ${currentMode} mode.`);
        updateModeIndicator();

        switch (currentMode) {
            case MODES.NAVIGATION:
                initializeNavigationMode();
                break;
            case MODES.SCROLLING:
                initializeScrollingMode();
                break;
        }
    }

    function cleanupMode(modeToClean) {
        log(`Cleaning up from mode: ${modeToClean}`);
        if (modeToClean === MODES.NAVIGATION) {
            hideNavHighlighter();
        } else if (modeToClean === MODES.SCROLLING) {
            removeScrollHighlight();
        }
    }

    // --- N A V I G A T I O N   M O D E ---

    function initializeNavigationMode() {
        refreshFocusableElements();
        if (focusableElements.length === 0) {
            log("No focusable elements found on the page.");
            changeMode(MODES.NORMAL);
            return;
        }

        const lastFocusedIndex = lastFocusedElement ? focusableElements.indexOf(lastFocusedElement) : -1;
        if (lastFocusedElement && document.body.contains(lastFocusedElement) && lastFocusedIndex !== -1) {
            currentFocusIndex = lastFocusedIndex;
            log("Restoring focus to last focused element:", lastFocusedElement);
        } else {
            currentFocusIndex = 0;
            log("Focusing on the first available element.");
        }
        focusElement(currentFocusIndex);
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function isElementVisible(el) {
        if (!el) return false;
        const style = window.getComputedStyle(el);
        const rect = el.getBoundingClientRect();
        return (
            style.visibility !== 'hidden' &&
            style.display !== 'none' &&
            rect.width > 0 &&
            rect.height > 0
        );
    }
    
    function onFocusBlur() {
        log('Focused element blurred by user action, removing highlight.');
        hideNavHighlighter();
    }

    function hideNavHighlighter() {
        if (navHighlighter) {
            navHighlighter.classList.remove('visible');
        }
        if (lastFocusedElement) {
            lastFocusedElement.removeEventListener('blur', onFocusBlur);
        }
    }

    function refreshFocusableElements() {
        const selector = 'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"]), [contenteditable="true"]';
        focusableElements = Array.from(document.querySelectorAll(selector))
            .filter(el => !el.disabled && !el.closest('[inert]') && isElementVisible(el));

        focusableElements.sort((a, b) => {
            const rectA = a.getBoundingClientRect();
            const rectB = b.getBoundingClientRect();
            if (Math.abs(rectA.top - rectB.top) > 1) { // Sort by Y if not on the same line
                return rectA.top - rectB.top;
            }
            return rectA.left - rectB.left; // Then sort by X
        });
        log(`Found ${focusableElements.length} focusable elements.`);
    }
    
    function updateHighlighterPosition(targetEl) {
        if (!navHighlighter || !targetEl) return;

        const rect = targetEl.getBoundingClientRect();
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
        const PADDING = 4;

        navHighlighter.style.width = `${rect.width + PADDING * 2}px`;
        navHighlighter.style.height = `${rect.height + PADDING * 2}px`;
        navHighlighter.style.top = `${rect.top + scrollTop - PADDING}px`;
        navHighlighter.style.left = `${rect.left + scrollLeft - PADDING}px`;
        
        navHighlighter.classList.add('visible');
    }

    function focusElement(index) {
        hideNavHighlighter(); // Hide previous before showing new
        if (index >= 0 && index < focusableElements.length) {
            const el = focusableElements[index];
            log('Focusing element:', el);
            el.focus({ preventScroll: true }); // Prevent native scroll, we handle it
            
            updateHighlighterPosition(el);

            lastFocusedElement = el;
            currentFocusIndex = index;
            el.addEventListener('blur', onFocusBlur, { once: true });

            if (!isElementInViewport(el)) {
                 el.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
            }
        }
    }

    // --- S P A T I A L   N A V I G A T I O N   L O G I C (IMPROVED) ---

    function findNextElement(direction) {
        if (currentFocusIndex === -1 || !lastFocusedElement) {
            initializeNavigationMode();
            return;
        }

        log(`Finding next element from [${currentFocusIndex}] in direction: ${direction}`);
        const currentRect = lastFocusedElement.getBoundingClientRect();
        const currentCenter = {
            x: currentRect.left + currentRect.width / 2,
            y: currentRect.top + currentRect.height / 2
        };

        let bestCandidateIndex = -1;
        let minDistance = Infinity;

        for (let i = 0; i < focusableElements.length; i++) {
            if (i === currentFocusIndex) continue;

            const candidate = focusableElements[i];
            const candidateRect = candidate.getBoundingClientRect();
            const candidateCenter = {
                x: candidateRect.left + candidateRect.width / 2,
                y: candidateRect.top + candidateRect.height / 2
            };

            let isViable = false;
            switch (direction) {
                case 'up':    if (candidateCenter.y < currentCenter.y) isViable = true; break;
                case 'down':  if (candidateCenter.y > currentCenter.y) isViable = true; break;
                case 'left':  if (candidateCenter.x < currentCenter.x) isViable = true; break;
                case 'right': if (candidateCenter.x > currentCenter.x) isViable = true; break;
            }
            
            if (isViable) {
                const dx = candidateCenter.x - currentCenter.x;
                const dy = candidateCenter.y - currentCenter.y;
                let distance;
                // Heavily penalize deviation from the primary axis of movement
                if (direction === 'up' || direction === 'down') {
                    distance = Math.abs(dy) + Math.abs(dx) * 3;
                } else {
                    distance = Math.abs(dx) + Math.abs(dy) * 3;
                }

                if (distance < minDistance) {
                    minDistance = distance;
                    bestCandidateIndex = i;
                }
            }
        }
        
        if (bestCandidateIndex === -1) {
            log("No ideal spatial candidate found, falling back to DOM order.");
            if (direction === 'down' || direction === 'right') {
                bestCandidateIndex = (currentFocusIndex + 1) % focusableElements.length;
            } else {
                bestCandidateIndex = (currentFocusIndex - 1 + focusableElements.length) % focusableElements.length;
            }
        }

        log('Best candidate found:', focusableElements[bestCandidateIndex]);
        focusElement(bestCandidateIndex);
    }

    // --- S C R O L L I N G   M O D E ---

    function initializeScrollingMode() {
        refreshScrollableElements();
        if (scrollableElements.length > 0) {
            currentScrollIndex = 0;
            highlightScrollTarget(currentScrollIndex);
        } else {
            log("No scrollable areas found.");
            changeMode(MODES.NORMAL);
        }
    }
    
    function isElementScrollable(el) {
        const style = window.getComputedStyle(el);
        const overflowY = style.getPropertyValue('overflow-y');
        const isScrollableY = (overflowY === 'scroll' || overflowY === 'auto') && el.scrollHeight > el.clientHeight;
        const overflowX = style.getPropertyValue('overflow-x');
        const isScrollableX = (overflowX === 'scroll' || overflowX === 'auto') && el.scrollWidth > el.clientWidth;
        return isScrollableY || isScrollableX;
    }

    function refreshScrollableElements() {
        // Start with the document's root, which is the main window scroll
        scrollableElements = [document.documentElement]; 
        document.querySelectorAll('*').forEach(el => {
            if (isElementScrollable(el) && !scrollableElements.includes(el) && isElementVisible(el)) {
                 scrollableElements.push(el);
            }
        });
        log(`Found ${scrollableElements.length} scrollable elements.`);
    }

    function cycleScrollTarget() {
        if (scrollableElements.length < 2) return;
        removeScrollHighlight();
        currentScrollIndex = (currentScrollIndex + 1) % scrollableElements.length;
        log('Cycling to next scroll target:', scrollableElements[currentScrollIndex]);
        highlightScrollTarget(currentScrollIndex);
    }
    
    function highlightScrollTarget(index) {
        if (index >= 0 && index < scrollableElements.length) {
            const el = scrollableElements[index];
            el.classList.add('keyboard-scroll-target');
            if(!isElementInViewport(el)){
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }

    function removeScrollHighlight() {
        const highlighted = document.querySelector('.keyboard-scroll-target');
        if (highlighted) {
            highlighted.classList.remove('keyboard-scroll-target');
        }
    }

    function scrollTarget(direction) {
        if (currentScrollIndex === -1 || !scrollableElements[currentScrollIndex]) return;
        const target = scrollableElements[currentScrollIndex];
        const scrollAmount = window.innerHeight * 0.15; // Scroll 15% of viewport height
        const scrollX = (direction === 'left' ? -scrollAmount : (direction === 'right' ? scrollAmount : 0));
        const scrollY = (direction === 'up' ? -scrollAmount : (direction === 'down' ? scrollAmount : 0));

        if (target === document.documentElement) {
            window.scrollBy({ top: scrollY, left: scrollX, behavior: 'smooth' });
        } else {
            target.scrollBy({ top: scrollY, left: scrollX, behavior: 'smooth' });
        }
    }

    // --- M A I N   E V E N T   L I S T E N E R ---

    document.addEventListener('keydown', (e) => {
        // Ignore key events when focused on an input-like field unless it's a mode-switch
        const targetTagName = e.target.tagName;
        const isInput = ['INPUT', 'TEXTAREA', 'SELECT'].includes(targetTagName) || e.target.isContentEditable;
        
        if (e.ctrlKey && e.shiftKey) {
            e.preventDefault();
            e.stopPropagation();
            log('Mode switch key detected:', e.key);
            switch (e.key.toLowerCase()) {
                case 'n': changeMode(MODES.NORMAL); break;
                case 'b': changeMode(MODES.NAVIGATION); break;
                case 's': changeMode(MODES.SCROLLING); break;
            }
            return;
        }

        if (currentMode === MODES.NORMAL) return;
        // In navigation mode, allow typing in inputs. In scroll mode, block everything.
        if (isInput && currentMode === MODES.NAVIGATION) return;


        let handled = false;
        if (currentMode === MODES.NAVIGATION) {
            handled = true;
            switch (e.key) {
                case 'j': case 'ArrowDown': findNextElement('down'); break;
                case 'k': case 'ArrowUp': findNextElement('up'); break;
                case 'h': case 'ArrowLeft': findNextElement('left'); break;
                case 'l': case 'ArrowRight': findNextElement('right'); break;
                default:
                    if (e.ctrlKey) {
                         switch(e.key) {
                            case 'n': findNextElement('down'); break;
                            case 'p': findNextElement('up'); break;
                            case 'b': findNextElement('left'); break;
                            case 'f': findNextElement('right'); break;
                            default: handled = false;
                        }
                    } else { handled = false; }
            }
        } else if (currentMode === MODES.SCROLLING) {
             handled = true;
             switch (e.key) {
                case 'k': case 'ArrowUp': scrollTarget('up'); break;
                case 'j': case 'ArrowDown': scrollTarget('down'); break;
                case 'h': case 'ArrowLeft': scrollTarget('left'); break;
                case 'l': case 'ArrowRight': scrollTarget('right'); break;
                case 'Tab': cycleScrollTarget(); break;
                 default: handled = false;
             }
        }
        
        if (handled) {
            e.preventDefault();
            e.stopPropagation();
        }
    }, true); // Use capture phase to intercept events early

    // Initialize on page load
    window.addEventListener('load', () => {
        createUIElements();
        updateModeIndicator();
        log("Enhanced Keyboard Navigation script loaded. Press Ctrl+Shift+B to start navigating.");
    });
})();

