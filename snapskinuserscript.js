// ==UserScript==
// @name         [Snap!] the2000's unnamed skin (v0.1)
// @namespace    https://the2000isawesome.github.io/
// @version      0.1
// @description  A very early version of my Snap! skin. Partially inspired by the Scratch 2.0 design.
// @author       the2000
// @match        *https://snap.berkeley.edu/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

     var styleTag = document.createElement('link');
    styleTag.setAttribute('rel', 'stylesheet');
    styleTag.setAttribute('href', 'https://the2000isawesome.github.io/snaptheme.css');
    document.head.appendChild(styleTag);
    document.getElementsByClassName('logo')[0].src = 'https://the2000isawesome.github.io/snaptheme/topbar-logo.png';
})();
