var express = require('express');
var path = require('path');
var app = express();

app.get ('/',function(req,res){
	res.sendFile(__dirname +'/index.html');
});

app.use('/data',express.static(path.join(__dirname,'/data')));
app.use('/static',express.static(path.join(__dirname,'assets')));
app.use('/static',express.static(path.join(__dirname,'node_modules')));


app.listen(8080);