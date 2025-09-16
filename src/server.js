import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import todoRoutes from './routes/todoRoutes.js';

// Configure dotenv to load variables from the .env file in the root
dotenv.config({ path: './.env' });

// Initialize the database connection
connectDB();

// Create an Express application
const app = express();

// Add middleware to parse incoming JSON requests [cite: 201]
app.use(express.json());

// Mount the to-do routes on the '/api/todos' endpoint
app.use('/api/todos', todoRoutes);

// Define the port from environment variables or use a default
const PORT = process.env.PORT || 5001;

// Start the server and listen for requests
app.listen(PORT, () =>
  console.log(`Server started on Port ${PORT}`)
);