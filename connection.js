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


exports.query = async (sqlParam) => {
    let a = [];
    await connection.query(sqlParam)
    .then(results => {
        a = JSON.stringify(results[0]);
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