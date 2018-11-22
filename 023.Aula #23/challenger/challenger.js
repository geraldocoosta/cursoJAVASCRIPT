(function(window,document){
	'use strict';
	/*
	Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
	As regras são:
	- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
	diretamente;
	- O input deve iniciar com valor zero;
	- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
	- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
	multiplicação(x) e divisão(÷);
	- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
	que irá limpar o input, deixando-o com valor 0;
	- A cada número pressionado, o input deve atualizar concatenando cada valor
	digitado, como em uma calculadora real;
	- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
	operação no input. Se o último caractere no input já for um símbolo de alguma
	operação, esse caractere deve ser substituído pelo último pressionado.
	Exemplo:
	- Se o input tem os valores: "1+2+", e for pressionado o botão de
	multiplicação (x), então no input deve aparecer "1+2x".
	- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
	input;
	- Ao pressionar o botão "CE", o input deve ficar zerado.
	*/
	var auxText;
	var $buttons = document.querySelectorAll('[data-js*="number"]');
	var $operators = document.querySelectorAll('[data-js*="operador"]');
	var $campo = document.querySelector('[data-js="input"]');
	var $buttonCE = document.querySelector('[data-js="CE"]');
	var $buttonEquals = document.querySelector('[data-js="="]');
	var objOperations = [{
		regex: 'x',
		funcao: function(param1,param2){
			return Number(param1) * Number(param2);}
		},
		{
		regex: '÷',
		funcao: function(param1,param2){
			return Number(param1) / Number(param2);}
		},
		{
		regex: '+',
		funcao: function(param1,param2){
			return Number(param1) + Number(param2);}
		},
		{
		regex: '-',
		funcao: function(param1,param2){
			return Number(param1) - Number(param2);}
		}];



	Array.prototype.forEach.call($operators, function(item){
		item.addEventListener('click', handleClickOperations , false);
	});

	Array.prototype.forEach.call($buttons, function(item){
		item.addEventListener('click',addClickNumbers,false);
	});

	$buttonCE.addEventListener('click', handleClickCE,false);

	$buttonEquals.addEventListener('click',handleClickEqual,false);



	function addClickNumbers(event){
		if ($campo.value === '0'){
			$campo.value = this.innerText;
			return;
		}
		$campo.value += this.innerText;
	}

	function handleClickOperations(event){
			if ($campo.value === '0'){
				return;
			}
			if (!$campo.value.match(/\d$/)){
				$campo.value = $campo.value.slice(0,$campo.value.length-1) + this.innerText;
				return;
			}
			$campo.value += this.innerText;
		}

	function handleClickCE(event){
		$campo.value = '0';
	}

	function handleClickEqual(event){
		var expression = $campo.value;
		if (expression.match(/\d$/) === null)
			expression = expression.slice(0,expression.length-1);
		calcula(expression);
	}

	function calcula(text){
		auxText = text;
		if (text.match(/^[-]?[\d]+$/)){
			$campo.value = text;
			return;
		}
		objOperations.forEach(function(item){
			var params = text.match(new RegExp('[\\d]+\\'+item.regex+'[\\d]+'));
			if (!params){
				return;
			}
			var arrAux = params[0].split(/\D/);
			auxText = auxText.replace(params[0],item.funcao(arrAux[0],arrAux[1]));
			calcula(auxText);
		});
		
	}
})(window,document)