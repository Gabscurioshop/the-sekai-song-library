-- MySQL dump 10.13  Distrib 8.0.30, for macos12 (x86_64)
--
-- Host: localhost    Database: sekai
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `singer`
--

DROP TABLE IF EXISTS `singer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `singer` (
  `singer_id` varchar(6) NOT NULL,
  `last_name` varchar(20) DEFAULT NULL,
  `first_name` varchar(20) DEFAULT NULL,
  `unit_id` varchar(3) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `height_cm` int DEFAULT NULL,
  `hex_color` varchar(7) DEFAULT NULL,
  `voice_actor` varchar(40) DEFAULT NULL,
  `singer_profile` text,
  `school` varchar(30) DEFAULT NULL,
  `school_year` varchar(3) DEFAULT NULL,
  `hobbies` varchar(75) DEFAULT NULL,
  `specialty` varchar(75) DEFAULT NULL,
  `fav_food` varchar(50) DEFAULT NULL,
  `least_fav_food` varchar(50) DEFAULT NULL,
  `dislikes` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`singer_id`),
  KEY `singer` (`unit_id`),
  CONSTRAINT `singer_ibfk_1` FOREIGN KEY (`unit_id`) REFERENCES `unit` (`unit_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `singer`
--

LOCK TABLES `singer` WRITE;
/*!40000 ALTER TABLE `singer` DISABLE KEYS */;
INSERT INTO `singer` VALUES ('LN-01','Hoshino','Ichika','LN','2004-08-11',161,'#33AAEE','Noguchi Ruriko','Leo/need\'s vocalist and guitarist. Seems aloof at first glance, but is friendly and caring when you get to know her. She\'s known Saki, Honami, and Shiho since they were little, but a certain event drove a wedge between them. Ichika loves listening to Miku songs.','Miyamasuzaka Girls Academy','1-C','Listening to Miku songs, admiring her cacti','Peeling apples','Yakisoba buns','Green peas','Thrill rides'),('LN-02','Tenma','Saki','LN','2004-05-09',159,'#FFDD45','Isobe Karin','Leo/need\'s keyboardist. Always cheerful, she\'s the funny one of the group. Saki has just returned to school, having missed much of junior high due to poor health. She was looking forward enjoying high school life and reuniting with old friends, but finds that things have become... complicated.','Miyamasuzaka Girls Academy','1-C','Fashion & make-up videos, beading','Hairstyling, juggling','Snacks','Rice porridge','Being alone'),('LN-03','Mochizuki','Honami','LN','2004-10-27',166,'#EE6666','Ueda Reina','Leo/need\'s drummer. She excels in both sports and schoolwork and has a kind and caring personality. Honami has been friends with her band members since childhood, but drifted apart from them during junior high school.','Miyamasuzaka Girls Academy','1-B','Walking her dog, gardening','Housekeeping, swimming','Apple pie','Cheese','Drawing'),('LN-04','Hinomori','Shiho','LN','2005-01-08',159,'#BBDE22','Nakashima Yuki','Leo/need\'s bassist. Shiho needs her space and dislikes clingy people. She tends to get totally absorbed in her hobbies and doesn\'t care what others might think of her. She used to be very close with her band members until something happened that caused a rift in their relationship.','Miyamasuzaka Girls Academy','1-A','Going to girl band gigs, playing bass guitar','Calligraphy','Ramen, Salisbury Steak','Tofu','Her sister'),('MMJ-01','Hanasato','Minori','MMJ','2004-04-14',158,'#FFCDAC','Ogura Yui','Minori is hard-working and driven, traits that can be seen in her single-minded pursuit of a career as an idol. Becoming an idol has been her dream ever since she saw Haruka performing in the idol group ASRUN. Minori has been to a lot of auditions, but so far with no success.','Miyamasuzaka Girls Academy','1-A','Dance covers, writing in her diary, looking after animals','Coming up with catchphrases','Salmon','Broccoli','Relaxing activities'),('MMJ-02','Kiritani','Haruka','MMJ','2004-10-05',163,'#99CDFF','Yoshioka Mayu','Haruka was a member of the nationally famous idol group ASRUN. Her incredible charisma made her the most popular member of that group, but unfortunately, it was disbanded. She goes to Miyamasuzaka Girls Academy, same as Minori.','Miyamasuzaka Girls Academy','1-C','Collecting penguin-themed merch','Basketball','Anything sweet','Wasabi','Idleness'),('MMJ-03','Momoi','Airi','MMJ','2004-03-19',156,'#FFA9CC','Furihata Ai','Airi used to be a TV personality, appearing on many variety shows. She\'s very confident to the point of coming off as pushy sometimes. Despite being very passionate and invested in her budding idol career, something happened that resulted in her quitting her talent agency.','Miyamasuzaka Girls Academy','2-D','Researching idols, shopping','Cooking, looking after kids','Japanese sweets','Liver','Cats (allergic)'),('MMJ-04','Hinomori','Shizuku','MMJ','2003-12-06',168,'#9AEEDE','Honnizumi Rina','Shizuku is affiliated with the idol group Cheerful*Days. Her mysterious and mature aura are a hit with her fans, but have earned her the jealousy of fellow group members. She\'s classmates with Airi.','Miyamasuzaka Girls Academy','2-D','Reading, taking walks','Archery, embroidery','Udon noodles, tofu skin','Spicy foods','Reading maps, using computers'),('N25-01','Yoisaki','Kanade','N25','2004-02-10',154,'#BB6588','Kusunoki Tomori','Kanade was traumatized when her music inadvertently led someone very dear to her into depression. This unfortunate event resulted in her focusing on creating songs which inspired hope, and she created Nightcord at 25:00 specifically with this goal in mind. She composes songs for the group.','Online High School','','Finding new music to listen to, movies, manga, anime, art','An innate ability to accurately track time','Instant noodles, canned food','Coriander, natto, and other smelly foods','Direct sunlight, housework'),('N25-02','Asahina','Mafuyu','N25','2004-01-27',162,'#8889CC','Tanabe Rui','The lyricist of Nightcord at 25:00, Mafuyu is good-natured, reliable, considerate and academically talented. She\'s the only member of the group who attends daytime classes. She seems to have no flaws whatsoever... or is she just putting on a facade?','Miyamasuzaka Girls Academy','2-B','Aquarium','Speaking English','Mom\'s home cooking','Not Sure','Not Sure'),('N25-03','Shinonome','Ena','N25','2003-04-30',158,'#CCAA87','Suzuki Minori','Ena\'s desperate craving for recognition has led to her becoming addicted to social media. Her dad is a famous painter, and she posts her own art online. Kanade came across Ena\'s artwork, and invited her to join the group as an illustrator.','Kamiyama HS Night Classes','2-D','Drawing, taking selfies, social media, egosurfing','Researching fashion accessories, picking out the best cooking ingredients','Pancakes, cheesecake','Carrots','Getting up in the morning'),('N25-04','Akiyama','Mizuki','N25','2004-08-27',163,'#E4A8CA','Satou Hinata','Kind of moody and obsessed with anything cute. Falling in love with one of Kanade\'s songs found at random online, Mizuki created a music video for it, which in turn caught Kanade\'s attention. That\'s how Mizuki became the group\'s animator. Friends though they may be, Mizuki keeps a big secret from the rest of the group.','Kamiyama High School','1-A','Making Videos, Collages','Redesigning clothes','Curry rice, french fries','Mushrooms','Foods that are too hot'),('VBS-01','Azusawa','Kohane','VBS','2005-03-02',156,'#FF679A','Akina','Kohane is very shy and lacks self-confidence. Her passion for music began when she saw An jamming with other musicians at a live music cafe bar. It was her first encounter with rap and fast-paced music unlike anything she\'d learned at school.','Miyamasuzaka Girls Academy','1-A','Looking after her dad\'s pet snake','Photography','Peach buns, sesame balls','Pickled foods','Public speaking'),('VBS-02','Shiraishi','An','VBS','2004-07-26',160,'#00BBDC','Sumi Tomomi Jiena','The easy-going yet spirited daughter of a retired musician who had quite a reputation on the streets of Shibuya. An\'s goal is to put on a show that surpasses her dad\'s RAD WEEKEND gig.','Kamiyama High School','1-A','Growing mint','Making coffee and tea','Rum raisin ice cream','Tomatoes','Ghosts, scary stories'),('VBS-03','Shinonome','Akito','VBS','2004-11-12',174,'#FF7721','Imai Fumiya','Akito was inspired to get into music by An\'s dad. He sings with his partner Toya at the BAD DOGS clubhouse. He seems like a gentle-mannered boy, but there\'s also another side to his personality.','Kamiyama High School','1-C','Fashion Styling','Beatboxing','Pancakes, cheesecake','Carrots','Dogs'),('VBS-04','Aoyagi','Toya','VBS','2004-05-25',178,'#0077DD','Itou Kent','Reserved and taciturn. His strict dad, a classical musician, had Toya take music classes for especially talented children from a young age. This early education brought results, but in an act of defiance against his father, Toya became a street musician.','Kamiyama High School','1-B','Reading','Piano, violin','Coffee, cookies','Squid','Heights'),('VS-01','Hatsune','Miku','VS','2007-08-31',158,'#33CCBA','Fujita Saki','A VIRTUAL SINGER with characteristic turquoise hair in long pig tails. Her cute, lively, cheerful voice lends itself to a variety of genres. She\'s the most popular of the VIRTUAL SINGER, with fans of all ages across the world.','','','','','','',''),('VS-02','Kagamine','Rin','VS','2007-12-27',152,'#FFCC11','Shimoda Asami','Kagamine Len\'s female counterpart, she keeps her blonde hair in a bob tied with a ribbon headband. Her charming voice perfectly complements her cute appearance and energetic personality.','','','','','','',''),('VS-03','Kagamine','Len','VS','2007-12-27',156,'#FFEE12','Shimoda Asami','Kagamine Rin\'s male counterpart, he keeps his short blonde hair tied back in a tiny ponytail. His boyish voice has a power and firmness to it, but can also excellently convey a wide range of emotions.','','','','','','',''),('VS-04','Megurine','Luka','VS','2009-01-30',162,'#FFBACC','Asakawa Yuu','A VIRTUAL SINGER with long pink hair. She has a calm disposition, and an elegant, soft voice, which can brim with passion when singing emotional songs. She\'s bilingual, singing both in Japanese and English.','','','','','','',''),('VS-05','','MEIKO','VS','2004-11-05',167,'#DE4444','Haigou Meiko','A VIRTUAL SINGER with chestnut hair in a short bob. Her signature outfit consists of a vibrant red crop top and a matching miniskirt. She\'s a well-balanced, exceptional singer with a warm, feminine voice.','','','','','','',''),('VS-06','','KAITO','VS','2006-02-17',175,'#3367CD','Fuuga Naoto','A VIRTUAL SINGER with somewhat unruly dark blue hair, wearing an oversized scarf in a matching color. His masculine voice sounds fresh and natural, with a wide vocal range.','','','','','','',''),('WXS-01','Tenma','Tsukasa','WXS','2003-05-17',172,'#FFBB00','Hirose Daisuke','Tsukasa has bucketloads of confidence and loves to be the center of attention, although he easily gets carried away. A theater show he saw as a kid impressed him so much that he made it his ultimate goal to become the greatest star in the world. He\'s a supportive brother to his frail sister, Saki.','Kamiyama High School','2-A','Musicals, making costumes','Striking cool poses, piano','Acqua pazza, ginger fried pork','Peppers','Bugs (especially centipedes and millipedes)'),('WXS-02','Otori','Emu','WXS','2004-09-09',152,'#FF66BC','Kino Hina','Emu is all happiness and innocence. She acts upon her ideas without a second thought, sometimes to the consternation of her friends. She\'s searching for like-minded performers to help her bring a deserted stage in Phoenix Wonderland back to its former glory.','Miyamasuzaka Girls Academy','1-B','Exploring the neighborhood','Acrobatics, foodie','Taiyaki','None!','Dusk'),('WXS-03','Kusanagi','Nene','WXS','2004-07-20',156,'#34DD9A','Machico','Nene joined the group at Rui\'s recommendation. She\'s sharp-tongued, but honey-voiced, with the singing ability of a budding musical star. For some reason, she refuses to show herself to Tsukasa and Emu, deploying Robo-Nene to perform shows in her place.','Kamiyama High School','1-B','Fighting games, musicals, movies','Singing, technology','Grapefruit','Mint flavor foods','Crowded places'),('WXS-04','Kamishiro','Rui','WXS','2003-06-24',180,'#BB88ED','Toki Shunichi','Nene\'s neighbor and childhood friend, Rui is an easy-going genius. He\'s meticulous about making every show the best it can be, making use of his flair for technology and inventiveness. He even builds robots to use on stage. His somewhat unique way of thinking often gets him labeled as a weirdo.','Kamiyama High School','2-B','Planning shows, balloon art','Inventing','Soda candy','Vegetables','Cleaning, menial tasks');
/*!40000 ALTER TABLE `singer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `song`
--

DROP TABLE IF EXISTS `song`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `song` (
  `song_name` varchar(50) NOT NULL,
  `unit_id` varchar(3) DEFAULT NULL,
  `song_length` time DEFAULT NULL,
  `release_date` date DEFAULT NULL,
  `composer_1` varchar(50) DEFAULT NULL,
  `composer_2` varchar(50) DEFAULT NULL,
  `lyricist_1` varchar(50) DEFAULT NULL,
  `lyricist_2` varchar(50) DEFAULT NULL,
  `arranger_1` varchar(50) DEFAULT NULL,
  `arranger_2` varchar(50) DEFAULT NULL,
  `bpm` int DEFAULT NULL,
  `category` varchar(10) DEFAULT NULL,
  `singer_1` varchar(20) DEFAULT NULL,
  `singer_2` varchar(20) DEFAULT NULL,
  `singer_3` varchar(20) DEFAULT NULL,
  `singer_4` varchar(20) DEFAULT NULL,
  `singer_5` varchar(20) DEFAULT NULL,
  `singer_6` varchar(20) DEFAULT NULL,
  `song_desc` tinytext,
  PRIMARY KEY (`song_name`),
  KEY `song` (`unit_id`),
  CONSTRAINT `song_ibfk_1` FOREIGN KEY (`unit_id`) REFERENCES `unit` (`unit_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `song`
--

LOCK TABLES `song` WRITE;
/*!40000 ALTER TABLE `song` DISABLE KEYS */;
INSERT INTO `song` VALUES ('BRING IT ON','VBS','00:03:55','2020-09-30','Giga','','Reol','','Giga','',160,'Cover','Kohane','An','Rin','Len','','','The Vivids debut cover. Kohane, An, Rin, and Len encourage rebellious teens to embrace their freedom.'),('Buriki no Dance','WXS','00:03:18','2020-09-30','Hinata Electric Works','','Hinata Electric Works','','Hinata Electric Works','',172,'Cover','Tsukasa','Rui','Len','','','','One of Wonderlands x Showtime\'s debut covers. This song could be a reference to how Hinduists rebelled against British rule in the late 1800\'s. In Tsukasa\'s, Rui\'s, and Len\'s case, they encourage people to go crazy and dance.'),('Charles','N25','00:03:46','2020-09-30','balloon','','balloon','','balloon','',145,'Cover','Ena','Mizuki','','','','','One of Nightcord at 25:00\'s debut covers. Ena and Mizuki experience issues in their relationship. After reminiscing about their past, they want to part ways.'),('Composing the Future','N25','00:03:49','2020-09-30','mafumafu','','mafumafu','','mafumafu','',194,'Commission','Kanade','Mafuyu','Ena','Mizuki','Miku','','Written for Nightcord at 25:00\'s main story. When played, it transports Kanade, Mafuyu, Ena, and Mizuki to the Empty SEKAI. It\'s based on the group\'s true feelings of being understood i.e. understanding why they wanted to disappear in the first place.'),('Doctor=Funk Beat','VBS','00:03:31','2020-09-30','nyanyannya','','nyanyannya','','','',150,'Cover','Akito','Toya','KAITO','','','','One of the BAD DOG\'s debut covers. Dr. Funk Beat(KAITO) and his assistants(Akito and Toya) drug their patients into believing their hallucinations grant them happiness.'),('Fragile','VBS','00:04:28','2020-09-30','nulut','','nulut','','nulut','',127,'Cover','Akito','Toya','','','','','One of the BAD DOG\'s debut covers. Akito and Toya escape their troubles by performing and being together.'),('Happy Synthesizer','MMJ','00:03:54','2020-09-30','EasyPop','','EasyPop','','EasyPop','',127,'Cover','Minori','Haruka','Airi','Shizuku','','','One of MORE MORE JUMP\'s debut covers. Minori, Haruka, Airi, and Shizuku sing an electronic tune to give their audience hope. '),('Hello / How Are You','N25','00:04:46','2020-09-30','nanou','','nanou','','nanou','',95,'Cover','Mafuyu','Ena','Miku','','','','One of Nightcord at 25:00\'s debut covers. Mafuyu, Ena, and Miku struggle with conveying their true feelings to their peers.'),('Hibana -Reloaded-','LN','00:03:25','2020-09-30','DECO*27','','DECO*27','','Rockwell','',200,'Cover','Ichika','Miku','','','','','One of Leo/need\'s debut covers. Ichika and Miku yearn for sparks in their relationship with the rest of Leo/need.'),('Jishou Mushoku','N25','00:03:37','2020-09-30','Sasanomaly','','Sasanomaly','','','',120,'Cover','Kanade','Mafuyu','Miku','','','','One of Nightcord at 25:00\'s debut covers. Kanade, Mafuyu, and Miku want to die, but their love and support for each other keep them going.'),('needLe','LN','00:03:49','2020-09-30','DECO*27','','DECO*27','','Rockwell','',190,'Commission','Ichika','Saki','Honami','Shiho','Miku','','Written for Leo/need\'s main story. When played, the song transports Ichika, Saki, Honami, and Shiho to the School SEKAI. It\'s based on the girls\' true feelings of reconciling their friendship.'),('Newly Edgy Idols','MMJ','00:03:51','2020-09-30','Mitchie M','','Mitchie M','','Mitchie M','',176,'Commission','Minori','Haruka','Airi','Shizuku','Miku','','Written for MORE MORE JUMP\'s main story. When played, it transports Minori, Haruka, Airi, and Shizuku to the Stage SEKAI. It\'s based on the girls\' true feelings of becoming idols.'),('Nostalogic','MMJ','00:03:59','2020-09-30','yuukiss','','yuukiss','','','',140,'Cover','Haruka','Shizuku','MEIKO','','','','One of MORE MORE JUMP\'s debut covers. Haruka, Shizuku and MEIKO are nostalgic over their previous careers as idols.'),('Patchwork Staccato','MMJ','00:04:04','2020-09-30','toa','','toa','','toa','',139,'Cover','Airi','Shizuku','Miku','','','','One of MORE MORE JUMP\'s debut covers. Airi, Shizuku, and Miku cut ties with their idol agencies due to the toxicity they faced. However, they miss being idols.'),('Ready Steady','VBS','00:03:30','2020-09-30','Giga','','q*Left','','Giga','',115,'Commission','Kohane','An','Akito','Toya','Miku','','Written for Vivid BAD SQUAD\'s main story. When played, it transports Kohane, An, Akito, and Toya to the Street SEKAI. It\'s based on the group\'s true feelings of surpassing the legendary live show, RAD WEEKEND.'),('ROKI','LN','00:03:47','2020-09-30','mikitoP','','mikitoP','','mikitoP','',150,'Cover','Ichika','Miku','','','','','One of Leo/need\'s debut covers. Miku and Ichika encourage people to quit worrying and rock out.'),('SEKAI','MIX','00:04:19','2020-09-30','Horie Shota (kemu)','','DECO*27','','Rockwell','',133,'Commission','Ichika','Tsukasa','Kanade','Miku','','','One of the game\'s theme songs. Miku, Ichika, Tsukasa, and Kanade sing about finding their true feelings in their SEKAIs.'),('Sweet Magic','WXS','00:03:34','2020-09-30','Junky','','Junky','','','',123,'Cover','Tsukasa','Emu','Nene','Rui','Rin','','One of Wonderlands x Showtime\'s debut covers. Emu, Nene, Rin, Tsukasa and Rui are pastry chefs that bewitch their audience with sweets and shows.'),('Teo','LN','00:03:29','2020-09-30','Omoi','','Sakurai','','Omoi','',185,'Cover','Ichika','Miku','','','','','One of Leo/need\'s debut covers. Miku and Ichika sing about holding onto hope, even in the darkest times (i.e. when Leo/need drifted apart).'),('The World Hasn\'t Even Started Yet','WXS','00:03:38','2020-09-30','PinocchioP','','PinocchioP','','PinocchioP','',138,'Commission','Tsukasa','Emu','Nene','Rui','Miku','','Written for Wonderland x Showtime\'s main story. When played, it transports Tsukasa, Emu, Nene, and Rui to the Wonderland SEKAI. It\'s based on the group\'s true feelings of bringing joy to people with their shows.'),('Wah Wah World','MIX','00:03:25','2020-09-30','Giga','Mitchie M','Mitchie M','','Giga','',160,'Commission','Minori','Kohane','Miku','','','','One of the game\'s theme songs. Miku, Minori, and Kohane sing about finding their true feelings in their SEKAIs.'),('Your Adventure Log Has Vanished!','WXS','00:03:43','2020-09-30','Jesus','','Jesus','',' WONDERFUL☆OPPORTUNITY!','',176,'Cover','Tsukasa','Emu','Rin','Len','','','One of Wonderlands x Showtime\'s debut covers. In an RPG game, Tsukasa and Len are the cautious heroes, while Emu and Rin are the hasty kings. They lose their save data after a few battles.');
/*!40000 ALTER TABLE `song` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `unit`
--

DROP TABLE IF EXISTS `unit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `unit` (
  `unit_id` varchar(3) NOT NULL,
  `unit_name` varchar(25) DEFAULT NULL,
  `unit_profile` tinytext,
  `hex_color` varchar(7) DEFAULT NULL,
  `member_1` varchar(50) DEFAULT NULL,
  `member_2` varchar(50) DEFAULT NULL,
  `member_3` varchar(50) DEFAULT NULL,
  `member_4` varchar(50) DEFAULT NULL,
  `member_5` varchar(50) DEFAULT NULL,
  `member_6` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`unit_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `unit`
--

LOCK TABLES `unit` WRITE;
/*!40000 ALTER TABLE `unit` DISABLE KEYS */;
INSERT INTO `unit` VALUES ('',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),('LN','Leo/need','A band formed by a group of childhood friends who have learned to overcome their differences.','#4455DD','Hoshino Ichika','Tenma Saki','Mochizuki Honami','Hinomori Shiho','',''),('MIX','Other','Singers from different units perform a song together.','#808080','','','','','',''),('MMJ','MORE MORE JUMP!','An unlikely idol group formed by one girl who dreams of debuting, and three who quit being idols.','#6CCB20','Hanasato Minori','Kiritani Haruka','Momoi Airi','Hinomori Shizuku','',''),('N25','Nightcord at 25:00','An underground music circle that gets active at 1:00 AM (25:00), and whose identities are shrouded in mystery.','#884499','Yoisaki Kanade','Asahina Mafuyu','Shinonome Ena','Akiyama Mizuki','',''),('VBS','Vivid BAD SQUAD','A top-level street music unit that formed to surpass the legends.','#EE1166','Azusawa Kohane','Shiraishi An','Shinonome Akito','Aoyagi Toya','',''),('VS','VIRTUAL SINGER','Singers through whom the creators of the world express their songs and feelings.','#00cdba','Hatsune Miku','Kagamine Rin','Kagamine Len','Megurine Luka','MEIKO','KAITO'),('WXS','Wonderlands x Showtime','An eccentric musical show unit, proclaiming each day as \'wonderhoi\' and rushing out to meet it head on.','#FF9900','Tenma Tsukasa','Otori Emu','Kusanagi Nene','Kamishiro Rui','','');
/*!40000 ALTER TABLE `unit` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-14 18:35:22
