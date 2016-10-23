//************************************** Variáveis / Scoping **************************************//
opensancaGlobal = 'Global'; //global 
const OPEN_SANCA = 'Constante';

var obj = {};
var array = [];



function imprimeVariavelGLobal(){
	console.log(opensancaGlobal);
	console.log(opensancaLocal);
}

function imprimeVariavelLocal(){
/*	OPEN_SANCA = 'Não muda';*/
	var opensancaLocal = 'Local';
	console.log(opensancaLocal);
	console.log(opensancaGlobal);
	console.log(OPEN_SANCA);
}

function exemploVar() {
    //x poderia ser acessado aqui
    for(var x = 0; x < 5; x++) {
        //x existe aqui
    };
	/*if(true){
		var x = 1;
	}*/

    console.log(x);
    //x está visível aqui novamente
};


function exemploLet() {
	if(true){
		let x = 1;
	}

    //x não existe aqui
    for(let x = 0; x < 5; x++ ) {
        //x existe aqui
    };
    console.log(x);
    //x não está visível aqui novamente
};

/*imprimeVariavelGLobal();*/
/*imprimeVariavelLocal();*/
/*exemploVar();
exemploLet();*/


//************************************** Hoisting **************************************//
function hoisting(){
	x = 1;

	function changeVar(){
		x = 2;
	}

	var x;

	changeVar();

	console.log(x);

	//Funções anonimas não são elevadas
	anonima();

	var anonima = function(){
		console.log('Opensanca')
	}

}
/*hoisting();*/




//************************************** Operadores **************************************//
function operadores(){

	var adicao = 3 + 2
	var concatenação = 'Resultado da adicao = '+ adicao;
	var subtracao = 10-5;
	var multiplicacao = 2*5;
	var divisao = 20 / 2;
	var modulo = 10 % 3;
	var negacao = true;

	if(multiplicacao == divisao) {
		console.log('Verifica valor');
	}
	multiplicacao = multiplicacao +'';

	if(multiplicacao === divisao) {
		console.log('Verifica tipo também');
	} else {
		console.log(typeof multiplicacao);
		console.log(typeof divisao);
	}

	if(!negacao){
		console.log('Negação!');
	}
}
/*operadores();*/


//************************************** Condicionais **************************************//

function condicionalIf(){
	var day4 = 'Javascript';

	if(day4 === 'Javascript'){
		console.log('Acerto Miseravi!');
	} else {
		console.log('Errou!');
	}

}

function condicionalSwitch(){

	switch (new Date().getDay()) {
	    case 0:
	        day = "Sunday";
	        break;
	    case 1:
	        day = "Monday";
	        break;
	    case 2:
	        day = "Tuesday";
	        break;
	    case 3:
	        day = "Wednesday";
	        break;
	    case 4:
	        day = "Thursday";
	        break;
	    case 5:
	        day = "Friday";
	        break;
	    case 6:
	        day = "Saturday";
	}
	console.log(day);
}
/*condicionalIf();*/
/*condicionalSwitch();*/

//************************************** Laços e Iterações **************************************//

function exemploFor() {
	var cars = ['BMW', 'Mercedes', 'Ferrari'];
	var carLength = cars.length;

	for(var i = 0; i < carLength; i++ ){
		console.log(cars[i]);
	} 
}

function exemploDoWhile() {
	var day = "";
	var i = 1;
	do {
	    console.log("Trilha frontend dia " + i);
	    i++;
	}
	while (i < 5);
}

function exemploWhile() {
	var day = 1;
	while (day < 5) {
	  console.log("Trilha frontend dia " + day);
	  day++;
	}
}

function exemploForIn() {
	var trilhaFrontend = {
		'Dia 1': 'UX', 
		'Dia 2': 'HTML',
		'Dia 3': 'CSS',
		'Dia 4': 'JS'
	};

	for (var day in trilhaFrontend) {
		console.log(day + " = " + trilhaFrontend[day]);
	}

}

function exemploForOf() {
	var trilhaFrontend = ['Dia 1 = UX', 'Dia 2 = HTML', 'Dia 3 = CSS', 'Dia 4 = JS'];

	for (var day of trilhaFrontend) {
		console.log(day); 
	}

}

function exemploForEach() {
	var trilhaFrontend = ['UX', 'HTML', 'CSS', 'JS'];

	trilhaFrontend.forEach(function(elemento, index) {
		console.log('Dia '+ (index+1) + ' = ' + elemento); 
	});

}

/*exemploFor();*/
/*exemploDoWhile();*/
/*exemploWhile();*/
/*exemploForIn();*/
/*exemploForOf();*/
/*exemploForEach();*/


//************************************** Funções **************************************//

/*helloOpensanca();
goodByeOpensanca();*/

