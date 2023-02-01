const User = require('../models/user');

// Create a new user
exports.createUser = (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  user.save()
    .then(() => {
      res.json({ message: 'User created successfully' });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
};

// Get all users
exports.getUsers = (req, res) => {
  User.find()
    .then(users => {
      res.json(users);
    })
    .catch(error => {
      res.status(500).json({ error });
    });
};

// Get a single user by id
exports.getUser = (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      if (!user) {
        res.status(404).json({ message: 'User not found' });
      } else {
        res.json(user);
      }
    })
    .catch(error => {
      res.status(500).json({ error });
    });
};

// Update a user
exports.updateUser = (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(user => {
      if (!user) {
        res.status(404).json({ message: 'User not found' });
      } else {
        res.json(user);
      }
    })
    .catch(error => {
      res.status(500).json({ error });
    });
};

// Delete a user
exports.deleteUser = (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then(user => {
      if (!user) {
        res.status(404).json({ message: 'User not found' });
      } else {
        res.json({ message: 'User deleted successfully' });
      }
    })
    .catch(error => {
      res.status(500).json({ error });
    });
};
