var express = require('express');
var path 	= require('path');
var app 	= express(); 	

app.use("/assets",express.static("assets"));

app.get('/',function(request,response){
	response.sendFile(__dirname+'/view/index.html');
});

var server = app.listen(7000);