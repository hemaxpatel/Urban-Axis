import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: ["http://localhost:5173", "http://localhost:8800"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  },
});

let onlineUser = [];

const addUser = (userId, socketId) => {
  const userExits = onlineUser.find((user) => user.userId === userId);
  if (!userExits) {
    onlineUser.push({ userId, socketId });
  }
};

const removeUser = (socketId) => {
  onlineUser = onlineUser.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return onlineUser.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("newUser", (userId) => {
    addUser(userId, socket.id);
    console.log("New user added:", userId);
  });

  socket.on("sendMessage", ({ receiverId, data }) => {
    const receiver = getUser(receiverId);
    if (receiver) {
      io.to(receiver.socketId).emit("getMessage", data);
      console.log("Message sent to:", receiverId);
    } else {
      // Emit back to sender that receiver is offline
      socket.emit("receiverOffline", { receiverId });
      console.log("Receiver offline:", receiverId);
    }
  });

  socket.on("disconnect", () => {
    removeUser(socket.id);
    console.log("User disconnected:", socket.id);
  });
});

const PORT = process.env.SOCKET_PORT || 4000;
io.listen(PORT, () => {
  console.log(`Socket server running on port ${PORT}`);
});

export { io };

