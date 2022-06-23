
const { app, BrowserWindow, ipcMain} = require("electron");
const { join } = require("path")

const name = app.getName();
const version = app.getVersion();

app.whenReady().then(main);

function main()
{
    const window = new BrowserWindow({
        width: 500,
        height: 175,
        show: false,
        autoHideMenuBar: true,
        frame: false,
        resizable: false,
        webPreferences: {
            preload: join(__dirname, "./preload.js"),
        },

        transparent: true,
    });
    window.focus
    window.setAlwaysOnTop(true, "screen-saver");


    window.loadFile(join(__dirname, "../public/index.html"));


    window.once('ready-to-show', () => {
        window.show();
    });
  
    window.once('show', () => {
        window.focus();
        // PLATFORMALIGN: signal force always on top after show
        window.setAlwaysOnTop(true);
    });

}

ipcMain.on("quit", (event, args) => {
    app.quit();
})

