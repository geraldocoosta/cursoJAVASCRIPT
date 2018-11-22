(function(){
	$link = document.querySelector('[data-js="link"]');
	$div = document.querySelector('[data-js="div"]');
	$span = document.querySelector('[data-js="span"]');
	$input = document.querySelector('[data-js="input"]');
	$select = document.querySelector('[data-js="select"]');

	// SE o que eu selecionei aqui envolver outro atributo html, o evento 
	//também envolve aquele atributo no evento cadastrado
	$link.addEventListener('click',function(event){
		event.preventDefault();
		alert("Cliquei no link");
	},true);
	
	$div.addEventListener('click',function(){
		alert("Cliquei na div");
	},true);

	$span.addEventListener('click', handleClickSpan, true);

	function handleClickSpan(){
		alert("Cliquei no span");
	}

	function handleClickSpan2(){
		alert("Cliquei no span2");
	}

	function handleClickSpan3(){
		alert("Cliquei no span3");
	}

	/*Ele ensionou a abstrair esse método, mas estou com preguiça*/

	/* Como a explicação do grande fernando é enrolada e eu entendi em suma, 
	vamo aos acontecimentos. Quando temos tags html, uma dentro da outra, 
	todas com evento, ao clicar em um elemento mais interno, será ativado os 
	eventos das tags mais externas que envolvem esse elemento interno, ou 
	seja, se eu tenho uma div, dentro dessa uma tag a, dentro dessa tag a 
	temos uma tag span, todas elas com evento, ao clicar no span, será 
	disparado o evento relacionado ao span, depois a tag a, e depois a tag 
	div, porém, isso quando é false o terceiro argumento, quando verdadeiro, 
	mesmo clicando no elemento mais interno, vai disparar do mais externo até 
	este */

	/* podemos também remover eventos com o método removeEventListener, porém 
	temos que passar a mesma function e evento passados para adicionar, por 
	exemplo*/

	$span.removeEventListener('click', handleClickSpan ,true);

	/*Também podemos cadastrar mais de um evento para um elemento*/
	$span.addEventListener('click', handleClickSpan2 ,true);
	$span.addEventListener('click', handleClickSpan3 ,true);

	/*antigamente, podia fazer isso, mas não é recomendado, pois, se eu rodar 
	esse código, a segunda atribuição sobrescreve a primeira*/

	$span.onclick = function(){
		alert("escrevendo!");
	}

	$span.onclick = function(){
		alert("sobrescrevendo!");
	}

	/*=======================================================================*/
	/*Outros eventos bem legais*/

	// evento 'input' ~> cada entrada de texto, um evento rola
	// $input.addEventListener('input', function(){
	// 	console.log(this.value);
	// },false);

	// evento 'keyup' ~> Key Up, nome alto explicativo
	$input.addEventListener('keyup', function(){
		console.log(this.value);
	},false);

	// evento 'keydown' ~> Key Down, nome alto explicativo
	$input.addEventListener('keydown', function(){
		console.log(this.value);
	},false);

	// evento "change" ~> evento a cada mudança basicamente, xD 
	$select.addEventListener('change',function(){
		console.log('mudou!' + this.value);
	},false);

})();