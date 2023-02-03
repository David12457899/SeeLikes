// ==UserScript==
// @name         OkCupid Like Viewer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Removes the blur on images of people that liked you
// @author       David, Tomer
// @match        https://www.okcupid.com/who-likes-you
// @icon         https://cdn.pixabay.com/photo/2018/02/10/20/48/emoji-3144518_960_720.png
// @require  http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // Wait a few seconds until everything loads
    setTimeout(() => {
        // Remove popup suggestion
        document.getElementsByClassName("likes-you-paywall-explainer-cta")[0].remove();

        // Remove blur
        var stylesheet = document.styleSheets[1]
        stylesheet.insertRule(".usercard-placeholder-thumb { filter: blur(0px) !important; }", 0);

        // Remove image limit
        document.getElementsByClassName('r1HEI1d8cVFinFeIqQpA')[0].style.maxHeight = '100%';
        document.getElementsByClassName('r1HEI1d8cVFinFeIqQpA')[0].style.height = '100%';
    }, 4000)

})();
