const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: ".env.production" });

const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const { connection } = require("./config/db");
const { TodoRoutes } = require("./routes/Todo.routes");

const server = express();

// Middleware
server.use(express.json());
server.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));

// Todo routes
server.use("/todo", TodoRoutes);

// Home route
server.get("/", (req, res) => {
    res.send("Server is running");
});

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