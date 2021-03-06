// ./js/render.js
//Copyright 2020 Sidings Media
//License: MIT
var Mousetrap = require('mousetrap');

//Include JQuery
var script = document.createElement('script'); 
script.src = './node_modules/jquery/dist/jquery.min.js'; 
document.getElementsByTagName('head')[0].appendChild(script);
const customTitlebar = require('custom-electron-titlebar');
const bgcolour = '#323233';
let titlebar = new customTitlebar.Titlebar({
	backgroundColor: customTitlebar.Color.fromHex(bgcolour),
	icon: './assets/logos/logo.png',
});
function addControl() {
	var html = `
		<div class=\"control\">
			<h1>This is a control area</h1>
		</div>
	`;        
	$("#main").append(html);        

}




//Mousetrap keybindings
Mousetrap.bind('mod+w', function() {
    sendRequest({window:'mainWindow', func:'close'})
})
Mousetrap.bind('mod+,', function() {
	sendRequest({window: 'mainWindow', func:'openPreferences'})
})
Mousetrap.bind('mod+q', function() {
	sendRequest({window: 'app', func:'exit'})
})
Mousetrap.bind('mod+r', function() {
	sendRequest({window: 'mainWindow', func:'reload'})
})
Mousetrap.bind('f11', function() {
	sendRequest({window: 'mainWindow', func:'toggleFullscreen'})
})
Mousetrap.bind('mod+shift+i', function() {
	sendRequest({window: 'mainWindow', func:'toggleDev'})
})
Mousetrap.bind('mod+m', function() {
	sendRequest({window: 'mainWindow', func:'min'})
})