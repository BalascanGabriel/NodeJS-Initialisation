const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('public'));

const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd() + '/index.html'));
  });
  
  app.listen(port, () => {
    console.log('Server started on port 3000');
  });

