const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello world from my Appsody!");
});
 
module.exports.app = app;
