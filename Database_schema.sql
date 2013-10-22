-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 22, 2013 at 02:00 PM
-- Server version: 5.5.31
-- PHP Version: 5.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `skipatrol`
--
CREATE DATABASE IF NOT EXISTS `skipatrol` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `skipatrol`;

-- --------------------------------------------------------

--
-- Table structure for table `Accident`
--

CREATE TABLE IF NOT EXISTS `Accident` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Timestamp` date NOT NULL,
  `reportNum` varchar(200) NOT NULL,
  `CSPSNum1` varchar(20) NOT NULL,
  `CSPSNum2` varchar(20) DEFAULT NULL,
  `CSPSNum3` varchar(20) DEFAULT NULL,
  `DOB` varchar(75) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `gender` varchar(200) DEFAULT NULL,
  `complaints` varchar(255) DEFAULT NULL,
  `treatmentProtocol` varchar(255) DEFAULT NULL,
  `incidentLocation` int(11) DEFAULT NULL,
  `runClassification` int(11) DEFAULT NULL,
  `activity` int(11) DEFAULT NULL,
  `involvement` int(11) DEFAULT NULL,
  `weather` int(11) DEFAULT NULL,
  `light` int(11) DEFAULT NULL,
  `temp` int(11) DEFAULT NULL,
  `snow` int(11) DEFAULT NULL,
  `surface` int(11) DEFAULT NULL,
  `equipment` int(11) DEFAULT NULL,
  `helmet` int(11) DEFAULT NULL,
  `ability` int(11) DEFAULT NULL,
  `firstAid` int(11) DEFAULT NULL,
  `fromBase` int(11) DEFAULT NULL,
  `collision` int(11) DEFAULT NULL,
  `nonCollision` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`,`reportNum`),
  KEY `Timestamp` (`Timestamp`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `Accident`
--

INSERT INTO `Accident` (`id`, `Timestamp`, `reportNum`, `CSPSNum1`, `CSPSNum2`, `CSPSNum3`, `DOB`, `age`, `gender`, `complaints`, `treatmentProtocol`, `incidentLocation`, `runClassification`, `activity`, `involvement`, `weather`, `light`, `temp`, `snow`, `surface`, `equipment`, `helmet`, `ability`, `firstAid`, `fromBase`, `collision`, `nonCollision`) VALUES
(2, '2013-07-25', '145623', '01049887', '01039884', '01038293', '1993-02-04', 20, 'Male', 'Shoulder-R', 'Dislocation', 1, 2, 1, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1),
(3, '2013-06-19', '87482', '02031111', '02031112', '02031113', '1991-03-06', 22, 'Male', 'Thumb-R', 'Sprain', 1, 3, 2, 3, 2, 1, 3, 2, 3, 1, 1, 2, 3, 1, 2, 3);

-- --------------------------------------------------------

--
-- Table structure for table `FirstAid`
--

CREATE TABLE IF NOT EXISTS `FirstAid` (
  `Timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `SID` int(11) DEFAULT NULL,
  `FAID` int(11) NOT NULL,
  `prioritySurvey` varchar(10) DEFAULT NULL,
  `secondarySurvey` varchar(10) DEFAULT NULL,
  `vitalSigns` varchar(10) DEFAULT NULL,
  `cervicalCollar` varchar(10) DEFAULT NULL,
  `spinal` varchar(10) DEFAULT NULL,
  `pelvis` varchar(10) DEFAULT NULL,
  `femur` varchar(10) DEFAULT NULL,
  `clavicle` varchar(10) DEFAULT NULL,
  `scapula` varchar(10) DEFAULT NULL,
  `lowerArm` varchar(10) DEFAULT NULL,
  `humerus` varchar(10) DEFAULT NULL,
  `bentKnee` varchar(10) DEFAULT NULL,
  `lowerLeg` varchar(10) DEFAULT NULL,
  `shoulderDislocation` varchar(10) DEFAULT NULL,
  `smallArmSling` varchar(10) DEFAULT NULL,
  `largeArmSling` varchar(10) DEFAULT NULL,
  `bodySling` varchar(10) DEFAULT NULL,
  `head` varchar(10) DEFAULT NULL,
  `shoulder` varchar(10) DEFAULT NULL,
  `chestBack` varchar(10) DEFAULT NULL,
  `elbow` varchar(10) DEFAULT NULL,
  `openHandFoot` varchar(10) DEFAULT NULL,
  `pressureHand` varchar(10) DEFAULT NULL,
  `eyeCheekEar` varchar(10) DEFAULT NULL,
  `pressure` varchar(10) DEFAULT NULL,
  `openFracture` varchar(10) DEFAULT NULL,
  `stirrup` varchar(10) DEFAULT NULL,
  `modifiedStirrup` varchar(10) DEFAULT NULL,
  `knee` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`FAID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `FirstAid`
--

INSERT INTO `FirstAid` (`Timestamp`, `SID`, `FAID`, `prioritySurvey`, `secondarySurvey`, `vitalSigns`, `cervicalCollar`, `spinal`, `pelvis`, `femur`, `clavicle`, `scapula`, `lowerArm`, `humerus`, `bentKnee`, `lowerLeg`, `shoulderDislocation`, `smallArmSling`, `largeArmSling`, `bodySling`, `head`, `shoulder`, `chestBack`, `elbow`, `openHandFoot`, `pressureHand`, `eyeCheekEar`, `pressure`, `openFracture`, `stirrup`, `modifiedStirrup`, `knee`) VALUES
('2013-07-25 15:55:20', 12321, 1, '77777', '77777', '77777', '77777', '77777', '77777', '77777', '77777', '77777', '77777', '77777', '77777', '77777', '77777', '77777', '77777', '77777', '77777', '77777', '77777', '77777', '77777', '77777', '77777', '77777', '77777', '77777', '77777', '77777');

-- --------------------------------------------------------

--
-- Table structure for table `Instructor`
--

CREATE TABLE IF NOT EXISTS `Instructor` (
  `name` varchar(200) DEFAULT NULL,
  `instID` varchar(200) NOT NULL DEFAULT '',
  `email` varchar(200) DEFAULT NULL,
  `phoneNum` varchar(200) DEFAULT NULL,
  `password` varchar(41) DEFAULT NULL,
  PRIMARY KEY (`instID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Instructor`
--

INSERT INTO `Instructor` (`name`, `instID`, `email`, `phoneNum`, `password`) VALUES
('James Bond', '007', 'James@tomorrowNeverDies.com', '10070070070', 'BondJamesBond'),
('James', '12345', 'james@example.ca', '123-4567', '1234'),
('James', '123456', 'james@example.ca', '123-4567', '1234');

-- --------------------------------------------------------

--
-- Table structure for table `OnSnow`
--

CREATE TABLE IF NOT EXISTS `OnSnow` (
  `Timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `SID` int(11) DEFAULT NULL,
  `snowID` int(11) NOT NULL DEFAULT '0',
  `instID` int(11) DEFAULT NULL,
  `travelTurnClimbStop` tinyint(1) DEFAULT NULL,
  `stableBalancedPosition` tinyint(1) DEFAULT NULL,
  `controlSpeedDirection` tinyint(1) DEFAULT NULL,
  `sideslipFallingLeaf` tinyint(1) DEFAULT NULL,
  `traversing` tinyint(1) DEFAULT NULL,
  `edgingPivotPressure` tinyint(1) DEFAULT NULL,
  `rhythmCoordination` tinyint(1) DEFAULT NULL,
  `46TurnsModerateTerrain` tinyint(1) DEFAULT NULL,
  `46TurnsDifficultTerrain` tinyint(1) DEFAULT NULL,
  `carryingEquipment` tinyint(1) DEFAULT NULL,
  `fitnessFlexibilityStrength` tinyint(1) DEFAULT NULL,
  `appliesResponsibilityCode` tinyint(1) DEFAULT NULL,
  `safeInControl` tinyint(1) DEFAULT NULL,
  `fullRun` tinyint(1) DEFAULT NULL,
  `tobogganCheck` tinyint(1) DEFAULT NULL,
  `packCheckUniformCheck` tinyint(1) DEFAULT NULL,
  `tobogganSetUpOp` tinyint(1) DEFAULT NULL,
  `tombogganTransportLifts` tinyint(1) DEFAULT NULL,
  `considerApproach` tinyint(1) DEFAULT NULL,
  `Communication_Incid` tinyint(1) DEFAULT NULL,
  `TeamRoleCompSafety` tinyint(1) DEFAULT NULL,
  `MarkIncident` tinyint(1) DEFAULT NULL,
  `locationkeyEquip` tinyint(1) DEFAULT NULL,
  `secureTobbgEquip` tinyint(1) DEFAULT NULL,
  `LocatDirMed` tinyint(1) DEFAULT NULL,
  `followupSiteClean` tinyint(1) DEFAULT NULL,
  `TansportBackEquip` tinyint(1) DEFAULT NULL,
  `LoadPatient` tinyint(1) DEFAULT NULL,
  `patientUpbase` tinyint(1) DEFAULT NULL,
  `communicationWhistle_Empty` tinyint(1) DEFAULT NULL,
  `checkTraffic_Empty` tinyint(1) DEFAULT NULL,
  `routeFinding_Empty` tinyint(1) DEFAULT NULL,
  `positionHandles_Empty` tinyint(1) DEFAULT NULL,
  `stableBalanced_Empty` tinyint(1) DEFAULT NULL,
  `useBrakeRunners_Empty` tinyint(1) DEFAULT NULL,
  `sideslipFalllingLeaf_Empty` tinyint(1) DEFAULT NULL,
  `snowplow_Empty` tinyint(1) DEFAULT NULL,
  `traversing_Empty` tinyint(1) DEFAULT NULL,
  `directionChange_Empty` tinyint(1) DEFAULT NULL,
  `controlledSmoothSafeDecent_Empty` tinyint(1) DEFAULT NULL,
  `shortRadiusTurn_Empty` tinyint(1) DEFAULT NULL,
  `useFallLine_Empty` tinyint(1) DEFAULT NULL,
  `compensating_Empty` tinyint(1) DEFAULT NULL,
  `stoppingUpOutAccident_Empty` tinyint(1) DEFAULT NULL,
  `comm2patien1_Loaded` tinyint(1) DEFAULT NULL,
  `comm2patien2_Loaded` tinyint(1) DEFAULT NULL,
  `traffic1_Loaded` tinyint(1) DEFAULT NULL,
  `traffic2_Loaded` tinyint(1) DEFAULT NULL,
  `position1_Loaded` tinyint(1) DEFAULT NULL,
  `position2_Loaded` tinyint(1) DEFAULT NULL,
  `routefind1_Loaded` tinyint(1) DEFAULT NULL,
  `routefind2_Loaded` tinyint(1) DEFAULT NULL,
  `stableBalance1_Loaded` tinyint(1) DEFAULT NULL,
  `stableBalance2_Loaded` tinyint(1) DEFAULT NULL,
  `sideSlip_fallLeaf1_Loaded` tinyint(1) DEFAULT NULL,
  `sideSlip_fallLeaf2_Loaded` tinyint(1) DEFAULT NULL,
  `snowplow1_Loaded` tinyint(1) DEFAULT NULL,
  `snowplow2_Loaded` tinyint(1) DEFAULT NULL,
  `brakeRunners1_Loaded` tinyint(1) DEFAULT NULL,
  `brakeRunners2_Loaded` tinyint(1) DEFAULT NULL,
  `fallLine1_Loaded` tinyint(1) DEFAULT NULL,
  `fallLine2_Loaded` tinyint(1) DEFAULT NULL,
  `Transitions1_Loaded` tinyint(1) DEFAULT NULL,
  `Transitions2_Loaded` tinyint(1) DEFAULT NULL,
  `controlSmoothDecent1_Loaded` tinyint(1) DEFAULT NULL,
  `controlSmoothDecent2_Loaded` tinyint(1) DEFAULT NULL,
  `Direction1_Loaded` tinyint(1) DEFAULT NULL,
  `Direction2_Loaded` tinyint(1) DEFAULT NULL,
  `compensating1_Loaded` tinyint(1) DEFAULT NULL,
  `compensating2_Loaded` tinyint(1) DEFAULT NULL,
  `ropeSecured2_Loaded` tinyint(1) DEFAULT NULL,
  `changeEfficientSafe2_Loaded` tinyint(1) DEFAULT NULL,
  `commWithPatroller2_Loaded` tinyint(1) DEFAULT NULL,
  `dragBrakePosition2_Loaded` tinyint(1) DEFAULT NULL,
  `FrontCharge2_Loaded` tinyint(1) DEFAULT NULL,
  `notes` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`snowID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `OnSnow`
--

INSERT INTO `OnSnow` (`Timestamp`, `SID`, `snowID`, `instID`, `travelTurnClimbStop`, `stableBalancedPosition`, `controlSpeedDirection`, `sideslipFallingLeaf`, `traversing`, `edgingPivotPressure`, `rhythmCoordination`, `46TurnsModerateTerrain`, `46TurnsDifficultTerrain`, `carryingEquipment`, `fitnessFlexibilityStrength`, `appliesResponsibilityCode`, `safeInControl`, `fullRun`, `tobogganCheck`, `packCheckUniformCheck`, `tobogganSetUpOp`, `tombogganTransportLifts`, `considerApproach`, `Communication_Incid`, `TeamRoleCompSafety`, `MarkIncident`, `locationkeyEquip`, `secureTobbgEquip`, `LocatDirMed`, `followupSiteClean`, `TansportBackEquip`, `LoadPatient`, `patientUpbase`, `communicationWhistle_Empty`, `checkTraffic_Empty`, `routeFinding_Empty`, `positionHandles_Empty`, `stableBalanced_Empty`, `useBrakeRunners_Empty`, `sideslipFalllingLeaf_Empty`, `snowplow_Empty`, `traversing_Empty`, `directionChange_Empty`, `controlledSmoothSafeDecent_Empty`, `shortRadiusTurn_Empty`, `useFallLine_Empty`, `compensating_Empty`, `stoppingUpOutAccident_Empty`, `comm2patien1_Loaded`, `comm2patien2_Loaded`, `traffic1_Loaded`, `traffic2_Loaded`, `position1_Loaded`, `position2_Loaded`, `routefind1_Loaded`, `routefind2_Loaded`, `stableBalance1_Loaded`, `stableBalance2_Loaded`, `sideSlip_fallLeaf1_Loaded`, `sideSlip_fallLeaf2_Loaded`, `snowplow1_Loaded`, `snowplow2_Loaded`, `brakeRunners1_Loaded`, `brakeRunners2_Loaded`, `fallLine1_Loaded`, `fallLine2_Loaded`, `Transitions1_Loaded`, `Transitions2_Loaded`, `controlSmoothDecent1_Loaded`, `controlSmoothDecent2_Loaded`, `Direction1_Loaded`, `Direction2_Loaded`, `compensating1_Loaded`, `compensating2_Loaded`, `ropeSecured2_Loaded`, `changeEfficientSafe2_Loaded`, `commWithPatroller2_Loaded`, `dragBrakePosition2_Loaded`, `FrontCharge2_Loaded`, `notes`) VALUES
('2013-07-25 15:57:36', 12321, 1, 7, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, '1');

-- --------------------------------------------------------

--
-- Table structure for table `Patroller`
--

CREATE TABLE IF NOT EXISTS `Patroller` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(200) DEFAULT NULL,
  `InstID` varchar(255) NOT NULL,
  `Email` varchar(75) DEFAULT NULL,
  `PhoneNum` varchar(15) DEFAULT NULL,
  `CSPSNum` varchar(20) DEFAULT NULL,
  `password` varchar(41) DEFAULT NULL,
  `login` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`,`InstID`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=20 ;

--
-- Dumping data for table `Patroller`
--

INSERT INTO `Patroller` (`id`, `Name`, `InstID`, `Email`, `PhoneNum`, `CSPSNum`, `password`, `login`) VALUES
(8, 'Emily', '5555', 'c', '1239876', '134', 'grantt', 1),
(13, 'c236666', 'b', 'd23', 'e23', 'a23', '123', NULL),
(16, 'c', 'b', 'd', 'e', 'a', 'f', NULL),
(17, '3', '2', '4', '5', '1', '6', NULL),
(18, '33', '22', '44', '55', '11', '66', NULL),
(19, 'dfg', 'dfg', 'dfg', 'fdg333333', 'fdg', 'dfg', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE IF NOT EXISTS `sessions` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `userid` bigint(20) NOT NULL,
  `session` varchar(255) NOT NULL,
  `useragent` varchar(255) NOT NULL,
  `ip` varchar(255) NOT NULL,
  `created` int(11) NOT NULL,
  `lastactive` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=25 ;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `userid`, `session`, `useragent`, `ip`, `created`, `lastactive`) VALUES
(23, 8, '526435092cf7a', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1672.2 Safari/537.36', '127.0.0.1', 1382298889, 1382302480),
(24, 8, '5264437729523', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1672.2 Safari/537.36', '127.0.0.1', 1382302583, 1382382080);

-- --------------------------------------------------------

--
-- Table structure for table `Student`
--

CREATE TABLE IF NOT EXISTS `Student` (
  `name` varchar(200) DEFAULT NULL,
  `SID` int(11) NOT NULL,
  `FID` int(11) DEFAULT NULL,
  `FID2` int(11) DEFAULT NULL,
  `FID3` int(11) DEFAULT NULL,
  `FAID1` int(11) DEFAULT NULL,
  `FAID2` int(11) DEFAULT NULL,
  `FAID3` int(11) DEFAULT NULL,
  PRIMARY KEY (`SID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Student`
--

INSERT INTO `Student` (`name`, `SID`, `FID`, `FID2`, `FID3`, `FAID1`, `FAID2`, `FAID3`) VALUES
('Robert Bobby', 12321, 1, NULL, NULL, 1, NULL, NULL);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
