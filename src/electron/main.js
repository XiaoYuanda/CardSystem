const { app, BrowserWindow, ipcMain } = require('electron')
const path = require("path")

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    show: false,
    width: 1000,
    height: 700,
    minWidth: 1000,
    minHeight: 700,
    maxHeight:700,
    maxWidth:1000,
    // x: 20,
    // y: 20,
    frame: false,
    titleBarStyle: 'hidden',
    titleBarStyle: 'hiddenInset',
    titleBarOverlay: {
      color: '#2f3241',
      symbolColor: '#74b1be',
      height: 60
    },
    webPreferences: {
      preload: './preload.js',
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false
    },
    maximizable: false,
    // backgroundColor: '#2e2c29',
    // transparent: true
  })
  // mainWindow.loadURL("http://localhost:5173/");
  mainWindow.loadURL(`file://${path.join(__dirname, "../../dist/index.html")}`);
  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })
  mainWindow.openDevTools();
  ipcMain.on('window-close',()=>{
    mainWindow.closeDevTools();
    mainWindow.close()
  })

  ipcMain.on('window-min',()=>{
    mainWindow.minimize()
  })
}

app.whenReady().then(() => {
  createWindow()
})