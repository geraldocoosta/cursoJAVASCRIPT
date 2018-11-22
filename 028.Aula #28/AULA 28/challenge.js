(function(){
	'use strict';
	// asynchronus Javascript and XML
	// o que é isso? javascript asynchrono é quando você não deixa uma operação
	// que consuma muito recurso bloquear a thread principal, e você efetua essa
	// ação em uma thread secundaria. utilizando evento e temporizadores. (setTimeout)
	// (setInterval)
	// XML fica no nome pq se iniciu a ideia do ajax com o xml, mas dá pra usar qualquer
	// tipo de conteudo
	// mas Ajax serve pra q? fazer requisições na mesma origem (url) que você está, no mesmo
	// dominio, essas requisições trazem informações sem recarregar a tela
	// ou seja, faz uma requisição e obtem uma resposta sem recarregar a tela, que pode ser um
	// html,json,xml, texto

	// o objeto ajax que será utilizado será o window.XMLHttpRequest();, esse objeto é do window
	// e precisa ser instanciado para fazer sua requisição AJAX
	// basicamente são 3 passos, 
	// instanciar um objeto ~> var ajax = new XMLHttpRequest(); ~> obs.: pode usar sem window
	// abrir uma conexão ~> ajax.open(method, url); ~> method são os métodos do HTTP
	// enviar os dados que você precisa pro servido (se precisar)
	// ajax.send(data);
	// get ~> obter informações do server
	// post ~> persistir informações no servidor

	var ajax = new XMLHttpRequest();
	ajax.open('GET','/index.html');
	ajax.send();

	// Isso é para fazer a requisição, como receber e tratar?
	// O Ajax tem um evento chamado readystatechange que vê quando o estado mudou
	// e reponde nesse evento

	//ajax.onreadystatechange = function(){};

	// pode-se usar esse evento com o addEventListener
	// Quando termina de fazer a requisição, ele cai nesse método
	ajax.addEventListener('readystatechange', function(){ 
		if (isOkRequest()){
			console.log('Terminou', ajax.readyState, ajax.status, ajax.responseText);
		}
	}, false);

	// pq quando ele faz uma requisição ele faz 3 chamadas? 
	// o evento readystatechange checa quando o estado mudou
	// pra checar o estado atual da requisição pode-se usar o ajax.readyState
	// o que significa esse numero do ajax.readyState?
	// 0 ~> não enviado (requisição não feita por algum motivo)
	// geralmente acontece porque o open não é chamado, quando é chamado, já mostra o 1
	// se mostrar o readyState antes do open, da um belo 0
	// 1 ~> conexão feita (abriu conexão, deu um open)
	// 2 ~> Headers recebidos (conexão já foi, já voltou, e tá dando bom)
	// O content-type muda de acordo com o retorno
	// 3 ~> Carregando corpo do request (Corpo da requisição)
	// 4 ~> CONCLUIDO (Chegou aqui deu bom)

	// Se for feita uma requisição para um arquivo que não existe, vai continuar 
	// chegando no 4, porém vai dar errinho xD
	// quando a requisição termina, pode-se verificar o status code desta
	// pra saber se deu sucesso
	// status conhecidos: 
	// 200 - sucesso
	// 403 - sem autenticação, servidor entendeu mas não tá afim de responder
	// 404 - servidor não encontra o que foi pedido
	// 500 - servidor encontrou algo inesperado

	// da pra pegar esse status pela propriedade status (não método)
	// ajax.status
	// a partir do readyState 2 já é possivel identificar o status code
	// state !== status, presta atenção vagabundo

	// BLZ PORRA, mas como capturo o retorno do bagulho e dou aquela mostrada no meu dom?
	// agora sim, como manipular a resposta?
	// quando a requisição termina com sucesso, o state é 200 e o status é 200
	// então, para manipular a resposta, primeiros devemos ter essa confirmação de que
	// a requisição é táok

	function isOkRequest(){
		return ajax.readyState === 4 && ajax.status === 200;
	}

	// Quando a resposta estiver pronta para ser manipulada, pode-se usar a propriedade
	// responseText do objeto ajax para manipular tudo ('Em String')
	// por exemplo, se retorna um json, já conhecemos um método para converter string em
	// json, que é o JSON.parse() (JSON.stringify ~> objeto para string)

	// Tem a opção de manipular de outra forma essa resposta
	// A forma padrão de resposta é o XML
	// ajax.responseXML, converte a resposta que veio de um arquivo xml em um documento
	// Mas não zaralha carai, tem que ser um xml
	// no xml, ele retorna um document que nem o do DOM, já PARSEADO MALUCO, mutcha faciliti
	// muito será usado para manipular json, e pouco para XML, esteje dito
})();