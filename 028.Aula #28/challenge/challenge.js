(function(){
	'use strict';
	/*
	No HTML:
	- Crie um formulário com um input de texto que receberá um CEP e um botão
	de submit;
	- Crie uma estrutura HTML para receber informações de endereço:
	"Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
	preenchidas com os dados da requisição feita no JS.
	- Crie uma área que receberá mensagens com o status da requisição:
	"Carregando, sucesso ou erro."
	No JS:
	- O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
	deve ser limpo e enviado somente os números para a requisição abaixo;
	- Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
	"https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
	no input criado no HTML;
	- Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
	com os dados recebidos.
	- Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
	a mensagem: "Buscando informações para o CEP [CEP]..."
	- Se não houver dados para o CEP entrado, mostrar a mensagem:
	"Não encontramos o endereço para o CEP [CEP]."
	- Se houver endereço para o CEP digitado, mostre a mensagem:
	"Endereço referente ao CEP [CEP]:"
	- Utilize a lib DOM criada anteriormente para facilitar a manipulação e
	adicionar as informações em tela.
	*/

	function DOM(stringCssSelector){
		this.element = document.querySelectorAll(stringCssSelector);
	}

	DOM.prototype.on = function(strEvent,callback){
		Array.prototype.forEach.call(this.element,function(item){
			item.addEventListener(strEvent,callback,false);
		});
	}

	DOM.prototype.off = function(strEvent,callback){
		Array.prototype.forEach.call(this.element,function(item){
			item.removeEventListener(strEvent,callback,false);
		});
	}

	DOM.prototype.get = function(){
		return this.element;
	}

	DOM.prototype.forEach = function forEach(){
		Array.prototype.forEach.apply(this.element,arguments);
	}

	DOM.prototype.map = function map(){
		return Array.prototype.map.apply(this.element,arguments);
	}

	DOM.prototype.reduce = function reduce(){
		return Array.prototype.reduce.apply(this.element,arguments);
	}

	DOM.prototype.reduceRight = function reduceRight(){
		return Array.prototype.reduceRight.apply(this.element,arguments);
	}

	DOM.prototype.every = function every(){
		return Array.prototype.every.apply(this.element,arguments);
	}

	DOM.prototype.some = function some(){
		return Array.prototype.some.apply(this.element,arguments);
	}

	DOM.prototype.isArray = function isArray(args){
		return abstractToString(atgs) === '[object Array]';
	}

	DOM.prototype.isObject = function isObject(args){
		return abstractToString(atgs) === '[object Object]';
	}

	DOM.prototype.isFunction = function isFunction(args){
		return abstractToString(atgs) === '[object Function]';
	}

	DOM.prototype.isNumber = function isNumber(args){
		return abstractToString(atgs) === '[object Number]';
	}

	DOM.prototype.isString = function isString(args){
		return abstractToString(atgs) === '[object String]';
	}

	DOM.prototype.isBoolean = function isBoolean(args){
		return abstractToString(atgs) === '[object Boolean]';
	}

	DOM.prototype.isNull = function isNull(args){
		return abstractToString(atgs) === '[object Null]' ||
		abstractToString(atgs) === '[object Undefined]';
	}

	function abstractToString(args){
		return Object.prototype.toString.call(args);
	}

	let $campoCep = new DOM('#campocep');
	let $botaoEnviar = new DOM('[data-js="botaoenviar"]');
	let $carregamento = new DOM('[data-js="carregamento"]');
	let $logradouro = new DOM('[data-js="logradouro"]');
	let $bairro = new DOM('[data-js="bairro"]');
	let $estado = new DOM('[data-js="estado"]');
	let $cidade = new DOM('[data-js="cidade"]');
	let $cep = new DOM('[data-js="cep"]');
	let ajax = new XMLHttpRequest();
	let result;

	ajax.addEventListener('readystatechange',function(){
		
		if(this.readyState === 4 && this.status === 200){
			result = JSON.parse(this.responseText);  
			$carregamento.element[0].innerText = "Sucesso";
			setarCampos();
		}else if(this === 4 || this.status === 0){
			$carregamento.element[0].innerText = "Erro na requisição";
		}
		
	},false);

	$botaoEnviar.on('click', handlerButton);

	function setarCampos(){
		$logradouro.element[0].value = result.logradouro;
		$bairro.element[0].value = result.bairro;
		$estado.element[0].value = result.uf;
		$cidade.element[0].value = result.localidade;
		$cep.element[0].value = result.cep;
	}

	function handlerButton(e){
		try{
			auxHandlerButton(e);
		}catch(er){
			$carregamento.element[0].innerText = "Erro na requisição";
		}

	}

	function auxHandlerButton(e){
		e.preventDefault();
		$carregamento.element[0].innerText = "Carregando...";
		$campoCep.element[0].value = $campoCep.element[0].value.replace(/\D/g,"");
		ajax.open('GET','https://viacep.com.br/ws/' + $campoCep.element[0].value + '/json/');
		ajax.send();
	}
		
})();