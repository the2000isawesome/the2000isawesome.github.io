if (document.getElementById('app') == null) {
	let nav = document.getElementsByClassName('site-nav')[0];
	nav.children[2].innerHTML = '<a href=\"/discuss\">Discuss</a>';
	nav.children[3].innerHTML = '<a href=\"/ideas\">Help</a>';
} else if (document.getElementById('pagewrapper') == null) {
	document.getElementsByClassName('ideas')[0].innerHTML = '<a href=\"/discuss\"><span>Discuss</span></a>';
	document.getElementsByClassName('about')[0].innerHTML = '<a href=\"/ideas\"><span>Help</span></a>';
}