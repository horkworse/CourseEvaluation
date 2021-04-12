const express = require("express");
const connection = require("./connection");
const app = express();

let sqlParam = "select Surname, First_name from Users;";
connection.connect();
connection.execute(sqlParam);
connection.end();

/*app.get("/", function(request, response){

	response.send();
    
});*/

app.listen(3000);