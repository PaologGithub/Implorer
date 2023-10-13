const electron = require("electron")
const remote = require("@electron/remote/main")
remote.initialize()

function createWindow() {
    const win = new electron.BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    remote.enable(win.webContents);
    win.webContents.openDevTools();
    win.loadFile("index.html")
}

electron.app.on("ready", () => {
    createWindow()
})