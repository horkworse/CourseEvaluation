const mysql = require("mysql2");
const config = require("./config");

const connection = mysql.createConnection({
    host: config.db.host,
    port: config.db.port,
    user: config.db.user,
    database: config.db.database,
    password: config.db.password
}).promise();

exports.connect = () => {
    connection.connect((err) => {
        if (err) {
          console.log("Ошибка: " + err.message);
        }
        console.log("Подключение к серверу MySQL успешно установлено");
 })};


/*первоначальная версия
exports.execute = (sqlParam) => {
    connection.execute(sqlParam,
    (err, results, fields) => {
        if (err) {
          console.log("Ошибка: " + err.message);
        }
        console.log(JSON.stringify(results));
        return JSON.stringify(results);
})};
*/

//возвращает промис
exports.query = (sqlParam) => {
    let a = connection.query(sqlParam)
    .them(results => {
        return JSON.stringify(result[0]);
    })
    return a;
};

exports.end = () => {
    connection.end((err) => {
        if (err) {
            console.log("Ошибка: " + err.message);
        }
        console.log("Подключение закрыто");
})};