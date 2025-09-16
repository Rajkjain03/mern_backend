import mongoose from 'mongoose';

// Define the schema for a to-do item
const todoSchema = mongoose.Schema(
  {
    task: {
      type: String,
      required: true, // The task description is mandatory
    },
    completed: {
      type: Boolean,
      required: true,
      default: false, // New tasks are not completed by default
    },
  },
  {
    timestamps: true, // Automatically add 'createdAt' and 'updatedAt' fields
  }
);

// Create the model from the schema
const Todo = mongoose.model('Todo', todoSchema);

export default Todo;