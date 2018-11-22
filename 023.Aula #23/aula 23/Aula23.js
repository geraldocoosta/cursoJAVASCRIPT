(function(){
	// como debugar uma aplicação JS?
	// debug basicamente é pegar o código, entender o que acontece em cada linha do código para saber quando acontece algum problema
	// vamos ver as ferramentas de debug do JS
	'use strict';

	function sum(){
		return Array.prototype.reduce.call(arguments, function(accumulated, item){
			return (+accumulated) + (+item);
		});
	}
	// como fazemos para saber como ela ta funcionando, como saber o valor da váriavel em algum momento, coisas assim meu bro

	// Primeiramente, deixe o console aberto sempre
	console.log( sum(25,25,25,25));


})();