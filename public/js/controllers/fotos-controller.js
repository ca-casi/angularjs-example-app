angular.module('alurapic').controller('FotosController', function($scope, recursoFoto){
	
	$scope.fotos = [];
	$scope.filtro = '';
	$scope.mensagem = true;

	recursoFoto.query(function(fotos){
		$scope.fotos = fotos;
	}, function(erro) {
		console.log(erro);
	});
	
	/*$http.get('v1/fotos')
	.success(function(fotos){
		$scope.fotos = fotos;
	})
	.error(function(erro){
		console.log(erro);
	});*/

	$scope.remover = function(foto){
		recursoFoto.delete({fotoId:foto._id}, function(fotos){
			var indiceFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indiceFoto, 1);
			$scope.mensagem = 'Foto ' + foto.titulo + ' foi removida com sucesso';
		}, function(erro){
			console.log(erro);
			$scope.mensagem = 'Nã foi possível remover a foto' + foto.titulo;
		});
	};

	/*var promise = $http.get('v1/fotos');
	promise.then(function(retorno){
		$scope.fotos = retorno.data;
	}).catch(function(error) {
		console.log(error);
	});*/
});