angular.module('alurapic').controller('FotoController', function($scope, cadastraFotos, $routeParams, recursoFoto){
	
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
			
			cadastraFotos.cadastrar($scope.foto)
			.then(function(dados){
				$scope.mensagem = dados.mensagem;
				if(dados.inclusao) {
					$scope.foto = {};
					$scope.formulario.$setPristine();
					//$scope.focused = true;
					
				}
			})
			.catch(function(erro){
				$scope.mensagem = erro.mensagem;
			}) 


			/*if($scope.foto._id) {

				//v2
				// recursoFoto.update({fotoId: $scope.foto._id}, $scope.foto, function(){
				// 	$scope.mensagem = 'Foto' + $scope.foto.titulo + 'foi removida com sucesso';
				// }, function(erro){
				// 	console.log(erro);
				// 	$scope.mensagem = 'Não foi possível remover a foto' + $scope.foto.titulo;
				// });

				//v1
				// $http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
				// .success(function(fotos){
				// 	$scope.mensagem = 'Foto' + $scope.foto.titulo + 'foi removida com sucesso';
				// })
				// .error(function(erro){
				// 	console.log(erro);
				// 	$scope.mensagem = 'Não foi possível remover a foto' + $scope.foto.titulo;
				// });

			} else {

				//v2
				// recursoFoto.save({fotoId: $scope.foto._id}, function() {
				// 	$scope.foto = {};
				// 	$scope.formulario.$setPristine();
				// 	$scope.mensagem = 'Foto cadastrada com sucesso!';
				// }, function(erro){
				// 	$scope.mensagem = 'Não foi possível cadastrar a foto';
				// 	console.log(error);
				// });
				
				//v1
				// $http.post('v1/fotos', $scope.foto)
				// .success(function(){
				// 	$scope.foto = {};
				// 	$scope.formulario.$setPristine();
				// 	$scope.mensagem = 'Foto cadastrada com sucesso!';
				// })
				// .error(function(error){
				// 	$scope.mensagem = 'Não foi possível cadastrar a foto';
				// 	console.log(error);
				// });
			}*/
		}

	}

});