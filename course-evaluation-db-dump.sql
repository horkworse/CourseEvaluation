SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `u106227_ca` таблицы: Пользователи, курсы, учителя, пользователи - курсы, Отзывы, предметы курсов, Вопросы для типа курса
--



-- --------------------------------------------------------

--
-- Структура таблицы `Teachers`
--

CREATE TABLE `Teachers` (
  `Id` int(11) NOT NULL,
  `Surname` varchar(20) DEFAULT NULL,
  `First_name` varchar(20) DEFAULT NULL,
  `Patronymic` varchar(20) DEFAULT NULL
  
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- --------------------------------------------------------

--
-- Структура таблицы `Object_Courses`
--

CREATE TABLE `Object_Courses` (
  `Id` int(11) NOT NULL,
  `Name` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------



--
-- Структура таблицы `Courses`
--

CREATE TABLE `Courses` (
  `Id` int(11) NOT NULL,
  `Course_object_Id` INT DEFAULT NULL,
  `Course_type_Id` TINYINT DEFAULT NULL,
  `Teacher_id` int(11) DEFAULT NULL,
  `Course_number` int NOT NULL,
  `Start_date` DATETIME DEFAULT NULL,
  `End_date` DATETIME DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- --------------------------------------------------------
--
-- Структура таблицы `Users`
--

CREATE TABLE `Users` (
  `Id` int(11) NOT NULL,
  `UrfuId` int(11) NOT NULL,
  `Surname` varchar(20) DEFAULT NULL,
  `First_name` varchar(20) DEFAULT NULL,
  `Patronymic` varchar(20) DEFAULT NULL,
  `Group` varchar(9) DEFAULT NULL,
  `Specialty` varchar(20) DEFAULT NULL,
  `Institute` varchar(20) DEFAULT NULL,
  `Course_number` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- --------------------------------------------------------
--
-- Структура таблицы `Users_Cours`
--

CREATE TABLE `Users_Courses` (
  `User_Id` int(11) NOT NULL,
  `Course_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `Users_Cours`
--



-- --------------------------------------------------------
--
-- Структура таблицы `Users_Review`
--

CREATE TABLE `Users_Review` (
  `Id` int(11) NOT NULL,
  `Review_date` DATETIME DEFAULT NULL,
  `Course_Id` tinyint(4) DEFAULT NULL,  /* можно использовать курс + ученик как составной ключ*/
  `User_Id` tinyint(4) DEFAULT NULL,
  `Heading` tinytext DEFAULT NULL,
  `Text_review` tinytext DEFAULT NULL,
  `Param1` tinyint(4) DEFAULT NULL,
  `Param2` tinyint(4) DEFAULT NULL,
  `Param3` tinyint(4) DEFAULT NULL,
  `Param4` tinyint(4) DEFAULT NULL,
  `Param5` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------
--
-- Структура таблицы `Review_Questions`
--

CREATE TABLE `Review_Questions` (
  `Id` int(11) NOT NULL,
  `Course_type` tinytext DEFAULT NULL,
  `Question1` tinytext DEFAULT NULL,
  `Question2` tinytext DEFAULT NULL,
  `Question3` tinytext DEFAULT NULL,
  `Question4` tinytext DEFAULT NULL,
  `Question5` tinytext DEFAULT NULL,
  `Question6` tinytext DEFAULT NULL,
  `Question7` tinytext DEFAULT NULL,
  `Question8` tinytext DEFAULT NULL,
  `Question9` tinytext DEFAULT NULL,
  `Question10` tinytext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `Review_Questions`
--
 
 -- --------------------------------------------------------


--
-- Индексы сохранённых таблиц
--

--
-- Введение первичных ключей
--
ALTER TABLE `Courses`
  ADD PRIMARY KEY (`Id`);

ALTER TABLE `Users_Review`
  ADD PRIMARY KEY (`Id`);
  
ALTER TABLE `Users`
  ADD PRIMARY KEY (`Id`);
  
ALTER TABLE `Teachers`
  ADD PRIMARY KEY (`Id`);
  
ALTER TABLE `Review_Questions`
  ADD PRIMARY KEY (`Id`);
  
ALTER TABLE `Object_Courses`
  ADD PRIMARY KEY (`Id`);
  
--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для первичных ключей
--
ALTER TABLE `Courses`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=0;

ALTER TABLE `Users_Review`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=0;

 ALTER TABLE `Users`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=0;

ALTER TABLE `Teachers`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=0;
  
ALTER TABLE `Review_Questions`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=0;
  
ALTER TABLE `Object_Courses`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=0;
  


COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
