const { app, BrowserWindow, ipcMain, nativeTheme } = require('electron')

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        // autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('src/index.html')

    // ipcMain.handle('dark-mode:toggle', () => {
    //     if (nativeTheme.shouldUseDarkColors) {
    //         nativeTheme.themeSource = 'light'
    //     } else {
    //         nativeTheme.themeSource = 'dark'
    //     }
    //     return nativeTheme.shouldUseDarkColors
    // })

    // ipcMain.handle('dark-mode:system', () => {
    //     nativeTheme.themeSouce = 'system'
    // })

    nativeTheme.themeSource = 'system'
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})