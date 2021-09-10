

function add(a, b) {
	debugger;
	return a + b;
}

// console.log(add(4,5));


const axios = require('axios');


const inputData = ["The Doors,The Doors", 
"Love,Forever Changes", 
"Ramones,Ramones", 
"Eagles,Hotel California"]
function getYear(arr) {
	let res = 0;
	let i = 0;
	const yearsArray = [];
	while (i < arr.length) {
		res = arr[i].year;
		if (res) {
			yearsArray.push(res);
		}
		i++;
	}

	return Math.min(...yearsArray)
}

async function getAlbumInfo(artist, album) {
	const url = `https://api.discogs.com/database/search?artist=${artist}&release_title=${album}&token=sgxhJVmKLgxFLGlAoOfwWcUmzPrTQZKBODbHJcYn`;

	// console.log(url);
	const response = await axios.get(url);
	return getYear(response.data.results);
}


const customSort = (value1, value2) => {
	if (value1.year > value2.year) {
		return 1;
	}
	if (value1.year < value2.year) {
		return -1;
	}
	if (value1.artist > value2.artist) {
		return 1;
	}
	if (value1.artist < value2.artist) {
		return -1;
	}

	if (value1.album > value2.album) {
		return 1;
	}
	
	return -1;
};



async function sortMusicCollection(albums) {

	//token = "sgxhJVmKLgxFLGlAoOfwWcUmzPrTQZKBODbHJcYn"
	// const data1 = await getAlbumInfo("The Beatles", "Please Please Me");
	// console.log(data1);

	// {
	// 	'unu': 2001,
	// 	'doi':2002,
	// 	2003: ['asd', "sdasdewed"]
	// }

	// {
	// 	3, ['ana', 'maria', 'pandele']
	// }

	let artist = "";
	let album = "";
	let abb = "";
	let year = 0;

	// let dict = {};
	const arr = [];
	for (let i = 0; i < albums.length; i++) {
		abb = albums[i].split(",");
		artist = abb[0];
		album = abb[1];
		year = await getAlbumInfo(artist, album);
		arr.push({artist, album, year: parseInt(year)})

		// if (!dict[year]) {
		// 	dict[year] = [];
		// }
		// dict[year].push({
		// 	artist,
		// 	album,
		// });
		// [artist, album] = abb;

	}

	// debugger;
	arr.sort(customSort);

	// let acc = [];
	 const response =  arr.reduce((acc, el) =>  {
		 acc.push(el.artist + "," + el.album);
		 return acc;
		}, [] );

		return response;

}


console.log(sortMusicCollection(inputData));