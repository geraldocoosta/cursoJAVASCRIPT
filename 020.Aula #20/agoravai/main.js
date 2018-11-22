(function(window){
	'use strict';
	// por que passar valores para a iife?
	//alert('caixinha hehe xD'); // caixinha com ok, dificilmente usado
	// bloqueia navegação, muito ruim 

	//var test = prompt("10 ou 12?");
	//console.log(test); // se a pessoa clicar no cancel, retorna null
	// se clicar no ok sem passar nada, string em branco

	//var algo = confirm("é benino?");
	//console.log(algo); // retorna true ou false

	// temos também a propriedade document, ou seja, o nosso html
	// AGORA FICOU INTERESSANTE
	// DOM ou Document Object Model é a arvore do documento html
	// exemplo, html é a tag pai, dentro dela tem body e head, dentro dessas vem outras etc.
	// o elemento raiz herda diretamente do Document, pelo que parece
	// pelo o que o daciuk falou, todo o documento é "pendurado" no document
	console.log(window);
	// para o js, cada tag html será um nó que estará lá no Document bem lindinho
	// Quando o browser le o html, ele monta a estrutura bem bonitinha e vincula ao document
	// a partir dessa estrutura, teremos acesso ao elementos dentro do dom, que é o documento representado em formato de objeto
	// a partir do document temos acesso

	// vamos acessar bem bonitinho? hehe
	console.log(document.getElementsByClassName( 'my-link' ));
	// podemos selecionar objetos com essa notação que retorna a tag com aquele id
	// lembre que a tag virou um objeto, por que o browser converteu

	// o método getElementById(stringID); só pode retornar um objeto, obviamente
	// o método getElementsByClassName(stringClass); trás vários objetos em um likeArray chamado HTMLCollection
	// podemos capturar esses caras para manipular eles, trocar classes, trocar textos e tals
	// getElementsByTagName(stringTag); também trás vários objetos em um likeArray também chamado HTMLCollection
})(window);