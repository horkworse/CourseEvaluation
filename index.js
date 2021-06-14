const path = require('path');
const express = require("express");
const app = express();
const connection = require("./connection");

app.set("view engine", "hbs");

connection.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    let subjects = "SELECT Name FROM Subject_Courses";
    connection.query(subjects)
        .then( x => {
            let result = [];
            let values = JSON.parse(x);
            values.forEach(y => result.push(y.Name));
            res.render(`${__dirname}/public/index.hbs`, {
                user: "Пономарев Семён Алексеевич",
                subjects: result
            });
        });

});


/*главная
- данные пользователя (фио) +
- список непройденных +
- список пройденных
статистика по определённому предмету
- предметы (пройденные + непройденные)
- преподаватель
- 5 параметров
- комментарии (проверка на модерацию)
Опрос по <дисциплина>
- список вопросов
Ваш вклад
- предметы (пройденные + непройденные)
- новости
*/



/*
//опросы пользователя (пройденные) в виде id
let completedServeyList = "SELECT Course_Id FROM Users_Review WHERE User_Id = 1;";
connection.execute(completedServeyList);
*/

/*
//непройденные
let notCompletedServeyList = "select * from Courses JOIN Users_Courses ON Id = Course_Id " +
"WHERE User_Id = 1 and User_Id NOT IN (SELECT Course_Id FROM Users_Review WHERE " +
"Users_Review.User_Id = Users_Courses.User_Id);";
connection.execute(notCompletedServeyList);
*/


//статистика

/*
//все опросы пользователя (пройденные и нет)
let allCoursesOfUser = "SELECT Name, Start_date, End_date from Courses JOIN Users_Courses ON User_Id = 1;";
connection.execute(allCoursesOfUser);
*/

/*
//фио преподавателя
let teacherOnCourse = "SELECT  Surname, FirstName, Patronymic FROM Courses JOIN Teachers ON " +
"Teachers.Id = Courses.Teacher_id WHERE Courses.Id = 1;";
connection.execute(teacherOnCourse);
*/

/*
//5 параметров
let marksStar = "SELECT AVG(param1), AVG(param2), AVG(param3), AVG(param4), AVG(param5), (AVG(param1) + AVG(param2)" +
" + AVG(param3) + AVG(param4) + AVG(param5)) / 5 AS Average FROM Users_Review WHERE Course_Id = 1 " +
"GROUP BY Course_Id;";
connection.execute(marksStar);
*/

/*
//отзывы на курс с id 1
let rewiewText = "SELECT TextReview FROM Users_Review WHERE Course_Id = 1;";
connection.execute(rewiewText);
*/


//опрос по дисциплине

/*
//дисциплина, id
...
*/
/*
//вопросы
...
*/


//ваш вклад
/*
...
*/
app.listen(4000);