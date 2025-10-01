// electron/preload.js
// Puente entre el frontend (HTML/JS) y Electron (sistema)

const { contextBridge, ipcRenderer } = require('electron');

// Exponemos funciones seguras al frontend
contextBridge.exposeInMainWorld("electronAPI", {
  guardarIngreso: (data) => ipcRenderer.send("guardar-ingreso", data),
  guardarGasto: (data) => ipcRenderer.send("guardar-gasto", data),
  guardarSueldo: (data) => ipcRenderer.send("guardar-sueldo", data),
  imprimirOrden: (data) => ipcRenderer.send("imprimir-orden", data),
  generarFactura: (data) => ipcRenderer.send("generar-factura", data),
  generarPresupuesto: (data) => ipcRenderer.send("generar-presupuesto", data),
  hacerBackup: () => ipcRenderer.send("hacer-backup"),
  cargarBackup: () => ipcRenderer.invoke("cargar-backup")
});
