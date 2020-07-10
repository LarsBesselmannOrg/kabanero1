const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello world from my Appsody! - 2020/07/08");
});

module.exports.app = app;
