function kadane(arr) {

	var temp = {
		sum: 0,
		start: 0,
	};
	var result = {
		sum: 0,
		start: 0,
		end: 0,
	};

	for (var i=0;i< arr.length;i++) {
		temp.sum += arr[i];

		if(temp.sum > result.sum) {
			result.sum = temp.sum;
			result.start = temp.start;
			result.end = i;
		} else {
			temp.start = i+1;
			temp.sum =0;

		}

	}

	return result;

}