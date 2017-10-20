/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50541
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50541
File Encoding         : 65001

Date: 2017-10-21 01:29:52
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for book
-- ----------------------------
DROP TABLE IF EXISTS `book`;
CREATE TABLE `book` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `author` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `isbn` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `print_year` int(11) NOT NULL,
  `read_already` bit(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of book
-- ----------------------------
INSERT INTO `book` VALUES ('1', 'Effective Java (2nd Edition)', 'Effective Java™, Second Edition, brings together seventy-eight indispensable programmer’s rules of thumb: working, best-practice solutions for the programming challenges you encounter every day.', 'Joshua Bloch', '0321356683', '2008', '\0');
INSERT INTO `book` VALUES ('3', 'Adopting the Rational Unified Process: Success with the RUP', 'From assessment of your current capability to the details of RUP implementation, this book takes you by the hand, and guides you.', 'Stefan Bergstrom', '0321202945', '2004', '\0');
INSERT INTO `book` VALUES ('4', 'Java Generics and Collections: Speed Up the Java Development Process', 'This comprehensive guide shows you how to master the most important changes to Java since it was first released.', 'Maurice Naftalin', '0596527756', '2006', '\0');
INSERT INTO `book` VALUES ('5', 'Test Driven Development: By Example', 'Follows two TDD projects from start to finish, illustrating techniques programmers can use to increase the quality of their work.', 'Kent Beck', '0321146530', '2002', '\0');
INSERT INTO `book` VALUES ('6', 'NoSQL Distilled: A Brief Guide to the Emerging World of Polyglot Persistence', 'Advocates of NoSQL databases claim they can be used to build systems that are more performant, scale better, and are easier to program.', 'Martin Fowler', '0321826620', '2012', '\0');
INSERT INTO `book` VALUES ('7', 'The Clean Coder: A Code of Conduct for Professional Programmers', 'Programmers who endure and succeed amidst swirling uncertainty and nonstop pressure share a common attribute: They care deeply about the practice of creating software. They treat it as a craft. They are professionals.', 'Robert C. Martin', '0137081073', '2011', '\0');
INSERT INTO `book` VALUES ('8', 'Clean Architecture: A Craftsman\'s Guide to Software Structure and Design (Robert C. Martin Series)', 'By applying universal rules of software architecture, you can dramatically improve developer productivity throughout the life of any software system.', 'Robert C. Martin', '0134494164', '2017', '\0');
INSERT INTO `book` VALUES ('9', 'Refactoring: Improving the Design of Existing Code', 'As the application of object technology--particularly the Java programming language--has become commonplace, a new problem has emerged to confront the software development community.', 'Martin Fowler, Kent Beck', '0201485672', '1999', '\0');
INSERT INTO `book` VALUES ('10', 'The Pragmatic Programmer: From Journeyman to Master', ' It covers topics ranging from personal responsibility and career development to architectural techniques for keeping your code flexible and easy to adapt and reuse.', 'Andrew Hunt, David Thomas', '020161622X', '1999', '\0');
INSERT INTO `book` VALUES ('11', 'How To Win Friends and Influence People', 'And much more! Achieve your maximum potential—a must-read for the twenty-first century with more than 15 million copies sold!', 'Dale Carnegie', '1439167346', '2009', '');
INSERT INTO `book` VALUES ('13', 'Smalltalk Best Practice Patterns', 'This classic book is the definitive real-world style guide for better Smalltalk programming. This author presents a set of patterns that organize all the informal experience successful Smalltalk programmers have learned the hard way.', 'Kent Beck', '013476904X', '1996', '\0');
INSERT INTO `book` VALUES ('14', 'Patterns of Enterprise Application Architecture', 'The practice of enterprise application development has benefited from the emergence of many new enabling technologies. Multi-tiered object-oriented platforms, such as Java and .NET, have become commonplace.', 'Martin Fowler', '0321127420', '2002', '\0');
INSERT INTO `book` VALUES ('15', 'The 4-Hour Workweek: Escape 9-5, Live Anywhere, and Join the New Rich', 'Forget the old concept of retirement and the rest of the deferred-life plan–there is no need to wait and every reason not to, especially in unpredictable economic times.', 'Timothy Ferriss', '9780307465351', '2009', '\0');
INSERT INTO `book` VALUES ('16', 'Hooked: How to Build Habit-Forming Products', 'Why do some products capture widespread attention while others flop? What makes us engage with certain products out of sheer habit? Is there a pattern underlying how technologies hook us?', 'Nir Eyal, Ryan Hoover', '1591847788', '2014', '\0');
INSERT INTO `book` VALUES ('17', 'StrengthsFinder 2.0', 'Do you have the opportunity to do what you do best every day? \n\nChances are, you don\'t. All too often, our natural talents go untapped. From the cradle to the cubicle, we devote more time to fixing our shortcomings than to developing our strengths. ', 'Tom Rath', '9781595620156', '2007', '\0');
INSERT INTO `book` VALUES ('18', 'Who Moved My Cheese?: An Amazing Way to Deal with Change in Your Work and in Your Life', 'A timeless business classic, Who Moved My Cheese? uses a simple parabel to reveal profound truths about dealing with change so that you can enjoy less stress and more success in your work and in your life.', 'Spencer Johnson', '0399144463', '1998', '\0');
INSERT INTO `book` VALUES ('19', 'An Introduction to Parallel Programming', 'The main purpose of the book is to teach parallel programming in\nMPI, Pthreads, and OpenMP to an audience with a limited background in computer\nscience and no previous experience with parallelism.', 'Peter Pacheco', '9780123742605', '2011', '\0');
INSERT INTO `book` VALUES ('20', 'Thinking in Java (4th Edition)', 'Thinking in Java has earned raves from programmers worldwide for its extraordinary clarity, careful organization, and small, direct programming examples.', 'Bruce Eckel', '0131872486', '2006', '\0');
INSERT INTO `book` VALUES ('21', 'Head First Java, 2nd Edition', 'Learning a complex new language is no easy task especially when it s an object-oriented computer programming language like Java.', 'Kathy Sierra, Bert Bates', '0596009208', '2005', '\0');
INSERT INTO `book` VALUES ('22', 'NoSQL for Mere Mortals', 'Whether you’re a database developer, data modeler, database user, or student, learning NoSQL can open up immense new opportunities. As thousands of database professionals already know,  For Mere Mortals is the fastest, easiest route to mastery.', 'Dan Sullivan', '0134023218', '2015', '\0');
INSERT INTO `book` VALUES ('23', 'HTML and CSS: Design and Build Websites', 'Many books teaching HTML and CSS are dry and only written for those who want to become programmers, which is why this book takes an entirely new approach.', 'Jon Duckett', '1118008189', '2011', '\0');
INSERT INTO `book` VALUES ('24', 'JavaScript and JQuery: Interactive Front-End Web Development', 'By the end of the book, not only will you be able to use the thousands of scripts, JavaScript APIs, and jQuery plugins that are freely available on the web, and be able to customize them - you will also be able to create your own scripts from scratch.', 'Jon Duckett', '1118531647', '2014', '\0');
INSERT INTO `book` VALUES ('25', 'OCA: Oracle Certified Associate Java SE 8 Programmer I Study Guide: Exam 1Z0-808', 'With complete coverage of 100% of the exam objectives, this book provides everything you need to know to confidently take the exam.', 'Jeanne Boyarsky, Scott Selikoff', '1118957407', '2014', '\0');
INSERT INTO `book` VALUES ('26', 'OCP: Oracle Certified Professional Java SE 8 Programmer II Study Guide: Exam 1Z0-809', 'Written by expert Java developers, this book goes beyond mere exam prep with the insight, explanations and perspectives that come from years of experience. You\'ll review the basics of object-oriented programming, and much more.', 'Jeanne Boyarsky, Scott Selikoff', '1119067901', '2015', '\0');
