

//filter

var arr = [1,1,1,2,2,2];

var result = arr.filter(el => el !== 2)



var result = arr.filter(function(el) {
    return el !== 2;
})

[1,1,1,2,2,2]


//------------------------------

//map

var arr1 = [1,2,3]; // ==> [1,4,9]
var result1 = arr1.map(el => el * el)


var result1 = arr.map(function(el) {
	debugger;
    return el * el;
})

var mapFct = function(el) {
	debugger;
    return el * el;
}

var result1 = arr.map(mapFct)

//------------------------------

//find
[1,2,3].find(el => el === 3)

//------------------------------
//reduce

[1,2,3].reduce((acc, el) => { 
    debugger; 
    return acc + el;
},1)


//object literal
//1
var person = {
    age: 21,
    nume : 'ion',
    geaca: {
        culoare: 'rosu'
     }


}
person.geaca.culoare


//2 -- fct care returneaza un literal object
function person(name) {
    var response = {
        name: name
    }
  return response;
}
var x = person('ion')


var x = person('ion')
var y = person('ion')
x
y
x.age= 9;
y
x.palarie = 'alb'
x
x['pantof'] = 9;
x
y

//3 functional constructor

function om(name) {
    debugger;
	this.name = name;
    this.age = 41;    
}

var omulte = new om('ion');



//--------------------------------------

//check the "this'
var om1 ={
	varsta: 10,
	imbatraneste: function(ani) {
		debugger;
    	this.varsta += ani;

    	return this.varsta;
	}
}


var om2 ={
	varsta: 11,
	imbatraneste: (ani) => {
	    debugger;
	    this.varsta += ani;
	    return this.varsta;
	}
}


//-------------------
var om3_test ={
	varsta: 12,
	imbatraneste: (ani) => {
	    debugger;
	    this.varsta += om1.imbatraneste(ani);
	    return this.varsta;
	}
}


var om4_test ={
	varsta: 13,
	imbatraneste: (ani) => {
	    debugger;
	    this.varsta += om2.imbatraneste(ani);
	    return this.varsta;
	}
}

var om5_test ={
	varsta: 12,
	imbatraneste: function(ani) {
	    debugger;
	    this.varsta += om1.imbatraneste(ani);
	    return this.varsta;
	}
}


var om6_test ={
	varsta: 13,
	imbatraneste: function(ani) {
	    debugger;
	    this.varsta += om2.imbatraneste(ani);
	    return this.varsta;
	}
}

function person(varsta) {
	this.varsta = varsta;
	this.imbatraneste = function(ani) {
	    debugger;
	    this.varsta += ani;

	    return this.varsta;
	}

	this.imbatraneste1 = (ani) => {
	    debugger;
	    this.varsta += ani;
	    
	    return this.varsta;
	}

	this.imbatraneste2 = (om) => {
	    debugger;
	    this.varsta += om.imbatraneste(1);
	    
	    return this.varsta;
	}

	this.imbatraneste3 = (om) => {
	    debugger;
	    this.varsta += om.imbatraneste1(1);
	    
	    return this.varsta;
	}
}





const sum = (arr) =>  arr.reduce((acc, el) => acc+ el);	
	









