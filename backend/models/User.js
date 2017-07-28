//Specifies User Attributes and methods for manipulations
//Will be exported to Routes for CRUD manipulation
//Will be exported to App.js for app to receive user details

import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  username: String,
  password: String,
  userImage: String,
  firstName: String,
  lastName: String,
  gender: String,
  hostFor: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event'}],
  guestFor: [],

  linkedin: String,
  tokens: Array,

  profile: {
  name: String,
  gender: String,
  location: String,
  website: String,
  picture: String
  }
},{ timestamps: true});

// Function name: userSchema.pre
// Purpose: A password hash midleware To salt and hash userpassword
// GetDataFrom: Signup user input
// Input: password,  Output: hashed Password

  userSchema.pre('save', function save(next) {

    console.log('pre save hook');
    const user = this;
    console.log('user', user)
    if (!user.isModified('password')) {
      console.log('password not modified')
      return next();
    } //ismodified is a flag to see if something has changed
    console.log('password is modified');
    bcrypt.genSalt(10, (err, salt) => {
      if (err) { console.log(err)
        return next(err); }
      console.log('salt generated');
      bcrypt.hash(user.password, salt, (err, hash) => {
        console.log('data', user.password)
        console.log('salt', salt)
        if (err) { console.log(err)
          return next(err); }
        console.log('saving hash');
        user.password = hash;
        next();
      });
    });
  });


  userSchema.methods.comparePassword = function comparePassword(candidatePassword, cb){
      bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
          cb(err, isMatch);
      });
    };
    userSchema.methods.getUserByEmail = function(email, callback){
      const query = {email: email};
      User.findOne(query, callback);
    }

    userSchema.methods.getUserById = function(id, callback){
      User.findById(id, callback);
    }

const User = mongoose.model('User', userSchema);


module.exports = User;
