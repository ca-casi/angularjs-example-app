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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/js/controllers/foto-controller.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/js/controllers/foto-controller.js":
/*!**************************************************!*\
  !*** ./public/js/controllers/foto-controller.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("angular.module('alurapic').controller('FotoController', function($scope, cadastraFotos, $routeParams, recursoFoto){\r\n\t\r\n\t$scope.foto = {};\r\n\t$scope.mensagem = '';\r\n\t\r\n\t//Para testar se o formulário é válidao ou inválido.\r\n\t//$scope.vendas.$valid e $scope.vendas.$invalid, respectivamente.\r\n\r\n\tif($routeParams.fotoId) {\r\n\t\t/*$http.get('v1/fotos/' + $routeParams.fotoId)\r\n\t\t.success(function(foto){\r\n\t\t\t$scope.foto = foto;\r\n\t\t})\r\n\t\t.error(function(erro){\r\n\t\t\tconsole.log(erro);\r\n\t\t\tconsole.log('Não foi possível obter a foto');\r\n\t\t});*/\r\n\r\n\t\trecursoFoto.get({ fotoId : $routeParams.fotoId }, function(foto){\r\n\t\t\t$scope.foto = foto;\r\n\t\t}, function(erro){\r\n\t\t\tconsole.log(erro);\r\n\t\t\tconsole.log('Não foi possível obter a foto');\r\n\t\t});\r\n\t}\r\n\r\n\t$scope.submeter = function () {\r\n\t\tif($scope.formulario.$valid) {\r\n\t\t\t\r\n\t\t\tcadastraFotos.cadastrar($scope.foto)\r\n\t\t\t.then(function(dados){\r\n\t\t\t\t$scope.mensagem = dados.mensagem;\r\n\t\t\t\tif(dados.inclusao) {\r\n\t\t\t\t\t$scope.foto = {};\r\n\t\t\t\t\t$scope.formulario.$setPristine();\r\n\t\t\t\t\t//$scope.focused = true;\r\n\t\t\t\t\t\r\n\t\t\t\t}\r\n\t\t\t})\r\n\t\t\t.catch(function(erro){\r\n\t\t\t\t$scope.mensagem = erro.mensagem;\r\n\t\t\t}) \r\n\r\n\r\n\t\t\t/*if($scope.foto._id) {\r\n\r\n\t\t\t\t//v2\r\n\t\t\t\t// recursoFoto.update({fotoId: $scope.foto._id}, $scope.foto, function(){\r\n\t\t\t\t// \t$scope.mensagem = 'Foto' + $scope.foto.titulo + 'foi removida com sucesso';\r\n\t\t\t\t// }, function(erro){\r\n\t\t\t\t// \tconsole.log(erro);\r\n\t\t\t\t// \t$scope.mensagem = 'Não foi possível remover a foto' + $scope.foto.titulo;\r\n\t\t\t\t// });\r\n\r\n\t\t\t\t//v1\r\n\t\t\t\t// $http.put('v1/fotos/' + $scope.foto._id, $scope.foto)\r\n\t\t\t\t// .success(function(fotos){\r\n\t\t\t\t// \t$scope.mensagem = 'Foto' + $scope.foto.titulo + 'foi removida com sucesso';\r\n\t\t\t\t// })\r\n\t\t\t\t// .error(function(erro){\r\n\t\t\t\t// \tconsole.log(erro);\r\n\t\t\t\t// \t$scope.mensagem = 'Não foi possível remover a foto' + $scope.foto.titulo;\r\n\t\t\t\t// });\r\n\r\n\t\t\t} else {\r\n\r\n\t\t\t\t//v2\r\n\t\t\t\t// recursoFoto.save({fotoId: $scope.foto._id}, function() {\r\n\t\t\t\t// \t$scope.foto = {};\r\n\t\t\t\t// \t$scope.formulario.$setPristine();\r\n\t\t\t\t// \t$scope.mensagem = 'Foto cadastrada com sucesso!';\r\n\t\t\t\t// }, function(erro){\r\n\t\t\t\t// \t$scope.mensagem = 'Não foi possível cadastrar a foto';\r\n\t\t\t\t// \tconsole.log(error);\r\n\t\t\t\t// });\r\n\t\t\t\t\r\n\t\t\t\t//v1\r\n\t\t\t\t// $http.post('v1/fotos', $scope.foto)\r\n\t\t\t\t// .success(function(){\r\n\t\t\t\t// \t$scope.foto = {};\r\n\t\t\t\t// \t$scope.formulario.$setPristine();\r\n\t\t\t\t// \t$scope.mensagem = 'Foto cadastrada com sucesso!';\r\n\t\t\t\t// })\r\n\t\t\t\t// .error(function(error){\r\n\t\t\t\t// \t$scope.mensagem = 'Não foi possível cadastrar a foto';\r\n\t\t\t\t// \tconsole.log(error);\r\n\t\t\t\t// });\r\n\t\t\t}*/\r\n\t\t}\r\n\r\n\t}\r\n\r\n});\n\n//# sourceURL=webpack:///./public/js/controllers/foto-controller.js?");

/***/ })

/******/ });