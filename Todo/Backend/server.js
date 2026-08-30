const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: ".env.production" });

const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const { connection } = require("./config/db");
const { TodoRoutes } = require("./routes/Todo.routes");
const { UserRoutes } = require("./routes/User.routes");

const server = express();

// Middleware
server.use(express.json());

server.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));

// Home route
server.get("/", (req, res) => {
    res.send("Server is running");
});

// Todo routes...
server.use("/todo", TodoRoutes);
server.use("/user", UserRoutes);

// Start server
server.listen(process.env.PORT, async () => {
    try {
        await connection;
        console.log("DB connected successfully ✅");
        console.log(`Server running on port ${process.env.PORT}`);
    } catch (err) {
        console.log("DB connection error:", err);
    }
});