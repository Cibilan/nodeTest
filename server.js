

console.log("server is starting");

var express = require('express');


var app = express();

var server = app.listen(3000, listening);

function listening() {
	console.log("listening .....");
	//console.log(users);
}

app.use(express.static('website'));