//Expression
function helloOpensanca(){
	console.log('Hello OpenSanca');
}

//Declaration
var goodByeOpensanca = function(){
	console.log('Good Bye OpenSanca');
}

//************************************** Funções anônimas **************************************//
/*var opensanca = function() {
	return 'Hello Open Sanca!'
}
console.log(opensanca());*/


//************************************** Funções de primeira classe **************************************//

function funcaoPorParametro(mensagem){
	console.log(mensagem);
}

function primeiraClasse(funcao, valor){
	funcao(valor);
}

/*primeiraClasse(funcaoPorParametro, 'Olá OpenSanca!');*/

var meuObjeto = {
	numero: 20,
	mostrarNumero: function(){
		console.log(this.numero);
	}
}

/*
meuObjeto.mostrarNumero();*/


//************************************** This **************************************//

var trilhaFrontend = 'OpenSanca'

var temas = {  
    trilhaFrontend: 'OpenSanca 2016',
    iniciar: function(){
        console.log(this.trilhaFrontend);
    }

};

var iniciar = temas.iniciar;
/*temas.iniciar();   
iniciar();   */


//************************************** Call **************************************//

var nome = 'OpenSanca ';
function trilhaFrontendCall(dia1, dia2, dia3, dia4) {  
	console.log(this.nome + dia1 + dia2 + dia3 + dia4);
}

/*trilhaFrontendCall('UX ', 'HTML ', 'CSS ', 'Javascript ');
*/
/*trilhaFrontendCall.call({nome: 'Trilha Frontend '}, 'UX ', 'HTML ', 'CSS ', 'Javascript ');  
*/

//************************************** Apply **************************************//

var nome = 'OpenSanca ';
function trilhaFrontendApply(dia1, dia2, dia3, dia4) {  
	console.log(this.nome + dia1 + dia2 + dia3 + dia4);
}
/*trilhaFrontendApply('UX ', 'HTML ', 'CSS ', 'Javascript ');
trilhaFrontendApply.apply({nome: 'Trilha Frontend '}, ['UX ', 'HTML ', 'CSS ', 'Javascript ']);  
*/

//************************************** Bind **************************************//

var nome = 'OpenSanca ';
function trilhaFrontendBind(dia1, dia2, dia3, dia4) {  
	console.log(this.nome + dia1 + dia2 + dia3 + dia4);
}
var somenteThisAlterado = trilhaFrontendBind.bind({nome: 'Trilha Frontend '});  
var alterarThisPrimeiroParametro = trilhaFrontendBind.bind({nome: 'Trilha Frontend '},'User Experience ');  

/*somenteThisAlterado('UX ', 'HTML ', 'CSS ', 'Javascript '); */
/*alterarThisPrimeiroParametro('HTML ', 'CSS ', 'Javascript ');
*/


//************************************** Closures **************************************//
//Contador global
/*var counter = 0;  
var element = document.getElementById('button');

element.onclick = function() {  
    counter++;

    if (counter === 1) {
        console.log("Dia 1 = UX!");
    }
    else if (counter === 2) {
        console.log("Dia 2 = HTML!");  
    }
    else if (counter === 3) {
        console.log("Dia 3 = CSS!");  
    }
    else if (counter === 4) {
        console.log("Dia 4 = JS!");  
    }
    else{
        console.log("Acabou!"); 
    }
};
*/
//Com Closures
/*var element = document.getElementById('button');
element.onclick = (function() {
    var counter = 0;

    return function(e) {  // essa função é o Handler do evento click
        counter++;          // e vai enclausurar o contador acima.

        if (counter === 1) {
	        console.log("Dia 1 = UX!");
	    }
	    else if (counter === 2) {
	        console.log("Dia 2 = HTML!");  
	    }
	    else if (counter === 3) {
	        console.log("Dia 3 = CSS!");  
	    }
	    else if (counter === 4) {
	        console.log("Dia 4 = JS!");  
	    }
	    else{
	        console.log("Acabou!"); 
	    }
    };
})();*/


//************************************** Strict Mode **************************************//
/*function concatena(a, a, c){ // !!! erro de sintaxe
  "use strict";
  return a + a + c; // errado se este código executasse
}
console.log(concatena(1, 2, 3));*/


//************************************** IIFE **************************************//
/*var openSancaIIFE = (function(trilha){
 // corpo da função
 	console.log("OpenSanca: " + trilha); // Alex
}("Trilha Frontend"));*/


//************************************** Orientação a Objetos **************************************//
function Trilha () {
	var nome;

	this.setNome = function (vNome) {
		this.nome = vNome;
	}
 
	this.mostraDados = function () {
		console.log("OpenSanca: " + this.nome);
	}
}

var Trilha = new Trilha();
Trilha.setNome("Trilha Frontend");
Trilha.mostraDados();