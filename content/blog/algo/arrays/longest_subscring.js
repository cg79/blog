function det(arr, index) {

	var dict = {};
	var char = '';
	
	var resp = "";

	while( index< arr.length ) {
		
			char = arr[index];

		 if(dict[char]) {
		 	return {
		 		resp,
		 		index
		 	}
		 }

		 resp += char;
		 dict[char] = char;

		 index++;

	}

	return {
		resp,
		index,
	}

} 


var lengthOfLongestSubstring = function(s) {
	var dict = {};
	var response = '';
	var index  = 0;
	while(index < s.length) {
		var temp = det(s, index);

		index = index+1;
		if(temp.resp.length > response.length ) {
			response = temp.resp;
		}

	}

	return response.length;
	    
};

