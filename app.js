const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('public'));
app.use(express.json());


const usersRoutes = require('./src/routes/user');
app.use('/users', usersRoutes);
const port = 3000;

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/your_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB!');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(process.cwd() + '/index.html'));
  });
  
  app.listen(port, () => {
    console.log('Server started on port 3000');
  });

