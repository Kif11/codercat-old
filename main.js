const express = require('express');
const app = express();
const path = require('path');

let port = 8081;

// Serve static files
app.use(express.static('public'));
app.use(express.static('public/html'));

// Public path for nested repositories
app.use(express.static(path.join(__dirname, 'repos', 'vertex-texture-cache', 'public')));

// Routes for nested repositories
app.get('/vertexcache', (req, res) => {
  // Vertex texture cache demo route
  res.sendFile(path.join(__dirname, 'repos', 'vertex-texture-cache', 'public', 'html', 'index.html'));
})

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
