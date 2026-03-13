const express = require("express");
const chatRoutes = require("./src/routes/chat.routes");

const app = express();

app.use(express.json());

console.log('Mounting chat routes on /api...');
app.use("/api", chatRoutes);

console.log('Chat routes mounted successfully');

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Minimal server listening on ${PORT}`);
  console.log(`Test: curl http://localhost:${PORT}/api/chat/test`);
  console.log(`Test: curl -X POST http://localhost:${PORT}/api/chat -H "Content-Type: application/json" -d '{"chatInput":"test","sessionId":"test"}'`);
});