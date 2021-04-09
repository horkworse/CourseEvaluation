const mysql = require("mysql2");

/*
    данные для подключения лучше использовать в каком-нибудь файле config.js и его подключать сюда
*/

const connection = mysql.createConnection({
  host: "82.202.172.211",
  port: "3316",
  user: "u106227_ca",
  database: "u106227_ce",
  password: "bW1cI0oG4xeW7h"
});


/*
    > connection__connect
    "подключение подключения" - странное, избыточное название
    я бы его не стал выносить за границы модуля, а оставил бы как функцию и вызывал внутри методов или еще где-нибудь
    кодстайл
*/
exports.connection__connect = () => {connection.connect(function(err) {
    if (err) {
      console.log("Ошибка: " + err.message);
    }
    console.log("Подключение к серверу MySQL успешно установлено");
 })};

/*
    > connection__execute -
    "подключение выполнения" - странное, избыточное название
    кодстайл
    для читабельности текст запроса выводится в переменную и только потом она используется в коде

    и желательно форматировать запросы римерно так, чтобы были отступы:
    select Surname, First_name
    from Users;
*/
exports.connection__execute = () => {connection.execute("select Surname, First_name from Users;",
  function(err, results, fields) {
    if (err) {
      console.log("Ошибка: " + err.message);
    }
    console.log(JSON.stringify(results));
    return JSON.stringify(results);
})};

/*
    > connection__end -
    "подключение завершения" - странное, избыточное название
    кодстайл
*/
exports.connection__end = () => {connection.end(function(err) {
  if (err) {
    console.log("Ошибка: " + err.message);
  }
  console.log("Подключение закрыто");
})};

/*
    в js есть свой код стайл:
    везде используется camelCase, т.е.
        сущности: someObject и никаких SomeObject, some_object, some-object, , some____object

    после каждой операции надо ставить ";", даже если в js Это делать не обязательно

    каждая опеация пишется с новой строки

    при объявлении сущности, открывающая скобка пишется на этой же строке, а затем на следующей идет тело

    оформление переменных:
    const constant = 10;
    let variable = "some text";

    оформление функции:
    function func(arg1, arg2, ...argN) {
      // body
    }
    let func = function(arg1, arg2, ...argN) {
      // body
    }
    let func = (arg1, arg2, ...argN) => {
      // body
    }
    let func = (x, y) => x + y;
    b.func = (x, y) => x + y;
    и так далее

    по возможности лучше сокращать объявление функции до стрелочной функции
    например
    function func(x, y) {
      return x+ y;
    }
    лучше сократить до
    let func = (x, y) => x + y;

    и не ленись делать по кодстайлу, я не буду читать код, который режет мне глаза, даже если он качественный (:
*/