require('babel-register')({presets: ['env']});

module.exports = require('./server.js'); // Import the rest of our application.
