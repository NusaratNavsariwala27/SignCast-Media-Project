const { ipcRenderer } = require("electron");

ipcRenderer.on("new-content", (event, data) => {
  //Rendering Data
  console.log("New content received:", data);
  const contentElement = document.getElementById("content");
  contentElement.innerHTML = `<h1>${data.content}</h1>`;
});
