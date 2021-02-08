function aranjareCaracter(sir, caracter) {
	var aparitiiA = sir.match(new RegExp(caracter, 'gi')).length;
	var nona = sir.length - aparitiiA;
	if (aparitiiA < nona + 1) return true;
	if (aparitiiA > nona + 1) return false;
	return true;
}

function posibilaAranjare(sir) {
	var caracterLengthObject = sir.split("").reduce((ac, el) => {
		if (ac[el]) {
			ac[el] = ac[el] + 1;
		} else {
			ac[el] = 1;
		}
		return ac;
	}, {});
debugger;
	var caracterCuCeleMaiMulteAparitii = (Object.keys(caracterLengthObject).sort((a, b) => caracterLengthObject[a] < caracterLengthObject[b] ? 1 : -1))[0];

	return aranjareCaracter(sir, caracterCuCeleMaiMulteAparitii);

}