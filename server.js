//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/sparks-webapp'));

app.get('/my-twin-favicon.ico', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/sparks-webapp/my-twin-favicon.ico'));
});

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname+'/dist/sparks-webapp/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
