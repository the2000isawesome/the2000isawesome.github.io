// ==UserScript==
// @name         [Scratch] (PoC) 1.4 Skin Userscript
// @namespace    https://the2000isawesome.github.io/
// @version      0.1
// @description  Will not accurately reflect final product, especially the atrocious loading time
// @author       the2000
// @match        https://scratch.mit.edu/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var container, main, sidebar;
    function beginRemodel() {
        document.head.innerHTML = "<meta charset='UTF-8'>";
        document.head.innerHTML += "<link rel='stylesheet' href='https://the2000isawesome.github.io/scratch14/style.css'/>";
        document.head.innerHTML += "<link rel='icon' href='img/favicon.ico'>";

        document.body.innerHTML = '';

        container = document.createElement('div');
        container.setAttribute('id', 'container');
        document.body.appendChild(container);
        var header = document.createElement('div');
        header.setAttribute('id', 'header');
        container.appendChild(header);
        var logo = document.createElement('div');
        logo.setAttribute('id', 'logo');
        logo.setAttribute('class', 'clearme');
        logo.innerHTML = "<h1><a>Scratch</a></h1><h2>imagine • program • share</h2>";
        header.appendChild(logo);

        var topNav = document.createElement('ul');
        topNav.setAttribute('id', 'nav');
        topNav.setAttribute('class', 'clearme');
        topNav.setAttribute('style', 'height: 30px');
        var upperBound = 6;
        if (username) upperBound++;
        for (let i = 0; i < upperBound; i++) {
            let item = document.createElement('li');
            item.innerHTML = '<a href="' + ['https://scratch.mit.edu/', 'https://scratch.mit.edu/explore/projects/all/', 'https://scratch.mit.edu/explore/studios/all/', 'https://scratch.mit.edu/info/faq/', 'https://scratch.mit.edu/discuss/', 'https://scratch.mit.edu/about/', 'https://scratch.mit.edu/mystuff/'][i] + '">' + ['home', 'projects', 'galleries', 'support', 'forums', 'about', 'my stuff'][i] + '</a>'
            topNav.appendChild(item);
        }
        header.appendChild(topNav);

        var userBar = document.createElement('div');
        userBar.setAttribute('id', 'userbar');
        if (username) {
            userBar.innerHTML = '<p>Welcome, <a href="http://scratch.mit.edu/users/' + username + '/">' + username + '</a> | <a href="#">Logout</a></p>';
        } else {
            userBar.innerHTML = '<p><a href="http://scratch.mit.edu/login_retry/">Login</a> or <a href="http://scratch.mit.edu/signup">Signup</a> for an account</p>';
        }
        header.appendChild(userBar);

        var searchBar = document.createElement('div');
        searchBar.setAttribute('id', 'searchbar');
        var searchBox = document.createElement('input');
        searchBox.setAttribute('id', 'searchbutton');
        searchBox.setAttribute('style', 'margin-right: 5px');
        searchBar.appendChild(searchBox);
        var searchButton = document.createElement('button');
        searchButton.setAttribute('onclick', 'window.location.replace("https://scratch.mit.edu/search/projects?q=" + document.getElementById("searchbutton").value)');
        searchButton.innerHTML = 'search';
        searchBar.appendChild(searchButton);
        header.appendChild(searchBar);

        main = document.createElement('div');
        main.setAttribute('id', 'main');
        container.appendChild(main);

        sidebar = document.createElement('div');
        sidebar.setAttribute('id', 'sidebar');
        container.appendChild(sidebar);
    }
    function addFooter() {
        var footer = document.createElement('div');
        footer.setAttribute('id', 'footer');
        footer.setAttribute('class', 'clearme');
        footer.innerHTML = "<p><a href='https://scratch.mit.edu/download'>Download</a> | <a href='https://scratch-foundation.myshopify.com/'>Scratch Store</a> | <a href='https://secure.donationpay.org/scratchfoundation/'>Donate</a> | <a href='https://scratch.mit.edu/privacy_policy'>Privacy Policy</a> | <a href='https://scratch.mit.edu/terms_of_use'>Terms of Use</a> | <a href='https://scratch.mit.edu/DMCA'>DMCA</a> | <a href='https://scratch.mit.edu/contact-us/'>Contact Us</a></p>";

        container.appendChild(footer);
    }

    var username = null;
    if (document.getElementsByClassName('account-nav').length > 0) {
        if (document.getElementsByClassName('account-nav').length == 2) {
            username = document.getElementsByClassName('account-nav')[1].children[0].children[1].innerHTML;
        } else if (document.getElementsByClassName('account-nav')[0].classList.contains('logged-in')) {
            username = document.getElementsByClassName('account-nav')[0].children[2].children[0].innerHTML.split('>')[1].split('<')[0];
        }
    }
    if (document.documentURI == 'https://scratch.mit.edu/') {
        var allSections = document.getElementsByClassName('slick-track');
        var allStuff = [];
        var aSLeng = allSections.length;
        var f2 = 0;
        for (let f = 0; f < aSLeng; f++) {
            if (f == 0 || f == 2 || f == 3 || f == 7 || f == 8) {
                let projectsList = allSections[f].children;
                allStuff[f2] = [];
                for (let i = 0; i < 3; i++) {
                    let project = projectsList[i];
                    let projectText = project.children[1].children[0];
                    allStuff[f2][i] = {};
                    allStuff[f2][i].title = projectText.children[0].innerHTML;
                    allStuff[f2][i].url = projectText.children[0].href;
                    allStuff[f2][i].thumb = project.children[0].children[0].src
                    allStuff[f2][i].creator = projectText.children[1].children[0].innerHTML;
                }
                f2++;
            }
        }
        var featuredGalleries = [];
        for (let i = 0; i < 3; i++) {
            let project = allSections[1].children[i];
            let projectText = project.children[1].children[0];
            featuredGalleries[i] = {};
            featuredGalleries[i].title = projectText.children[0].innerHTML;
            featuredGalleries[i].url = projectText.children[0].href;
            featuredGalleries[i].thumb = project.children[0].children[0].src
        }

        var curatorName = document.getElementsByClassName('box')[4].children[0].children[0].innerHTML.split(' ')[3];
        var wwLink = document.getElementsByClassName('box-content')[1].children[0].children[0].children[0].href;
        var sdsName = document.getElementsByClassName('box')[5].children[0].children[0].innerHTML.split(' - ')[1];
        var sdsDesc = document.getElementsByClassName('box-content')[1].children[0].children[1].children[0].children[1].children[1].innerHTML;
        var sdsLink = document.getElementsByClassName('box-content')[1].children[0].children[1].children[0].href;
        var sdsId = sdsLink.split('/')[4];
        var newsTitle = document.getElementsByClassName('box-content')[1].children[0].children[2].children[0].children[1].children[0].innerHTML;
        var newsDesc = document.getElementsByClassName('box-content')[1].children[0].children[2].children[0].children[1].children[1].innerHTML;
        var newsLink = document.getElementsByClassName('box-content')[1].children[0].children[2].children[0].href;

        beginRemodel();
        document.head.innerHTML += "<title>Scratch | Home | imagine, program, share</title>";
        document.getElementById('nav').children[0].setAttribute('id', 'active');

        for (let f = 0; f < allStuff.length; f++) {
            let projectContainer = document.createElement('div');
            projectContainer.setAttribute('class', 'container');
            let sectTitle = document.createElement('h3');
            sectTitle.innerHTML = ['Featured Projects', 'Projects Selected by ', 'Projects from Scratch Design Studio', 'What the Community is Remixing', 'What the Community is Loving'][f];
            if (f == 1) sectTitle.innerHTML += curatorName;
            projectContainer.appendChild(sectTitle);
            for (let i = 0; i < 3; i++) {
                let thumb = document.createElement('div');
                thumb.setAttribute('class', 'thumb');

                let imgLink = document.createElement('a');
                imgLink.setAttribute('href', allStuff[f][i].url);

                let thumbImg = document.createElement('img');
                thumbImg.setAttribute('src', allStuff[f][i].thumb);
                thumbImg.setAttribute('width', '148px');
                thumbImg.setAttribute('height', '111px');
                imgLink.appendChild(thumbImg);

                let thumbTitle = document.createElement('h6');
                thumbTitle.innerHTML = allStuff[f][i].title;
                imgLink.appendChild(thumbTitle);
                thumb.appendChild(imgLink);

                let thumbAuthor = document.createElement('p');
                thumbAuthor.innerHTML = 'by <a href="https://scratch.mit.edu/users/' + allStuff[f][i].creator + '">' + allStuff[f][i].creator + '</a>';
                thumb.appendChild(thumbAuthor);

                projectContainer.appendChild(thumb);
            }
            main.appendChild(projectContainer);
        }

        var sideContainer1 = document.createElement('div');
        sideContainer1.setAttribute('class', 'sidecontainer club');
        sideContainer1.innerHTML = '<h4>Wiki Wednesday!</h4>';
        sideContainer1.innerHTML += "<a href='" + wwLink + "'><img src='https://the2000isawesome.github.io/scratch14/img/scratchwikiimage.png' width='77'/></a>";
        sideContainer1.innerHTML += '<p>Check out the new Wiki Wednesday forum post, a news series highlighting the Scratch Wiki!</p>';
        sideContainer1.innerHTML += '<p class="more"><a href="' + wwLink + '">Find out more</a></p>';
        sidebar.appendChild(sideContainer1);

        var sideContainer2 = document.createElement('div');
        sideContainer2.setAttribute('class', 'sidecontainer club');
        sideContainer2.innerHTML = '<h4>Scratch Design Studio</h4>';
        sideContainer2.innerHTML += "<a href='" + sdsLink + "'><img src='https://cdn2.scratch.mit.edu/get_image/gallery/" + sdsId + "_200x130.png' width='90' height='68'/></a>";
        sideContainer2.innerHTML += '<p>' + sdsDesc + '</p>';
        sideContainer2.innerHTML += '<p class="more"><a href="' + sdsLink + '">See more</a></p>';
        sidebar.appendChild(sideContainer2);

        var sideContainer3 = document.createElement('div');
        sideContainer3.setAttribute('class', 'sidecontainer club');
        sideContainer3.innerHTML = '<h4>Featured Galleries</h4>';
        var galleryList = document.createElement('ul');
        galleryList.setAttribute('class', 'sidelist');

        for (let i = 0; i < 3; i++) {
            let item = document.createElement('li');
            item.innerHTML += '<img src="' + featuredGalleries[i].thumb + '" width="43px" height="34px"/>';
            item.innerHTML += '<a href="' + featuredGalleries[i].url + '">' + featuredGalleries[i].title + '</a>';
            galleryList.appendChild(item);
            if (i < 2) galleryList.appendChild(document.createElement('br'));
        }

        sideContainer3.appendChild(galleryList);
        sidebar.appendChild(sideContainer3);

        var sideContainer4 = document.createElement('div');
        sideContainer4.setAttribute('class', 'sidecontainer club');
        sideContainer4.innerHTML = '<h4>' + newsTitle + '</h4>';
        sideContainer4.innerHTML += "<a href='" + newsLink + "'><img src='https://the2000isawesome.github.io/scratch14/img/questionicon.png' width='50' height='50'/></a>";
        sideContainer4.innerHTML += '<p>' + newsDesc + '</p>';
        sideContainer4.innerHTML += '<p class="more"><a href="' + newsLink + '">See more</a></p>';
        sidebar.appendChild(sideContainer4);

        addFooter();
        alert('Scratch 1.4 Skin Proof Of Concept. Will not accurately reflect final product');
    } else if (document.documentURI == 'https://scratch.mit.edu/login_retry/') {
        beginRemodel();

        main.innerHTML = '<div class="container">unfinished sorry</div>';

        addFooter();
        alert('Scratch 1.4 Skin Proof Of Concept. Will not accurately reflect final product');
    }
})();
