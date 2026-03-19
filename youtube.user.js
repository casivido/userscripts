// ==UserScript==
// @name         YouTube Shorts Hider
// @namespace    Youtube
// @version      2026-02-12
// @description  try to take over the world!
// @author       You
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const hideStuff = () => {
        document.querySelectorAll(
            'ytd-rich-section-renderer, #shorts-inner-container'
        ).forEach(el => el.style.display = 'none');
    };

    hideStuff();

    new MutationObserver(hideStuff).observe(document.body, {
        childList: true,
        subtree: true
    });
})();
