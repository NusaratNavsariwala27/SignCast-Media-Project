const { Server } = require("socket.io");

const io = new Server(5000, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("A client connected:", socket.id);

  socket.on("new-content", (data) => {
    console.log("Received new content:", data);
    io.emit("new-content", data); // Broadcast to all clients
  });
});
