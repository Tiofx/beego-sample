CREATE DATABASE  IF NOT EXISTS `Web6` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `Web6`;
-- MySQL dump 10.13  Distrib 5.7.12, for osx10.9 (x86_64)
--
-- Host: 127.0.0.1    Database: Web6
-- ------------------------------------------------------
-- Server version	5.6.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `AdminList`
--

DROP TABLE IF EXISTS `AdminList`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `AdminList` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId_idx` (`userId`),
  CONSTRAINT `userId` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `AdminList`
--

LOCK TABLES `AdminList` WRITE;
/*!40000 ALTER TABLE `AdminList` DISABLE KEYS */;
INSERT INTO `AdminList` VALUES (1,4);
/*!40000 ALTER TABLE `AdminList` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Blog`
--

DROP TABLE IF EXISTS `Blog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Blog` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` datetime DEFAULT NULL,
  `messageTitle` varchar(111) DEFAULT NULL,
  `imagePath` varchar(123) DEFAULT NULL,
  `message` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Blog`
--

LOCK TABLES `Blog` WRITE;
/*!40000 ALTER TABLE `Blog` DISABLE KEYS */;
INSERT INTO `Blog` VALUES (1,NULL,'Hello',NULL,'Hello site'),(2,NULL,'Hello',NULL,'Hello site'),(3,'2015-05-05 11:11:11','тест загрузки из CSV 1','','Наконец-то можна грузить файлы из CSV'),(4,'1015-05-05 11:22:22','тест загрузки из CSV 2','','видно что сайт развивается'),(5,'0000-05-05 11:22:33','CSV Наконец-то','','появился интернет'),(6,'2015-05-05 11:11:11','тест загрузки из CSV 1','','Наконец-то можна грузить файлы из CSV'),(7,'1015-05-05 11:22:22','тест загрузки из CSV 2','','видно что сайт развивается'),(8,'0000-05-05 11:22:33','CSV Наконец-то','','появился интернет'),(9,'2015-05-05 11:11:11','тест загрузки из CSV 1','','Наконец-то можна грузить файлы из CSV'),(10,'1015-05-05 11:22:22','тест загрузки из CSV 2','','видно что сайт развивается'),(11,'0000-05-05 11:22:33','CSV Наконец-то','','появился интернет'),(12,'2015-05-05 11:11:11','тест загрузки из CSV 1','','Наконец-то можна грузить файлы из CSV'),(13,'1015-05-05 11:22:22','тест загрузки из CSV 2','','видно что сайт развивается'),(14,'0000-05-05 11:22:33','CSV Наконец-то','','появился интернет'),(15,'2017-08-28 14:49:35','qwe','../public/assets/loadImages/','qwe'),(16,NULL,'beego works fine','','Go!!!'),(17,NULL,'go','','go'),(18,'2017-08-28 12:54:55','go','','golang'),(19,'2017-08-28 12:56:32','asdasd','','asd'),(20,'2017-08-28 12:58:01','qwe','/static/loadImages/afterTomorrow.jpg','asd'),(21,'2017-08-28 12:59:50','qwe','/static/loadImages/back.jpg','eee'),(22,'2017-08-28 13:00:41','aaa','/static/loadImages/camera_200.png','sss'),(23,'2017-08-28 13:03:40','qweee','static/loadImages/cat.jpg','eee'),(24,'2017-08-28 13:10:45','123','/static/loadImages/house.jpg','321'),(25,'2017-08-28 13:12:06','qwe','/static/loadImages/house.jpg','qwe'),(26,'2017-08-28 17:27:36','Test','/static/loadImages/section.jpg','new Test'),(27,'2015-05-05 11:11:11','тест загрузки из CSV 1','','Наконец-то можна грузить файлы из CSV'),(28,'1015-05-05 11:22:22','тест загрузки из CSV 2','','видно что сайт развивается'),(29,'0000-05-05 11:22:33','CSV Наконец-то','','появился интернет');
/*!40000 ALTER TABLE `Blog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Tests`
--

DROP TABLE IF EXISTS `Tests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Tests` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fio` varchar(111) DEFAULT NULL,
  `group` varchar(45) DEFAULT NULL,
  `date` datetime NOT NULL,
  `answer1` text,
  `answer2` varchar(45) DEFAULT NULL,
  `answer3` varchar(45) DEFAULT NULL,
  `isAnswer1Correct` tinyint(1) NOT NULL,
  `isAnswer2Correct` tinyint(1) NOT NULL,
  `isAnswer3Correct` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Tests`
--

LOCK TABLES `Tests` WRITE;
/*!40000 ALTER TABLE `Tests` DISABLE KEYS */;
INSERT INTO `Tests` VALUES (12,'',NULL,'2017-08-21 10:04:15','true','Сплошная тонкая','наклонный',1,1,1),(13,'',NULL,'2017-08-21 10:47:28','true','Сплошная тонкая','наклонный',1,1,1),(14,'','','2017-08-21 08:54:54','','','',0,0,0),(15,'',NULL,'2017-08-21 10:55:03','true','Сплошная тонкая','наклонный',1,1,1),(16,'','','2017-08-21 09:00:26','','','',0,0,0),(17,'','','2017-08-21 11:09:25','','','',0,0,0),(18,'','','2017-08-21 11:09:45','','','',0,0,0),(19,'','','2017-08-21 11:10:07','','','',0,0,0),(20,'','','2017-08-21 11:10:26','','','',0,0,0),(21,'','','2017-08-21 11:11:42','','','',0,0,0),(22,'','','2017-08-21 11:19:59','','','',0,0,0),(23,'','','2017-08-21 11:21:56','','','',0,0,0),(24,'','','2017-08-21 11:22:29','','','',0,0,0),(25,'',NULL,'2017-08-21 13:35:01','true','Сплошная тонкая','наклонный',1,1,1),(26,'','','2017-08-22 06:53:20','','','',0,0,0),(27,'','','2017-08-22 06:53:28','','','',0,0,0),(28,'','','2017-08-28 19:44:45','','','',0,0,0),(29,'','','2017-08-28 19:45:02','','','',0,0,0),(30,'','','2017-08-28 19:45:16','','','',0,0,0),(31,'','','2017-08-29 05:43:38','','','',0,0,0),(32,'','','2017-08-29 05:47:17','','','',0,0,0),(33,'qwe','ИС/б-11-o','2017-08-29 05:49:08','eee','Сплошная толстая основная','горизонтальный',0,0,0);
/*!40000 ALTER TABLE `Tests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `User` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fio` varchar(200) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `login` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES (4,'Повх Андрей Анатольевич','test@test.com','test','root'),(5,'','','qwe','qwe');
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `UserVisit`
--

DROP TABLE IF EXISTS `UserVisit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `UserVisit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(111) DEFAULT NULL,
  `webPage` varchar(444) DEFAULT NULL,
  `visitNumber` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `UserVisit`
--

LOCK TABLES `UserVisit` WRITE;
/*!40000 ALTER TABLE `UserVisit` DISABLE KEYS */;
INSERT INTO `UserVisit` VALUES (1,'test','/signin',3),(2,'test','/tests',13),(3,'test','/guestBook',2),(4,'test','/myBlog',2),(5,'test','/index',7),(6,'test','/admin/index',3),(7,'test','/admin/guestBookLoad',5),(8,'test','/admin/blogEdit',4),(9,'test','/admin/static/js/lab3/modalDialog.js',3),(10,'test','/admin/userVisit',14),(11,'test','/aboutMe',4),(12,'test','/admin/visitStatistic',1),(13,'test','/blog/guestBook',4),(14,'test','/blog/myBlog',7),(15,'test','/blog/static/loadImages/section.jpg',1),(16,'test','/public/assets/loadImages/',7),(17,'test','/blog/static/loadImages/house.jpg',1),(18,'test','/blog/static/loadImages/cat.jpg',1),(19,'test','/static/loadImages/camera_200.png',1),(20,'test','/blog/static/loadImages/back.jpg',1),(21,'test','/blog/static/loadImages/afterTomorrow.jpg',1),(22,'test','/admin/myBlog',1),(23,'test','/admin/admin',1),(24,'test','/myInterests',3),(25,'test','/learning',1),(26,'test','/signOut',1),(27,'qwe','/index',3),(28,'qwe','/aboutMe',6),(29,'qwe','/myInterests',4),(30,'qwe','/learning',1),(31,'qwe','/photoAlbum',1),(32,'qwe','/signOut',3),(33,'qwe','/blog/blogLoad',2),(34,'qwe','/blog/myBlog',1),(35,'qwe','/public/assets/loadImages/',1),(36,'test','/history',8),(37,'qwe','/admin/',1),(38,'test','/blog/blogLoad',6),(39,'test','/contacts',2);
/*!40000 ALTER TABLE `UserVisit` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-08-29  9:16:48
