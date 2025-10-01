// Este archivo se ejecuta antes de que la página web cargue en la ventana de Electron.
// Puedes exponer APIs seguras desde aquí si quieres, de momento lo dejamos básico.

const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('api', {
  version: () => 'Talleres Santa Gema v9.1'
});
