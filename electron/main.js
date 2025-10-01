const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
    icon: path.join(__dirname, '../build/icon.png') // icono para Mac/Linux
  });

  // Cargar la app principal
  mainWindow.loadFile(path.join(__dirname, '../app/index.html'));

  // Opcional: abrir herramientas de desarrollo en modo dev
  // mainWindow.webContents.openDevTools();
}

// Cuando la app está lista, abrir ventana
app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Cerrar app en todos los sistemas excepto macOS
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
