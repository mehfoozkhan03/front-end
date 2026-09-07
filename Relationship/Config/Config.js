const mongoose = require("mongoose");

const Connection = mongoose.connect(process.env.Dabba);

module.exports = { Connection };
