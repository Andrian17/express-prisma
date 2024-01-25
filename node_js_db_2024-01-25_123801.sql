-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: node_js_db
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_loves`
--

DROP TABLE IF EXISTS `_loves`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_loves` (
  `A` varchar(100) NOT NULL,
  `B` varchar(100) NOT NULL,
  PRIMARY KEY (`A`,`B`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_loves`
--

/*!40000 ALTER TABLE `_loves` DISABLE KEYS */;
INSERT INTO `_loves` VALUES ('20','P0001'),('20','P0002'),('21','P0001'),('21','P0002'),('22','P0001'),('22','P0002'),('22','P0003'),('22','P0004');
/*!40000 ALTER TABLE `_loves` ENABLE KEYS */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Food'),(2,'Gadget');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `customer_id` varchar(100) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` text,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,'21','Comment 1','Sample Comment 1',NULL),(2,'21','Comment 2','Sample Comment 2',NULL),(3,'20','Comment 3','Sample Comment 3',NULL),(4,'20','Comment 4','Sample Comment 4',NULL),(5,'18','Comment 5','Sample Comment 5',NULL),(6,'16','Comment 6','Sample Comment 6',NULL),(7,'20','Comment 20','Sample Comment 20','2024-01-23 15:33:51'),(8,'20','Comment 20','Sample Comment 20','2024-01-23 15:34:36'),(9,'23','Comment 23 1','Sample Comment 23 1','2024-01-23 15:47:42'),(10,'23','Comment 23 2','Sample Comment 23 2','2024-01-23 15:47:42');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers` (
  `id` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES ('16','Name 16','name16@gmail.com','76543234566'),('17','Name 017','name017@gmail.com','76543234567'),('18','Name 18','name18@gmail.com','76543234568'),('19','Name 19','name19@gmail.com','76543234569'),('20','Name 20','name20@gmail.com','76543234520'),('21','Name 21','name21@gmail.com','087654323420'),('22','Name 22','name22@gmail.com','090909090222'),('23','Name 23','name23@gmail.com','09876543456523');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;

--
-- Table structure for table `custumers`
--

DROP TABLE IF EXISTS `custumers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `custumers` (
  `id` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `custumer_email_unique` (`email`),
  UNIQUE KEY `custumer_phone_unique` (`phone`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `custumers`
--

/*!40000 ALTER TABLE `custumers` DISABLE KEYS */;
INSERT INTO `custumers` VALUES ('16','Name 16','name16@gmail.com','76543234566'),('17','Name 017','name017@gmail.com','76543234567'),('18','Name 18','name18@gmail.com','76543234568'),('19','Name 19','name19@gmail.com','76543234569'),('20','Name 20','name20@gmail.com','76543234520'),('21','Name 21','name21@gmail.com','087654323420');
/*!40000 ALTER TABLE `custumers` ENABLE KEYS */;

--
-- Table structure for table `likes`
--

DROP TABLE IF EXISTS `likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `likes` (
  `customer_id` varchar(100) NOT NULL,
  `product_id` varchar(100) NOT NULL,
  PRIMARY KEY (`customer_id`,`product_id`),
  KEY `likes_product_id_fk` (`product_id`),
  CONSTRAINT `likes_product_id_fk` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes`
--

/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
INSERT INTO `likes` VALUES ('21','P0001'),('22','P0001');
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` int NOT NULL,
  `stock` int NOT NULL,
  `category` varchar(100) NOT NULL,
  `create_time` datetime DEFAULT (curtime()),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES ('P0001','A',1000,100,'K1','2024-01-21 18:46:01'),('P0002','B',2000,200,'K1','2024-01-21 18:46:01'),('P0003','C',3000,300,'K1','2024-01-21 18:46:01'),('P0004','D',4000,400,'K2','2024-01-21 18:46:01'),('P0005','E',5000,500,'K2','2024-01-21 18:46:01'),('P0006','F',1000,100,'K3','2024-01-21 19:10:03'),('P0007','G',2000,200,'K3','2024-01-21 19:10:03'),('P0008','H',3000,300,'K3','2024-01-21 19:10:03'),('P0009','I',4000,400,'K3','2024-01-21 19:10:03'),('P0010','J',5000,500,'K3','2024-01-21 19:10:03');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;

--
-- Table structure for table `samples`
--

DROP TABLE IF EXISTS `samples`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `samples` (
  `id` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `samples`
--

/*!40000 ALTER TABLE `samples` DISABLE KEYS */;
INSERT INTO `samples` VALUES ('1','Andrian Cimen'),('2','Hadi');
/*!40000 ALTER TABLE `samples` ENABLE KEYS */;

--
-- Table structure for table `wallet`
--

DROP TABLE IF EXISTS `wallet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wallet` (
  `id` varchar(100) NOT NULL,
  `balance` int NOT NULL,
  `customer_id` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `wallet_customer_id_unique` (`customer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wallet`
--

/*!40000 ALTER TABLE `wallet` DISABLE KEYS */;
INSERT INTO `wallet` VALUES ('1',200000,'16'),('2',400000,'17'),('3',400000,'18'),('4',400000,'19'),('5',150000,'22'),('6',250000,'23');
/*!40000 ALTER TABLE `wallet` ENABLE KEYS */;

--
-- Dumping routines for database 'node_js_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-25 12:38:04
