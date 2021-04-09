const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "82.202.172.211",
  port: "3316",
  user: "u106227_ca",
  database: "u106227_ce",
  password: "bW1cI0oG4xeW7h"
});


exports.connection__connect = () => {connection.connect(function(err) {
    if (err) {
      console.log("Ошибка: " + err.message);
    }
    console.log("Подключение к серверу MySQL успешно установлено");
 })};
 

exports.connection__execute = () => {connection.execute("select Surname, First_name from Users;",
  function(err, results, fields) {
    if (err) {
      console.log("Ошибка: " + err.message);
    }
    console.log(JSON.stringify(results));
    return JSON.stringify(results);
})};


exports.connection__end = () => {connection.end(function(err) {
  if (err) {
    console.log("Ошибка: " + err.message);
  }
  console.log("Подключение закрыто");
})};
