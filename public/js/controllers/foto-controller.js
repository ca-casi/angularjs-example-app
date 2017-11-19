angular.module('alurapic').controller('FotoController', function($scope, $routeParams, recursoFoto){
	
	$scope.foto = {};
	$scope.mensagem = '';
	
	//Para testar se o formulário é válidao ou inválido.
	//$scope.vendas.$valid e $scope.vendas.$invalid, respectivamente.

	if($routeParams.fotoId) {
		/*$http.get('v1/fotos/' + $routeParams.fotoId)
		.success(function(foto){
			$scope.foto = foto;
		})
		.error(function(erro){
			console.log(erro);
			console.log('Não foi possível obter a foto');
		});*/

		recursoFoto.get({ fotoId : $routeParams.fotoId }, function(foto){
			$scope.foto = foto;
		}, function(erro){
			console.log(erro);
			console.log('Não foi possível obter a foto');
		});
	}

	$scope.submeter = function () {
		if($scope.formulario.$valid) {
			if($scope.foto._id) {

				recursoFoto.update({fotoId: $scope.foto._id}, $scope.foto, function(){
					$scope.mensagem = 'Foto' + $scope.foto.titulo + 'foi removida com sucesso';
				}, function(erro){
					console.log(erro);
					$scope.mensagem = 'Não foi possível remover a foto' + $scope.foto.titulo;
				});

				/*$http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
				.success(function(fotos){
					$scope.mensagem = 'Foto' + $scope.foto.titulo + 'foi removida com sucesso';
				})
				.error(function(erro){
					console.log(erro);
					$scope.mensagem = 'Não foi possível remover a foto' + $scope.foto.titulo;
				});*/

			} else {
				recursoFoto.save({fotoId: $scope.foto._id}, function() {
					$scope.foto = {};
					$scope.formulario.$setPristine();
					$scope.mensagem = 'Foto cadastrada com sucesso!';
				}, function(erro){
					$scope.mensagem = 'Não foi possível cadastrar a foto';
					console.log(error);
				});
				
				/*$http.post('v1/fotos', $scope.foto)
				.success(function(){
					$scope.foto = {};
					$scope.formulario.$setPristine();
					$scope.mensagem = 'Foto cadastrada com sucesso!';
				})
				.error(function(error){
					$scope.mensagem = 'Não foi possível cadastrar a foto';
					console.log(error);
				});*/
			}
		}

	}

});