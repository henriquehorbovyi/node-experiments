const express 	= require('express');
//var bodyParser 	= require('body-parser');
var app 		= express(); 	

//app.use(bodyParser.urlencoded(extended: true));
app.use(express.static('public'));

app.get('/',function(request,response){
	response.sendFile(__dirname+'/views/index.html');
});
var server = app.listen(7000);