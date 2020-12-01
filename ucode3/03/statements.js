var arr = [{name: 'ion'}, {name : "maria"}]

function listare0(arr) {
	for(var i=0;i< arr.length;i++) {
       console.log(arr[i].name);
	}
}



//exemplu cu continue;
function listare_continue(arr) {
	for(var i=0;i< arr.length;i++) {
		if(arr[i].age< 5) {
			continue;
		}
       console.log(arr[i].name);
	}
}

//exemplu cu break;
function listare_break(arr) {
	for(var i=0;i< arr.length;i++) {
		if(arr[i].age< 5) {
			break;
		}
       console.log(arr[i].name);
	}
}


function listare(arr) {
	var i = 0;
	debugger;
	while(i< arr.length) {
		console.log(i, arr[i]);
		i++;
	}
}

function listare1(arr) {
	var i = 0;
	debugger;
	do{
		console.log(i, arr[i]);
		i++;
	}
	while(i< arr.length)
}

function if1(person) {
	// person = {name : 'ana', bani: 14 }
	debugger;
	if(person.bani > 12) {
		return true;
	} else {

		return false;
	}
}

function if2(person) {
	// person = {name : 'ana', bani: 14 }
	debugger;
    return person['bani'] < 12 ? false: true;  

    //see ternary operator
	
}

function if3(person) {
	// person = {name : 'ana', bani: 14 }
	debugger;
    if(person.bani < 12) {
    	return false;
    }

    return true;
	
}




