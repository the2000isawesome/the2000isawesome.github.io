// ==UserScript==
// @name         [Scratch] Classic tab names
// @namespace    https://the2000isawesome.github.io
// @version      1.0
// @description  Restores the "discuss" and "help" tabs
// @author       the2000
// @match        *https://scratch.mit.edu/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if (document.getElementById('app') == null) {
        let nav = document.getElementsByClassName('site-nav')[0];
        nav.children[2].innerHTML = '<a href=\"/discuss\">Discuss</a>';
        nav.children[3].innerHTML = '<a href=\"/ideas\">Help</a>';
    } else if (document.getElementById('pagewrapper') == null) {
        document.getElementsByClassName('ideas')[0].innerHTML = '<a href=\"/discuss\"><span>Discuss</span></a>';
        document.getElementsByClassName('about')[0].innerHTML = '<a href=\"/ideas\"><span>Help</span></a>';
    }
})();
