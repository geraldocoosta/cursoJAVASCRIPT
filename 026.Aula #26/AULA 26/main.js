(function(){
	'use strict';
	/* MUITO CONTEÚDO VEM! YEAH!
	API DOM ~> dom significa document object model, modelo do documento em formato de 
	objeto, sempre que temos uma pagina html ou documento xml e trabalhamos com 
	javascript e precisamos manipular as tags do documento usamos o dom, a api dom 
	funciona para outras linguagens de programação. com javascript, conseguimos 
	manipular elementos do dom em tempo real.
	Como que o browser monta a estrutura? 
	Cada elemento vira um nó (provavelmente um objeto), e vai que vai. é tipo uma 
	arvore pelo meu entedimento.
	Uma informação boa que adquiri agora, também é possivel manipular atributos 
	separadamente

	como percorrer elementos com js?
	primeira propriedade para percorrer elementos
	.parentNode ~> pega um nó que é pai do nó selecionado
	*/

	var $main = document.querySelector('.main');
 	var $mainContent = document.querySelector('.main-content');
 	var $mainHeader = document.querySelector('.main-header');

	console.log($main.parentNode); // output -> body

	//.parentNode ~> pega os nós filhos de um nó
	console.log($main.childNodes); // output -> retorna uma nodeList
	// As quebras de linha são contadas (não sei pq), que são um enter
	// comentarios também são contados
	// ou seja, textos soltos entre tags são pegos como filhos xD
	// se tiver um trim() humilde
	// há de se ter muito cuidado com o childNodes por isso, ele conta até enter
	// isolado

	// .firstChild ~> Obviamente o primeiro filho
	console.log($main.firstChild); // output: espaço em branco xD

	// .lastChild ~> Obviamente o primeiro filho
	console.log($main.lastChild); // output: espaço em branco xD

	// não curti essa api, mas pode ter alguma utilidade


	// nextSibling ~> mostra o próximo irmão
	console.log($main.nextSibling); // output: espaço em branco xD

	/*Nas que aparecem um espaço em branco, deve-se retirar os espaçamentos entre tag
	no html para buscar outra tag*/

	// previousSibling ~> mostra o irmão anterior
	console.log($main.previousSibling); // output: espaço em branco xD

	// nodeType ~> mostra o tipo do nó selecionado
	console.log($main.nodeType); // -> output 1
	/*existem alguns numeros para alguns elementos do html
	Document: nodeType 9
	Element: nodeType 1 ~> Elementos HTML, tags
	Text: nodeType 3
	Comments: nodeType 8
	documentFragment: nodeType 22
	Mostra um numero que corresponde a um tipo do elemento do documento
	Mt dificilmente utilizado
	*/

	// ~> nodeValue ~> conteudo textual dos elementos text e comment
	console.log($mainContent.firstChild.nodeValue); // retorna texto1, localizado 
	// dentro da tag section xD
	console.log($mainContent.firstChild.nextSibling.nodeValue);
	// retorna o texto do comentario, lógica fácil, não exigi muito overHead
	// texto do próximo irmão depois do primeiro filho de .mainContent

	// ~> nodeName ~> mostra o nome daquele nó
	console.log($mainContent.firstChild.nodeName); // #text
	console.log($mainContent.firstChild.nextSibling.nodeName); // #comment
	console.log($main.nodeName); // DIV
	console.log($mainContent.nodeName); // SECTION

	// caniuse.com pra saber o que os navegadores suportam

	// propriedade children ~> não padronizada, não faz parte da especificação
	// é bem suportada, bastante utilizada
	console.log($main.children);
	// diferente do childNodes, que vem uma nodeList com comments e textos soltos
	// o children trás somente ELEMENTOS MEU BOM, EU DISSE ELEMENTOS
	// ou seja, bem util mafriend, e também é um HTMLCollection
	// não padronizada, mas mt boa xD

	// firstElementChild ~> primeiro elemento filho, ta bem explicito
	// não sei se é padronizado, mas é mt bom
	console.log($main.firstElementChild); // retorna o nó do elemento header

	// lastElementChild ~> auto explicativo
	console.log($main.lastElementChild); 

	// nextElementSibling ~> proximo elemento irmão
	console.log($main.nextElementSibling); 

	// previousElementSibling ~>  elemento irmão anterior
	console.log($mainContent.previousElementSibling); 

	// childElementCount ~> quantidade de elementos filhos que um elemento tem
	console.log($main.childElementCount);  // 3
	// children.length ~> faz a mesma coisa xD
	console.log($main.children.length);


	// MÉTODOOOOS para manipulação de elementos do DOM

	// ~> hasAttribute(stringnmae);
	// verificar se certa tag tem um attributo com certo nome, exemplo
	console.log($main.firstElementChild.hasAttribute("data-js")); // true

	// ~> hasAttributes(stringnmae);
	// ATTRIBUTESSSSSS fila da jaca, é pra verificar se um elemento tem qualquer 
	// atributo
	console.log($mainContent.firstElementChild.firstElementChild.hasAttributes());

	// ~> appendChild(child);
	// Adiciona um elemento filho a um elemento
	//exemplo, colocando a tag header dentro da section
	// se fizer isso com um elemento existente, ele sai da onde ele está e é colocado
	// no lugar onde o método diz pra ele ser inserido
	/*console.log($mainContent.appendChild( $mainHeader));*/
	// deixar comentado pq é nois
	// com esse comando, o mainHeader foi parar no final do main content


	// ~> insertBefore(node, beforeWhom)
	// inserir antes, padrão, pra não inserir lá no final do nó onde está sendo
	// inserido algo
	console.log($mainContent.insertBefore($mainHeader,$mainContent.firstElementChild));
	// retorna algo, mas é irrelevante, o trabalho desse método não é esse

	// ~> cloneNode(boolean)
	// clona um fodendo nó
	// o que é esse param? se true, copia também o conteúdo desse nó, se false não 
	// copia o que vier dentro da tag, só a casquinha
	// deve funcionar bem pra input
	var $cloneMainHeader = $mainHeader.cloneNode(true);
	$mainContent.appendChild($cloneMainHeader );

	// ~> hasChildNodes
	// verifica se um elemento tem nó filho
	console.log(document.querySelector('p').hasChildNodes());
	// pelo visto texto é filho, mas tudo bem

})();