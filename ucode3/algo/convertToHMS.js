function convertToHMS(s) {
	const h = Math.floor(s / 3600);
    s = s - (h*3600);

	const m = Math.floor(s / 60);
    s = s - (m*60);

    return `${h}:${m}:${s}`;
}
	

	console.log(convertToHMS(1));
	console.log(convertToHMS(60));
	console.log(convertToHMS(61));
	console.log(convertToHMS(120));
	console.log(convertToHMS(3600));
	console.log(convertToHMS(3700));
	console.log(convertToHMS(1000));
	console.log(convertToHMS(10000));