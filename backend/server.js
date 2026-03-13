console.log('[BOOT] __filename:', __filename);
console.log('[BOOT] process.cwd():', process.cwd());
console.log('[BOOT] PID:', process.pid);

//require('dotenv').config();
require("dotenv").config({
  path: require("path").join(__dirname, "./.env"),
  override: true,
});
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const authRoutes = require("./src/routes/auth.routes");
const profileRoutes = require("./src/routes/profile.routes");
const userRoutes = require("./src/routes/user.routes");
const commentRoutes = require("./src/routes/comment.routes");
const dashboardRoutes = require("./src/routes/dashboard.routes");
const contactUsRoute = require("./src/routes/contactUs");
const chatRoutes = require("./src/routes/chat.routes");
const connectDatabase = require("./src/utils/db");
const { apiErrorHandler } = require("./src/middleware/errorHandler");
const passport = require("passport");
require("./src/utils/passport_setup");
const cookieParser = require("cookie-parser");

const app = express();
app.use((req, res, next) => {
  console.log(`[REQ] ${req.method} ${req.url}`);
  next();
});

app.set('trust proxy', 1);

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use(cookieParser());

connectDatabase();

app.use(
  cors({
    origin: [
      "http://localhost:3001",
      "https://commentsfusion-ekr7.vercel.app",
      "https://www.commentsfusion.com",
      "https://commentsfusion-production.up.railway.app",
      /^chrome-extension:\/\/.*$/,
      /^moz-extension:\/\/.*$/
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(
  session({
    secret: process.env.SESSION_SECRET || "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/user", userRoutes);
app.use("/api/comment", commentRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api", contactUsRoute);
app.use('/api/chat', chatRoutes); 

app.get('/api/health', (req, res) => res.json({ ok: true, from: 'server.js' }));

app.get('/api/chat/test', (req, res) => {
  res.json({ ok: true, from: 'server.js /api/chat/test' });
});

app.post('/api/chat', (req, res) => {
  const { chatInput, sessionId } = req.body || {};
  res.json({ output: `Echo: ${chatInput} (${sessionId})`, from: 'server.js /api/chat' });
});

app.use(apiErrorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API listening on ${PORT}`));
