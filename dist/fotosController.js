/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/js/controllers/fotos-controller.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/js/controllers/fotos-controller.js":
/*!***************************************************!*\
  !*** ./public/js/controllers/fotos-controller.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("angular.module('alurapic').controller('FotosController', function($scope, recursoFoto, ngDialog){\r\n\t\r\n\t$scope.fotos = [];\r\n\t$scope.filtro = '';\r\n\t$scope.mensagem = true;\r\n\r\n\trecursoFoto.query(function(fotos){\r\n\t\t$scope.fotos = fotos;\r\n\t}, function(erro) {\r\n\t\tconsole.log(erro);\r\n\t});\r\n\t\r\n\t/*$http.get('v1/fotos')\r\n\t.success(function(fotos){\r\n\t\t$scope.fotos = fotos;\r\n\t})\r\n\t.error(function(erro){\r\n\t\tconsole.log(erro);\r\n\t});*/\r\n\r\n\t$scope.remover = function(foto){\r\n\t\trecursoFoto.delete({fotoId:foto._id}, function(fotos){\r\n\t\t\tvar indiceFoto = $scope.fotos.indexOf(foto);\r\n\t\t\t$scope.fotos.splice(indiceFoto, 1);\r\n\t\t\t$scope.mensagem = 'Foto ' + foto.titulo + ' foi removida com sucesso';\r\n\t\t}, function(erro){\r\n\t\t\tconsole.log(erro);\r\n\t\t\t$scope.mensagem = 'Nã foi possível remover a foto' + foto.titulo;\r\n\t\t});\r\n  };\r\n  \r\n  $scope.openModal = function() {\r\n    ngDialog.open();\r\n  };\r\n\r\n\t/*var promise = $http.get('v1/fotos');\r\n\tpromise.then(function(retorno){\r\n\t\t$scope.fotos = retorno.data;\r\n\t}).catch(function(error) {\r\n\t\tconsole.log(error);\r\n\t});*/\r\n});\n\n//# sourceURL=webpack:///./public/js/controllers/fotos-controller.js?");

/***/ })

/******/ });