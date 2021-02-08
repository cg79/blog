//1.Sa se creeze un obiect magazin doar cu proprietatea nume folosind function constructor
//https://codeburst.io/various-ways-to-create-javascript-object-9563c6887a47

function magazin(name) {
	this.name = name;
}

let m = new magazin('asd');
console.log(m);

// -------------------------------------------------------------

//2. sa se modifice  obiectul cu inca o functie care sa returneze numele magazinului
function magazin1(name) {
	this.name = name;

	this.getName = function () {
		return this.name;
	}
}

let m1 = new magazin1('asd');
console.log(m1.getName());

// -------------------------------------------------------------

//3. sa se creeze o clasa raft  folosind class vezi "Create JavaScript Object using ES6 classes"
//raful va avea o lista de produse si un numar de identificare. 1,2, 3, etc 
//(aceasta clasa va fii folosita la magazine)

class raft {
	constructor(index) {
		this.index = index;
		this.products = [];

	}

}
let r = new raft(1)

// 4. magazinul sa fie decorat cu o functie adaugareRaft(value)

function magazin2(name, rafturi = []) {
	this.name = name;
	this.rafturi = rafturi;
	this.adaugareRaft = function (value) {
		const r = new raft(value);
		this.rafturi.push(r);
	}
}

let m2 = new magazin2('asd');
m2.adaugareRaft(1);
console.log(m2);

// 5. sa se serializeze magazinul ca si string. JSON.stringify se foloseste

const mAsString = JSON.stringify(m2);
console.log(mAsString);

// 6. sa se creeze o noua instanta de magazin folosind stringul de mai sus. Se foloseste JSON.parse(string);

let m3 = JSON.parse(mAsString);
console.log(m3);

let m4 = new magazin2(m3.name, m3.rafturi);
console.log(m4);

// 7. sa se adauge la obiectul magazin o proprietate owner . aceasta sa fie privata.  exemplu de mai jos e la fel. se vede ca secretName nu e vizibil inafara daca verificam o instanta

// function Vehicle(name, maker) {
//    this.name = name;
//    this.maker = maker;

//    let secretName = '';

//    this.changeSecretName = function(newName) {
//      debugger;
//      secretName = newName;
// 	}

//    this.getSecretName = function() {
// 	   return secretName;
//     }
// }

function magazin3(name, rafturi = []) {
	var owner = '';
	this.name = name;
	this.rafturi = rafturi;
	this.adaugareRaft = function (value) {
		const r = new raft(value);
		this.rafturi.push(r);
	}
}

let m5 = new magazin3('asd');
m5.adaugareRaft(1);
console.log(m5);

// 8. obiectul raft va avea o functie adugareProdus
// 9. stergereProdus
// 10. sortareProdus
// 11. getTotalPrice (suma preturilor de pe fiecare produs). se foloseste reduce
// 12. magazinul va avea deasemenea getTotalPrice 
// 13. raftul va avea o metoda editProduct(newProduct). HINT: se cauta produsul in lista se i se modifica proprietatile. se foloseste find
// 14. raftul va avea o metoda replaceProduct(oldProduct, newProduct). HINT: se cauta produsul in lista se i se modifica proprietatile. se foloseste find si products[index]

// 15. magazinul va avea o metoda de getProducts care concateneaza toate produsele de pe fiecare raft

const TIPURI_PRODUSE = {
	JUCARII: 1,
	SPORT: 2,
	HAINE: 3
};

function product(data) {
	const {
		id,
		name,
		pret = 0,
		tip,
		code
	} = data;
	const produs = {
		id,
		name,
		pret,
		tip,
		code
	};

	return produs;
}

class raft1 {
	constructor(raftInfo) {
		const {
			index,
			products = [],
			tip
		} = raftInfo;
		this.index = index;
		this.products = products || [];
		this.tip = tip;
	}

	adaugareProdus = (produsData) => {
		const p = product(produsData);
		this.products.push(p);
	}
	stergereProdus = (code) => {
		this.products = this.products.filter(el => el.code !== code);
	}
	editProdus = (code, newPret) => {
		const p = this.products.find(el => el.code === code);
		p.pret = newPret;
	}
	sortare = () => {
		this.products = this.products.sort((a, b) => a.index - b.index);
	}
	getTotalPrice = function () {
		const totalPrice = this.products.reduce(function (total, el) {
			return total + el.pret;
		}, 0);
		return totalPrice;

	}
}

function magazin4(name, rafturi = []) {
	var owner = '';
	this.name = name;
	this.rafturi = rafturi;
	this.adaugareRaft = function (value) {
		const nrRafturi = this.rafturi.length;
		const raftInfo = {
			index: nrRafturi,
			tip: value.tip
		}
		const r = new raft1(raftInfo);
		this.rafturi.push(r);
	}
	this.getTotalPrice = function () {
		const totalPrice = this.rafturi.reduce(function (total, el) {
			return total + el.getTotalPrice();
		}, 0);
		return totalPrice;
	}
	this.adaugareProdus = function (value) {

		const tipProdus = value.tip;
		//find the raft which will handle this type of products
		const r = this.rafturi.find(el => el.tip === tipProdus);
		if (!r) {
			throw "no raft found for ", tipProdus;
		}

		const p = product({
			id: r.products.length,
			tip: tipProdus,
			pret: value.pret,
			code: value.code
		});
		r.adaugareProdus(p);
	}

	this.stergereProdus = (tip, code) => {

		//find the raft which will handle this type of products
		const r = this.rafturi.find(el => el.tip === tip);
		if (!r) {
			throw "no raft found for ", tipProdus;
		}
		r.stergereProdus(code);
	}

	this.editProdus = (tip, code, newPrice) => {

		//find the raft which will handle this type of products
		const r = this.rafturi.find(el => el.tip === tip);
		if (!r) {
			throw "no raft found for ", tipProdus;
		}
		r.editProdus(code, newPrice);
	}

	this.getProducts = () => {
		return this.rafturi.reduce(function (list, r) {
			return list.concat(r.products);
		}, []);
	}

}

let m6 = new magazin4('polus');
m6.adaugareRaft({
	tip: TIPURI_PRODUSE.JUCARII
});
m6.adaugareRaft({
	tip: TIPURI_PRODUSE.HAINE
});
m6.adaugareRaft({
	tip: TIPURI_PRODUSE.SPORT
});

console.log(m6);

m6.adaugareProdus({
	tip: TIPURI_PRODUSE.HAINE,
	pret: 7,
	code: 'ASAK'
});

console.log(m6);

let tPrice = m6.getTotalPrice();
console.log(tPrice);

m6.editProdus(TIPURI_PRODUSE.HAINE, 'ASAK', 9);
tPrice = m6.getTotalPrice();
console.log(tPrice);

let products = m6.getProducts();
console.log(products);

m6.stergereProdus(TIPURI_PRODUSE.HAINE, 'ASAK');
console.log(m6);

tPrice = m6.getTotalPrice();
console.log(tPrice);

products = m6.getProducts();
console.log(products);