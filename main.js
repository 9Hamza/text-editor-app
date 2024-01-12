const electron = require('electron')
const {app, BrowserWindow} = electron

// when the app is ready, do stuff...
app.on('ready', () => {
    console.log('-- app is ready --');

    // {} this means an empty object
    // we can pass an object that has the configurations for the window such
    // as width, height, and much more...
    let window = new BrowserWindow({});

    // loading the html page
    window.loadFile('index.html');
});