// ==UserScript==
// @name         [Scratch] Practical top tabs
// @namespace    https://the2000isawesome.github.io
// @version      1.0
// @description  Restores the "discuss" tab, and adds a "wiki" tab
// @author       the2000
// @match        *https://scratch.mit.edu/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if (document.getElementById('app') == null) {
        let nav = document.getElementsByClassName('site-nav')[0];
        nav.children[2].innerHTML = '<a href="/discuss/">Discuss</a>';
        nav.children[3].innerHTML = '<a href="https://en.scratch-wiki.info/wiki/Scratch_Wiki_Home">Learn</a>';
    } else if (document.getElementById('pagewrapper') == null) {
        document.getElementsByClassName('ideas')[0].innerHTML = '<a href="/discuss/"><span>Discuss</span></a>';
        document.getElementsByClassName('about')[0].innerHTML = '<a href="https://en.scratch-wiki.info/wiki/Scratch_Wiki_Home"><span>Learn</span></a>';
    }
})();
