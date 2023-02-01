const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

userSchema.pre('save', function (next) {
  const user = this;

  if (!user.isModified('password')) {
    return next();
  }

  bcrypt.hash(user.password, 10, (error, hash) => {
    if (error) {
      return next(error);
    }
    user.password = hash;
    next();
  });
});

userSchema.methods.comparePassword = function (candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, (error, isMatch) => {
    if (error) {
      return callback(error);
    }
    callback(null, isMatch);
  });
};

const User = mongoose.model('User', userSchema);

module.exports = User;


/*This user.js model defines the schema for a User, including the name, email, and password fields.
 The pre hook is used to hash the password before saving it to the database.
  The comparePassword method is used to compare a candidate password with the hashed password stored in the database.
   This model uses the Mongoose library to interact with a MongoDB database.*/