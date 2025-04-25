console.log("Starting server...");

const express = require('express');
const path = require('path');

// Initialize Express
const app = express();
const PORT = process.env.PORT || 8080; // Using port 8080 instead of 3000

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World! Server is working.');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});