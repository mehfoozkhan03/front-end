const express = require("express");

const {
  todoGet,
  todoSet,
  todoReplace,
  todoUpdate,
  todoDelete,
} = require("../controller/Todo.controller");

const { Auth } = require("../Auth/AuthMiddleware");

const TodoRoutes = express.Router();

/* 
path :   todo/create

*/

TodoRoutes.get("/", todoGet);

TodoRoutes.use(Auth);

TodoRoutes.post("/create", todoSet);

TodoRoutes.put("/replace/:id", todoReplace);

TodoRoutes.patch("/update/:id", todoUpdate);

TodoRoutes.delete("/delete/:id", todoDelete);

module.exports = { TodoRoutes };
