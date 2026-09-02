const { TodoModel } = require("../model/todo.model");

const {User} =require("../model/user.model");

// GET
const todoGet = async (req, res) => {
    try {
        const dataTodo = await TodoModel.find();

        res.status(200).send(dataTodo);

    } catch (error) {
        res.status(500).send({
            message: "Server error",
            error: error.message
        });
    }
};


// POST
const todoSet = async (req, res) => {
    try {
        const todos = await TodoModel.insertMany(req.body);

        res.status(201).json({
            message: "Todos created successfully",
            data: todos
        });

    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};


// PATCH
const todoUpdate = async (req, res) => {

    try {

        // 1. Get ID from URL
        const { id } = req.params;

        // 2. Update MongoDB document
        const updateTodo = await TodoModel.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        // 3. Check if ID not exists
        if (!updateTodo) {
            return res.status(404).send({
                message: "Todo not found"
            });
        }

        // 4. Send updated document
        res.status(200).send({
            message: "Todo updated successfully",
            data: updateTodo
        });

    } catch (error) {

        console.log(error);

        res.status(500).send({
            message: "Server error",
            error: error.message
        });
    }
};

// Replace
const todoReplace = async (req, res) => {

    try {
    
        // 1. Get ID from URL
        const { id } = req.params;

        // 2. Update MongoDB document
       const replaceTodo = await TodoModel.findOneAndReplace(
    { _id: id },
    req.body
);

        // 3. Check if ID not exists
        if (!replaceTodo) {
            return res.status(404).send({
                message: "Todo not found"
            });
        }

        // 4. Send updated document
        res.status(200).send({
            message: "Todo Replace successfully",
            data: replaceTodo
        });

    } catch (error) {

        console.log(error);

        res.status(500).send({
            message: "Server error",
            error: error.message
        });
    }
};

//Delete 

const todoDelete = async (req,res) => {
    try {
        const {id} = req.params;
    
        const userCheck = await User.findById(req.body?.userData?.userId);
        console.log("userCheck",userCheck);

        if(!userCheck){
            return res.status(404).send({
                message: "UnAuthorized user"
            });
        }

        const deleteTodo = await TodoModel.findByIdAndDelete(id);
        console.log(deleteTodo);

        if(!deleteTodo) {
            return res.status(404).send({
                message: "todo not found"
            });
        }
            res.status(200).send({
            message: "Todo deleted successfully",
            data: deleteTodo
        });
       
    }
    catch (err) {
        console.log(err);
        res.status(500).send({
            message:"server error",
            error: err.message
        })
    }
}

module.exports = {
    todoGet,
    todoSet,
    todoUpdate,
    todoReplace,
    todoDelete,
};