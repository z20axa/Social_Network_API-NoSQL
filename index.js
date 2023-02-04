// packages/modules imports
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

//
const cwd = process.cwd();

// initialize our app variable by setting it to the value of express()
const app = express();

// setting computer port number for service and Heruko deployment
const PORT = process.env.PORT || 3001;

// Note: not necessary for the Express server to function. This just helps indicate what activity's server is running in the terminal.
const activity = cwd.includes('01-Activities')
  ? cwd.split('/01-Activities/')[1]
  : cwd;

// body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes 
app.use(routes);

// keep your web service awake and listening
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for ${activity} running on http://localhost:${PORT}`);
  });
});
