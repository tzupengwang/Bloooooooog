const express = require('express');
const logger = require('./logger');
const resolve = require('path').resolve;

const argv = require('minimist')(process.argv.slice(2));
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const app = express();
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
// import your private identities for mongodb, etc
const settings = require('./privateSettings');

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);

// DB connection
const mongoose = require('mongoose');
mongoose.Promise = global.Promise; // use ES6 native promise for .catch

const dbName = 'blog';
const mongoUri = `mongodb://${settings.username}:${settings.password}@${settings.mongoUri}`;

if (mongoUri) {
  mongoose.connect(`${mongoUri}/${dbName}/?ssl=true`, (err) => {
    if (err) {
      return logger.error(err);
    }
    logger.dbConnected(settings.mongoUri, dbName, settings.username);
  });
}

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended port number, use port 3000 if not provided
const port = argv.port || process.env.PORT || 3000;

// Start your app.
app.listen(port, (err) => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  // Uncomment if you need ngrok
  // if (ngrok) {
    // ngrok.connect(port, (innerErr, url) => {
      // if (innerErr) {
        // return logger.error(innerErr);
      // }

      // logger.appStarted(port, url);
    // });
  // } else {
    logger.appStarted(port);
  // }
});
