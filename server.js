// index.js
const express = require('express');
const app = express();
const PORT = 3001;

const itemTypes = [
  { id: 'all', name: 'All' },
  { id: 'fruits', name: 'Fruits' },
  { id: 'vegetables', name: 'Vegetables' },
  { id: 'beverages', name: 'Beverages' },
];

// Define the route to return item categories
app.get('/items/categories', (req, res) => {
  res.json(itemTypes);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
