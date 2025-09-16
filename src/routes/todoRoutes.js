import express from 'express';
import Todo from '../models/todoModel.js';

const router = express.Router();

// 1. CREATE a new to-do item (POST /api/todos)
router.post('/', async (req, res) => {
  try {
    const { task } = req.body;
    if (!task) {
      return res.status(400).json({ message: 'Task is required' });
    }
    const todo = await Todo.create({ task, completed: false });
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// 2. READ all to-do items (GET /api/todos)
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// 3. UPDATE a to-do item (PUT /api/todos/:id)
router.put('/:id', async (req, res) => {
  try {
    const { task, completed } = req.body;
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      { task, completed },
      { new: true } // Return the updated document
    );
    if (!todo) {
      return res.status(404).json({ message: 'To-do not found' });
    }
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// 4. DELETE a to-do item (DELETE /api/todos/:id)
router.delete('/:id', async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: 'To-do not found' });
    }
    res.status(200).json({ message: 'To-do removed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router;