const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "82.202.172.211",
  port: "3316",
  user: "u106227_ca",
  database: "u106227_ce",
  password: "bW1cI0oG4xeW7h"
});
 connection.connect(function(err){
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
    }
 });
 connection.execute("select Name, SecondName from Users;",
  function(err, results, fields) {
    console.log(JSON.stringify(results)); // собственно данные
});
 connection.end(function(err) {
  if (err) {
    return console.log("Ошибка: " + err.message);
  }
  console.log("Подключение закрыто");
});