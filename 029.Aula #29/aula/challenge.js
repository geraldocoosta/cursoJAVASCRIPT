(function(DOM){
	'use strict';
	
	// usando o padrão module pattern
	// geralmente é uma função que encapsula seu código e inicia ele
	function app(){

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
		$botaoEnviar.on('click', handlerButton);

		ajax.addEventListener('readystatechange',function(){

			if(ajax.readyState === 4 && ajax.status === 200){
				setarCampos();
			}else if(ajax.readyState === 4 && ajax.status === 0){
				setarMensagem('error');
			}
		},false);

		
		function setarCampos(){
			result = JSON.parse(ajax.responseText); 
			if (result.erro){
				setarMensagem('error');
				return;
			} 	
			$logradouro.element[0].value = result.logradouro;
			$bairro.element[0].value = result.bairro;
			$estado.element[0].value = result.uf;
			$cidade.element[0].value = result.localidade;
			$cep.element[0].value = result.cep;
			setarMensagem('sucess');
		}

		function handlerButton(e){
			try{
				auxHandlerButton(e);
			}catch(er){
				setarMensagem('error');
			}
		}

		function auxHandlerButton(e){
			e.preventDefault();
			setarMensagem('loading');
			limpaCep();
			ajax.open('GET','https://viacep.com.br/ws/' + $campoCep.element[0].value + '/json/');
			ajax.send();
		}

		function setarMensagem(situation){
			var messages = {
				sucess: "Endereço referente ao CEP " + limpaCep() + ":",
				error:"Não encontramos o endereço para o CEP " + limpaCep() + ".",
				loading:"Buscando informações para o CEP " + limpaCep() + "..."
			}
			$carregamento.element[0].textContent = messages[situation];
		}

		function limpaCep(){
			return $campoCep.element[0].value = $campoCep.element[0].value.replace(/\D/g,"");
		}

		// revealing module pattern
		// revelo alguns métodos internos
		// mesmo revelando esses métodos pra outro escolo, eles ainda manipulam atributos internos
		// dessa função pois eles tem referencia a esses atributos, e essas referencias ficam grava-
		// das 
		return {
			setarMensagem:setarMensagem(),
			limpaCep:limpaCep()
		}
	}
	r = app();

})(window.DOMLib);

var r;