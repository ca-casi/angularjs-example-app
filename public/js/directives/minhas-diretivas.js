angular.module('minhasDiretivas', [])
.directive('meuPainel', function() {
	var ddo = {}; //ddo = Directive Definition Object
	ddo.restric = "AE"; //Atributte Element or Attribute or Element
	//uma diretiva em angular pode ser utilizada como Elemento, Atributo ou Comentário (esta última muito incomum). Vamos estipular que nossa diretiva pode ser usada tanto como atributo ou como elemento, adicionando em nosso DDO a propriedade restrict com valor "AE":
	ddo.scope = {
		titulo: '@' // quando os nome que recebe é igual ao nome da propriedade pode-se deixar somente o @
		//titulo: '@titulo'
	};
	ddo.transclude = true; //utilizada para o angular manter os elementos filhos
	ddo.templateUrl = 'js/directives/meu-painel.html';
		
	return ddo;
})
.directive('minhaFoto', function() {

    var ddo = {};

    ddo.restrict = "AE";

    ddo.scope = {
        titulo: '@',
        url: '@'
    };

    ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';           

    return ddo;

})
.directive('meuBotaoPerigo', function() {
    var ddo = {};

    ddo.restrict = "E";

    ddo.scope = {
        nome: '@',
        acao: '&' //o & comercial indica que uma expressão será avaliada e não somente o repasse de uma string
    };

    ddo.template = ' <button ng-click="acao(foto)" class="btn btn-danger btn-block">{{nome}}</button>';           

    return ddo;
})
.directive('applyFocus', function(){
    var ddo = {};

    ddo.restrict = "A";
    ddo.scope = {
        focused: '=' //tanto a diretiva e o controller poden alterar este valor
    };

    ddo.link = function(scope, element){
        scope.$watch('focused', function(){
            if(scope.focused) {
                element[0].focus();
                scope.focused = false;
            }
        });
    };

    return ddo;
});

// <meu-painel titulo="Gambiarra"></meu-painel>