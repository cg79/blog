


function person(nume,varsta) {
	var x = 5;
	this.nume=nume;
	this.varsta=varsta;
}

function person1(nume,varsta) {
	const result = {
		nume:nume,
		varsta:varsta
	};
	return result;
}

const persoane = [];

functio addp(n,v) {
	const p1 = person1(n,v);
	persoane.push(p);
}

addp('s',5)
addp('s',5)
addp('s',5)

const s1 = persoane.sort(function(a, b){
   return a.age-b.age
});
const s2 = persoane.sort(function(a, b){
   return b.age-a.age
});
console.log(s1);
console.log(s2);
