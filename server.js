var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello');
});

let port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log(`App is running at port ${port}`);
  });