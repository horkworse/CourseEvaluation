const express = require("express");
const connection = require("./connection");
const app = express();

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


connection.connect();


//главная


let a = [];
let fullName = "select  Surname, First_name, Patronymic from Users where id = 1";
await connection.query(fullName).then(x => a = x);
console.log(a);

//console.log(a);


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



connection.end();
app.listen(3000);