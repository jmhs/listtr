import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import passport from 'passport';
// import favicon from 'serve-favicon';
import path from 'path';
import lessMiddleware from 'less-middleware';
import index from './routes/index';
import auth from './routes/auth';
import event from './routes/event';
import email from './routes/email';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'; // enable CORS requests
/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.load({ path: '.env' });

import session from 'express-session';
import multer from 'multer';
import cloudinary from 'cloudinary';
//const MongoStore = require('connect-mongo')(session);

/**
* Setup Mongoose connection to MongoDB
*/
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:admin@ds115752.mlab.com:15752/listtr');
mongoose.connection.on('error', (err) => {
  console.error(err);
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
  process.exit();
});

const app = express();

cloudinary.config({
  cloud_name: "listtr",
  api_key: '476127874373497',
  api_secret: 'PnpFrwxSG0oiDrSC0E00nXkj-wQ'
})

/**
 * API keys and Passport configuration.
 */
const passportConfig = require('./config/passport');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));


/**
 * use EXPRESS-SESSION.
 */
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'hello'
  // store: new MongoStore({
  //   url: 'mongodb://localhost/listtrdb',
  //   // url: process.env.MONGODB_URI || process.env.MONGODLAB_URI,
  //   autoReconnect: true,
  //   clear_interval: 3600
  // })
  // cookie: {maxAge: 3600000}
}));

/**
 * PASSPORT INITIALIZE AND SESSION.
 */
app.use(passport.initialize());
app.use(passport.session());

// Enable All CORS requests
app.use(function(req, res, next) {
  console.log('enabling cors in headers')
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(function(req, res, next){
  console.log( "Method: " + req.method +" Path: " + req.url)
  next();
});

/**
 * Use AUTH routes.
 */
app.use('/', index);
app.use('/auth', auth);
app.use('/event',event);
app.use('/email',email);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
/* eslint no-unused-vars: 0 */
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Handle uncaughtException
process.on('uncaughtException', (err) => {
  console.log(err);
  process.exit(1);
});


/*
  Debug
*/

// import Event from './models/Event';
//
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log("we are connected");
// });
//
//
// Event.findById("59801041f0a5bc72551a2029", (err, event) => {
//
//
//     let guest = event.guests[0];
//     guest.response = "yes";
// 
//     event.guests[0] = guest;
//
//     event.markModified('guests');
//
//     event.save((err, savedEvent) => {
//       if(err){ return console.log(err); }
//     //  console.log(event);
//
//       Event.findById("59801041f0a5bc72551a2029", (err, newEvent) => {
//
//           console.log(newEvent);
//       });
//
//     });
// });


export default app;
