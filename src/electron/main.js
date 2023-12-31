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
    // alwaysOnTop: true, // 窗口一直处于最前面
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
  mainWindow.openDevTools(); // 是否默认打开devtools

  mainWindow.loadURL("http://localhost:5173/");  // 这是开发时使用的地址
  // mainWindow.loadURL(`file://${path.join(__dirname, "../../dist/index.html")}`); // 这是打包时使用的地址
  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })

  ipcMain.on('window-close',()=>{
    mainWindow.closeDevTools();
    mainWindow.close()
  })

  ipcMain.on('devTools-close',()=>{
    mainWindow.closeDevTools();
  })
  ipcMain.on('devTools-open',()=>{
    mainWindow.openDevTools();
  })


  ipcMain.on('window-min',()=>{
    mainWindow.minimize()
  })
}

app.whenReady().then(() => {
  createWindow()
})