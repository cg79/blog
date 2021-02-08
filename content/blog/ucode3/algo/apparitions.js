var n = 11;
var k = 3;
var numbers = [6, 5, 2, 6, 6, 2, 1, 7, 3, 3, 3];

countApparition = (arr) => {
	const counter = {};
	arr.reduce((ac, el) => {
		ac[el] = ac[el] ? ac[el] + 1 : 1;
		return ac;
	}, counter);

	return counter;
}

sortByApparition = (obj) => {
	const keysSorted = Object.keys(obj).sort((a, b) => obj[a] < obj[b] ? 1 : -1);
	return keysSorted;
} 

solveApparition = (arr, k) => {
	const counter = countApparition(arr);
	const solution = sortByApparition(counter).slice(0,k);
	return solution;
}

solveApparition(numbers, k)