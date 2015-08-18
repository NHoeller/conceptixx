/**
 * @project : modula.js
 * @package : modula.js.LOADER
 * @internal : intro
 * @type : anonymous function
 * @dependencies :	none
 */
( function( m , o , d , u , l , a , _ , j , s ) {
	
	// m = window
	// o = document
	// d = undefined = tasks
	// u = undefined
	// l = undefined = events
	// a = undefined = ajax
	// _ = undefined = _ (defaulter)
	// j = undefined = demand
	// s = undefined = selector

	// RESERVED
	// ca
	// cb
	// fw
	// td

	/**
	 * define use strict
	 */
	"use strict";


	/**
	 * create Modula initial console output
	 */
	if( console ) {
		var td = 'text-decoration:underline' ,
			fw = 'font-weight:700' ,
			ca = 'color:#d07020' ,
			cb = 'color:#a09080';
		console.log( '%cmodula.js' , ca + ';' + fw + ';' + td );
		console.log( '%c(m)' , cb + ';' + fw , 'managed');
		console.log( '%c(o)' , cb + ';' + fw , 'optimizing');
		console.log( '%c(d)' , cb + ';' + fw , 'demand');
		console.log( '%c(u)' , cb + ';' + fw , 'utility');
		console.log( '%c(l)' , cb + ';' + fw , 'loader');
		console.log( '%c(a)' , cb + ';' + fw , 'application');
		console.log( '%cversion' , ca + ';' + fw + ';' + td , '1.01.001 - prototype' );
	};


