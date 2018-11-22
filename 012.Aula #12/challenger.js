(function(){
/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
// ?
var person = {
	nome:"Geraldo",
	lastname:"Oliveira",
	age:21
}
console.log( 'Propriedades de "person":' );

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
// ?
console.log(Object.keys(person));

/*
Crie um array vazio chamado `books`.
*/
// ?

var books = [];

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
// ?
console.log( '\nLista de livros:' );
books.push( {name: 'HeadFirst: Servlet and Jsp', pages: 896 } );
books.push( {name: 'Java: Como programar', pages: 951 } );
books.push( {name: 'JavaScript: Eloquente', pages: 542 } );

/*
Mostre no console todos os livros.
*/
// ?
for(var livros in books){
	var livro = books[livros];
	for (var prop in livro){
		console.log(prop + ": " + livro[prop]);
	}
}

console.log( '\nLivro que está sendo removido:' );
/*
Remova o último livro, e mostre-o no console.
*/
// ?
console.log(books.pop());

console.log( '\nAgora sobraram somente os livros:' );
/*
Mostre no console os livros restantes.
*/
// ?
for(var livros in books){
	console.log("Nome livro: " + books[livros].name + ", numero de paginas: " +  books[livros].pages);
}

/*
Converta os objetos que ficaram em `books` para strings.
*/
// ?
console.log( '\nLivros em formato string:' );

var livro1 = JSON.stringify(books[0]);
var livro2 = JSON.stringify(books[1]);

/*
Mostre os livros nesse formato no console:
*/
// ?
console.log(livro1,livro2 );
/*
Converta os livros novamente para objeto.
*/
// ?
 livro1 = JSON.parse(livro1);
 livro2 = JSON.parse(livro2);
console.log( '\nAgora os livros são objetos novamente:' );

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
// ?
for( var prop in livro1 ){
	console.log(prop + " : " + livro1[prop]);
}
for( var prop in livro2 ){
	console.log(prop + " : " + livro2[prop]);
}

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
// ?
var myName = ['J','O','S','É',' ','G','E','R','A','L','D','O',' ','C','O','S','T','A',' ','O','L','I','V','E','I','R','A'];

console.log( '\nMeu nome é:' );

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
// ?
console.log(myName.join(""));

console.log( '\nMeu nome invertido é:' );

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
// ?
console.log(myName.reverse().join(""));

console.log( '\nAgora em ordem alfabética:' );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
// ?
console.log(myName.sort().join(""));

})()