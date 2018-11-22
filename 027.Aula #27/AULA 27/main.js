(function(document){
	'use strict';
	// document.createDocumentFragment()
	// manipular elementos do dom com performance
	// quando mexemos com dom, é mt lerdo, basicamente!
	// o browser tem que fazer todo uma renderização quando a pagina é criada ou manipulada para não quebrar o documento
	// por isso é lerdo pra k7;

	// DocumentFragment é um fragmento de documento (obvio) como se fosse um 
	// documente em branco, para que eu possa manipular nós, para depois incluir 
	// esses nós no HTML, o que deixa a performance muito melhor
	// isso faz com que o browser tenha menos trabalho
	// ou seja, podemos criar um DocumentFragmente, adicionar vários nós, e depois
	// adicionar isso no document principal

	// uma observação importante, documentFragment não tem parent node
	// o nodeType do document fragment é 11, professor falou errado na aula passada

	// createDocumentFragment é um método de document, retorna um fragmento 
	// completamente branco
	//var fragment = document.createDocumentFragment();
	// agora podemos adicionar nós nesse documento, e depois adicionarmos ao documento
	// principal

	//var $childP = document.createElement('p');
	//var textChildP = document.createTextNode('BOLOLO HAHA');
	//$childP.appendChild(textChildP);
	//fragment.appendChild($childP);
	/* Nessa faixa de código, criamo a tag p com o método document.createElement(tag),
	criamos um texto com document.createTextNode(texto), depois atribuimos esse nó de 
	texto a tag criada anteriormente, adicionamos essa tag p ao fragmento de documento
	e depois disso adicionamos esse fragmento no final da tag body*/
	//document.body.appendChild(fragment);

	// quando for dar essas mexidas brabas, tente usar sempre o document fragment
	// e deposi adicionar ao dom de facto, ajuda no desempenho

	//===============================================================================
	// DICAS SOBRE EVENTO
	/* Posição dos Scripts no HTML IMPORTA, EU DISSE IMPORTA
	como assim? o que isso tem a ver com eventos? por exemplo, se esse script for
	colocado no começo do html, dentro do head, irá dar erro, pq GEGE?
	por que o body ainda não terá sido carregado, então como acessar um elemento que
	não existe ainda?
	Para entender melhor, como o browser carrega o conteúdo da páginaa?
	TOP DOWN FIO, carrega tudo do header, depois carrega o body, as coisas do body, e
	assim vai, e no caso do script estiver no head, ele vai carregar o script e rodar
	o que tiver pra rodar, é interessante entender que, se o script tiver no topo e 
	tiver que manipular algo, vai rolar um errinho xD, como resolver?
	Existe um evento chamado DOMContentLoaded que o document dispara esse evento 
	somente quando todo conteúdo dom estiver carregado, TODO mané, mas o evento só 
	espera tags, não espera imagens não .
	É muito usado quando é preciso manipular elementos html e não da pra esperar que
	eles estejam realmente prontos, ou seja, preciso que eles existam na tela, não 
	importa se estão carregados*/

	function afterDomContentLoaded(){
		var fragment = document.createDocumentFragment();
		var $childP = document.createElement('p');
		var textChildP = document.createTextNode('BOLOLO HAHA');

		$childP.appendChild(textChildP);
		fragment.appendChild($childP);

		document.body.appendChild(fragment);
	}


	function afterWindowLoad(){
		console.log("Carregooooooo!");
	}
	//adicionando evento ao document
	// agora funciona mesmo colocando no header, justamente por esse evento
	document.addEventListener('DOMContentLoaded', afterDomContentLoaded, false);
	//window.addEventListener('load',afterWindowLoad,false);
	// mas a boa prática é colocar lá no final, no começo só em casos especiais

	// agora se você quiser esperar todo mundo carregar
	// o window tem um evento chamado load que espera tudo que não for assincrono 
	// carregarar

	//=============================================================================
	// TÉCNICAS NINJA
	// por algum motivo ele passa isso agora, anti climax total
	// copia de array;
	var arr = [1,2,3,4,5];
	var arr2 = arr;
	console.log(arr, arr2, arr === arr2);
	// isso não é uma copia real, são duas váriaveis apontando para o mesmo objeto
	// para um cópia real, posso fazer isso:

	arr2 = arr.map(function(item){return item;});
	console.log(arr, arr2, arr === arr2);

	//tem um jeito ainda mais fácil
	arr2 = arr.slice(0);
	console.log(arr, arr2, arr === arr2);

	// com isso, podemos realizar copias de elementos dom por exemplo
	function afterDomContentLoaded2(){
		var $divs = document.querySelectorAll('div');
		var $divCopy = Array.prototype.slice.call($divs,0);
		console.log($divs,$divCopy, $divs === $divCopy);
	}

	document.addEventListener('DOMContentLoaded', afterDomContentLoaded2, false);
	
	// Saber o tipo de dado real de um elemento
	// também posso sobrescrever o método toString dos meus objetos, que ai dá pra 
	// depurar legal
	var arr = [1,2,3];
	function myFunc(){	}
	// aparentemente é a melhor forma de saber qual o objeto
	console.log(Object.prototype.toString.call(arr)); // return object Array
	console.log(Object.prototype.toString.call(myFunc)); // return object Function

})(document);