-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-05-2014 a las 19:38:26
-- Versión del servidor: 5.5.27
-- Versión de PHP: 5.4.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;    
                            
--
-- Base de datos: `db_cecyted`
--
-- -------------------------------------------------
--
-- Estructura de tabla para la tabla `elementos`
--

--
-- Estructura de tabla para la tabla `index`
--
DROP TABLE `index`;

CREATE TABLE IF NOT EXISTS `index` (
  `idElemento` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `tipo` varchar(11) DEFAULT NULL,
  `dirImg` varchar(11) DEFAULT NULL,
  `info` varchar(200) DEFAULT NULL,
  `activo` int(1) DEFAULT '1',
  PRIMARY KEY (`idElemento`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=200 ;

--
-- Volcado de datos para la tabla `index`
--

INSERT INTO `index` (`idElemento`, `nombre`, `tipo`,`dirImg`,`info`, `activo`) VALUES
(1, NULL, NULL, NULL, NULL),
(2, NULL, NULL, NULL, NULL),
(3, NULL, NULL, NULL, NULL),
(4, NULL, NULL, NULL, NULL),
(5, NULL, NULL, NULL, NULL),
(6, NULL, NULL, NULL, NULL),
(7, NULL, NULL, NULL, NULL);

--
-- Estructura de tabla para la tabla `eventos`
--
DROP TABLE `eventos`;

CREATE TABLE IF NOT EXISTS `eventos` (
  `idEvento` int(11) NOT NULL AUTO_INCREMENT,
  `titulo_evento` varchar(50) DEFAULT NULL,
  `lugar` varchar(30) DEFAULT NULL,
  `img_evento` varchar(11) DEFAULT NULL,
  `latitud` int(11) DEFAULT NULL,
  `longitud` int(11) DEFAULT NULL,
  `descripcion_evento` int(11) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `activo` int(1) DEFAULT '1',
  PRIMARY KEY (`idElemento`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=200 ;

--
-- Volcado de datos para la tabla `eventos`
--

INSERT INTO `eventos` (`idEvento`, `titulo_evento`, `lugar`, `img_evento`, `latitud`,`longitud`, `descripcion_evento`,`fecha`, `activo`) VALUES
(1, 'Entrega de becas', 'Teatro Ricardo Castro', 'img/1.jpg', 92.677111, -122.03, 'Entrega de becas para alumnos destacados en distintas materias', 'Junio', 1),
(2, NULL, NULL, NULL, NULL,NULL, NULL, NULL, NULL),
(3, NULL, NULL, NULL, NULL,NULL, NULL, NULL, NULL),
(2, NULL, NULL, NULL, NULL,NULL, NULL, NULL, NULL),
(4, NULL, NULL, NULL, NULL,NULL, NULL, NULL, NULL),
(5, NULL, NULL, NULL, NULL,NULL, NULL, NULL, NULL),
(6, NULL, NULL, NULL, NULL,NULL, NULL, NULL, NULL),
(7, NULL, NULL, NULL, NULL,NULL, NULL, NULL, NULL),
(8, NULL, NULL, NULL, NULL,NULL, NULL, NULL, NULL),
(9, NULL, NULL, NULL, NULL,NULL, NULL, NULL, NULL),
(10, NULL, NULL, NULL, NULL,NULL, NULL, NULL, NULL),
(11, NULL, NULL, NULL, NULL,NULL, NULL, NULL, NULL);

--
-- Estructura de tabla para la tabla `noticias` nomenclatura 
--
DROP TABLE `noticias`;

CREATE TABLE IF NOT EXISTS `noticias` (
  `idNoticia` int(11) NOT NULL AUTO_INCREMENT,
  `titulo_noticia` varchar(100) DEFAULT NULL,
  `nota_noticia` varchar(200) DEFAULT NULL,
  `fecha_noticia` date DEFAULT NULL,
  `img_noticia` varchar(11) DEFAULT NULL,
  `activo` int(1) DEFAULT '1',
  PRIMARY KEY (`idElemento`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=200 ;

--
-- Volcado de datos para la tabla `noticias`
--

INSERT INTO `noticias` (`idNoticia`, `titulo_noticia`, `nota_noticia`,`fecha_noticia`,`img_noticia`, `activo`) VALUES
(1, 'Bienvenida de los alumnos', 'Los alumnos del primer año fueron recibidos en el Hotel Gobernador con un desayuno para premiarlos', 'img/noticias/2.jpg', 1),
(2, NULL, NULL, NULL, NULL),
(3, NULL, NULL, NULL, NULL),
(4, NULL, NULL, NULL, NULL),
(5, NULL, NULL, NULL, NULL),
(6, NULL, NULL, NULL, NULL),
(7, NULL, NULL, NULL, NULL);

--
-- Estructura de tabla para la tabla `planteles` nomenclatura PltNombrecampo
--
DROP TABLE `planteles`;

CREATE TABLE IF NOT EXISTS `planteles` (
  `pltId` int(11) NOT NULL AUTO_INCREMENT,
  `pltNombre` varchar(100) DEFAULT NULL,
  `pltModalidad` varchar(11) DEFAULT NULL,
  `pltServicios` varchar(11) DEFAULT NULL,
  `pltCarreras` varchar(11) DEFAULT NULL,
  `pltMunicipio` varchar(11) DEFAULT NULL,
  `pltLocalidad` varchar(11) DEFAULT NULL,
  `pltDirector` varchar(11) DEFAULT NULL,
  `pltExescolar` varchar(11) DEFAULT NULL,
  `pltMatricula` int(11) DEFAULT NULL,

  PRIMARY KEY (`pltId`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=200 ;

--
-- Volcado de datos para la tabla `planteles`
--

INSERT INTO `planteles` (`pltId`, `pltNombre`, `pltModalidad`,`pltServicios`,`pltCarreras`,`pltMunicipio`,`pltLocalidad`,`pltDirector`,`pltExescolar`,`pltMatricula`) VALUES
(1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(5, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(6, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(7, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

--
-- Estructura de tabla para la tabla `directorio
--
DROP TABLE `directorio`;

CREATE TABLE IF NOT EXISTS `directorio` (
  `idDir` int(11) NOT NULL AUTO_INCREMENT,
  `nombreDir` varchar(100) DEFAULT NULL,
  `puestoDir` varchar(11) DEFAULT NULL,
  `telDir` varchar(11) DEFAULT NULL,
  `mailDir` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`idDir`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=200 ;

--
-- Volcado de datos para la tabla `directorio`
--

INSERT INTO `directorio` (`idDir`, `nombreDir`, `puestoDir`,`telDir`,`mailDir`) VALUES
(1, NULL, NULL, NULL, NULL),
(2, NULL, NULL, NULL, NULL),
(3, NULL, NULL, NULL, NULL),
(4, NULL, NULL, NULL, NULL),
(5, NULL, NULL, NULL, NULL),
(6, NULL, NULL, NULL, NULL),
(7, NULL, NULL, NULL, NULL);

DROP TABLE `galeria`;

CREATE TABLE IF NOT EXISTS `galeria` (
  `idGal` int(11) NOT NULL AUTO_INCREMENT,
  `nombreGal` varchar(70) DEFAULT NULL,
  `categoriaGal` varchar(20) DEFAULT NULL,
  `imgGal` varchar(11) DEFAULT NULL,
  
  PRIMARY KEY (`idGal`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=200 ;

--
-- Volcado de datos para la tabla `directorio`
--

INSERT INTO `galeria` (`idGal`, `nombreGal`, `imgGal`) VALUES
(1, NULL,  NULL),
(2, NULL,  NULL),
(3, NULL,  NULL),
(4, NULL,  NULL),
(5, NULL,  NULL),
(6, NULL,  NULL),
(7, NULL,  NULL);





/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;