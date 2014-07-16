var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var pub = __dirname + '/public',
    view = __dirname + '/views';

app.use(express.static(__dirname + "/views"));
app.use(bodyParser());
app.use(express.static(pub));
app.use(express.static(view));


app.listen(8000);
console.log("The Magic Happens on port 8000");