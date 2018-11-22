(function(window,document){
	'use strict';
	/*
	Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
	métodos semelhantes aos que existem no array, mas que sirvam para os
	elementos do DOM selecionados.
	Crie os seguintes métodos:
	- forEach, map, filter, reduce, reduceRight, every e some.
	Crie também métodos que verificam o tipo do objeto passado por parâmetro.
	Esses métodos não precisam depender de criar um novo elmento do DOM, podem
	ser métodos estáticos.
	Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
	no objeto, como nos exemplos abaixo:
	DOM.isArray([1, 2, 3]); // true
	DOM.isFunction(function() {}); // true
	DOM.isNumber('numero'); // false
	Crie os seguintes métodos para verificação de tipo:
	- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
	O método isNull deve retornar `true` se o valor for null ou undefined.
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

})(window,document);