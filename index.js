const {app, BrowserWindow} = require('electron');
const url = require('url');
var ipc = require('electron').ipcMain;


let win = null;


function boot() {
	win = new BrowserWindow({
		height:310,
		width:280,
		frame: false,
		webPreferences: {
			nodeIntegration: true
		},
		resizable: false,
		transparent: true,
		icon: __dirname + '/ico.png'
	})
	win.loadURL(`file://${__dirname}/index.html`)
	win.on('closed',()=>{
		win = null;
	})
	ipc.on('invokeAction', function(event, data){
		win.minimize();
	})

}
app.on('ready', boot);
