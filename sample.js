// Importing the Express package
const express = require('express');

// Creating an instance of an Express application
const app = express();

// Define a port number
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Basic route to respond with "Hello, World!"
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Sample API endpoint
app.post('/api/data', (req, res) => {
  const { name, age } = req.body;

  // Simple response with the received data
  res.json({
    message: 'Data received successfully!',
    data: { name, age },
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
