const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const { io } = require("socket.io-client");

let win;

app.whenReady().then(() => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "renderer.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  const socket = io("http://localhost:5000");

  socket.on("new-content", (data) => {
    console.log("New content received:", data);
    win.webContents.send("new-content", data);
  });

  win.loadURL("http://localhost:3000");
});
