// Import required dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

// Initialize environment variables
dotenv.config();

// Initialize the Express application
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Parse incoming JSON requests

// Example route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Define the port the server will listen on
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});