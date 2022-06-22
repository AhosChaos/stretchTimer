const { contextBridge, ipcRenderer } = require("electron");
const { platform, cpus, totalmem } = require("os");
const { callbackify } = require("util");


const API = {
    close: () => ipcRenderer.send("quit"),

}


contextBridge.exposeInMainWorld("api",API);
