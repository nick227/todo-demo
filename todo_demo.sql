-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 08, 2020 at 10:09 AM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `todo_demo`
--

-- --------------------------------------------------------

--
-- Table structure for table `severity_type`
--

DROP TABLE IF EXISTS `severity_type`;
CREATE TABLE IF NOT EXISTS `severity_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(12) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `severity_type`
--

INSERT INTO `severity_type` (`id`, `type`) VALUES
(1, 'High'),
(2, 'Low');

-- --------------------------------------------------------

--
-- Table structure for table `status_type`
--

DROP TABLE IF EXISTS `status_type`;
CREATE TABLE IF NOT EXISTS `status_type` (
  `title` varchar(12) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `status_type`
--

INSERT INTO `status_type` (`title`, `id`) VALUES
('Pending', 1),
('Complete', 2);

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

DROP TABLE IF EXISTS `task`;
CREATE TABLE IF NOT EXISTS `task` (
  `text` varchar(255) NOT NULL,
  `severity_id` tinyint(4) NOT NULL,
  `target_completion_date` datetime NOT NULL,
  `final_completion_date` datetime DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(20) NOT NULL,
  `create_date` datetime NOT NULL DEFAULT current_timestamp(),
  `status_id` tinyint(4) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=30 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`text`, `severity_id`, `target_completion_date`, `final_completion_date`, `id`, `user_id`, `create_date`, `status_id`) VALUES
('Get money', 1, '2020-06-24 00:00:00', '2020-06-27 00:00:00', 2, '10158175889550049', '2020-06-07 02:41:10', 2),
('hoorah', 1, '2020-06-02 16:40:00', NULL, 16, '10158175889550049', '2020-06-07 23:47:21', 2);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(23) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
