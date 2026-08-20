const express = require("express");

const {
    todoGet,
    todoSet,
    todoReplace,
    todoUpdate,
    todoDelete,
} = require("../controller/Todo.controller");

const TodoRoutes = express.Router();

TodoRoutes.get("/", todoGet);

TodoRoutes.post("/create", todoSet);

TodoRoutes.put("/replace/:id", todoReplace);

TodoRoutes.patch("/update/:id", todoUpdate);

TodoRoutes.delete("/delete/:id", todoDelete);

module.exports = { TodoRoutes };