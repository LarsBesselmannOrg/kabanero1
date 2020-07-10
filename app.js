const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello world from my Appsody! - 2020/07/02");
});

module.exports.app = app;
