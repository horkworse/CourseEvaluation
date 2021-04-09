const express = require("express");
const connect = require("./connection");
const app = express();

connect.connection__connect();
connect.connection__execute();
connect.connection__end();

/*app.get("/", function(request, response){

	response.send();
    
});*/

app.listen(3000);