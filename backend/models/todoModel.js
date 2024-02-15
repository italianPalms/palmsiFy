const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new mongoose.Schema({
    text: {
        type: String, 
        required: [false, "Please provide a todo item"], 
    },
    completed: {
        type: Boolean,
    }
})

const todo = mongoose.models.todos || mongoose.model("todos", todoSchema);

module.exports = todo;