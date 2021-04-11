const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

const DEV = process.env.NODE_ENV === 'development';

console.log('\x1b[36minfo\x1b[0m    - Starting headless browser');

const createWindow = () => {
    const win = new BrowserWindow({
        show: DEV,
        width: 1200,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        }
    });

    win.on('ready-to-show', () => win.webContents.openDevTools());
    win.loadURL('http://localhost:3000').then(() => {

        console.log('\x1b[35mevent\x1b[0m   - Loaded site at: \x1b[36m\x1b[4mhttp://localhost:3000\x1b[0m');
    });
}

ipcMain.on('log', (event, msg) => console.log(msg));
ipcMain.on('styles', (event, styles) => {

    console.log('\x1b[36minfo\x1b[0m    - CSS found');

    fs.writeFile(path.join(__dirname, '..', 'niftycss.css'), styles, () => {

        console.log('\x1b[32msuccess\x1b[0m - CSS written at: \x1b[36m\x1b[4mniftycss.css\x1b[0m');
        app.exit(0);
    });
});

app.whenReady().then(() => createWindow());
app.on('window-all-closed', () => app.quit());
