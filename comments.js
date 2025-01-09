// Create web server
const express = require('express');
const app = express();
// Create a port to listen on
const port = 3000;
// Create a route for comments
app.get('/comments', (req, res) => {
  res.send('Comments');
});
// Listen on port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});