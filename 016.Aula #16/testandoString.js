(function(){
	'use strict'
	// strings são like array, vários métodos que o array tem tem também nas strings
	// lembrando também que dá pra usar métodos de string em strings literais pois 
	// o js encapsula a string literal em um objeto para poder chamar a function
	// depois ele descarta isso

	console.log('geraldo'.length);
	// nessa linha, o js encapsulou a string literal em objeto e retornou o valor desse método
	// lembrando que: length é PROPRIEDADE, não método, é nois
	// não perderei tempo discorrendo sobre o que é a prop length

	console.log('geraldo'.charAt(0) ); 
	// conforme tradução, seria charEm(index), ou seja, passado um index, me retorne 
	// o caractere que está nesse index, lembrando que string inicia em 0 assim como arrays
	console.log('geraldo'.charAt(456) === ''); 
	// se for passado uma posição não valida, retorna uma string em branco


	// como strings são like arrays, a seguinte sintaxe é valida
	console.log('geraldo'[5]);
	// se passado uma posição não valida, retorna undefined
	console.log('geraldo'[456] === undefined);

	// concat é a mesma parada do array, lembrando que não modifica a porra da String original :)
	let gege = 'YEAY';
	console.log(gege.concat('yea'));
	console.log(gege);

	// index of -> puta vida, mesma coisa de novo
	console.log(gege.indexOf('A'));
	// só pra não esquecer, de acordo com tradução, indiceDe('String que vai ser procurada') ~> retorna ou o index inicial da string passada, ou -1 quando não encontrada
	// Lembrando que pode ter um segundo parametro numerico, onde será iniciada a verificação
	
	// lastIndexOf ~~ padrão
	console.log(gege.lastIndexOf('Y'));

	// replace(string, newString) -> obvio dms, não altera string original
	// faz a troca somente do primeiro caractere encontrado, ou primeiros
	console.log(gege.replace('Y','U'));
	console.log(gege);

})(); 