

var ma = function(arr) {
	var result = [];
	var stack = [];
	for(var i =0;i< arr.length;i++) {
		while(stack.length > 0 && stack[stack.length -1] > arr[i] ) {
			stack.pop();
		}
		stack.push(arr[i]);
	}
	return stack;
}

// ma[3,1,2,4]




var monotoneStackDecreasingRight = function(arr) {
	var result = [];
	var previous_less = [-1];
	var stack = [];
	for(var i =0;i< arr.length;i++) {
		while(stack.length > 0 && stack[stack.length -1] > arr[i] ) {
			result.push({
				n: stack[stack.length -1],
				nn: arr[i]
			});
			stack.pop();
		}
		stack.push(arr[i]);
	}
	return result;
}



// monotoneStackDecreasingRight([6,2,9,4,3,1,5])

monotoneStackDecreasingRight([2, 9, 7, 8, 3, 4, 6, 1])

var monotoneStackDecreasingRight = function(arr) {
	var result = [];
	var previous_less = [-1];
	var stack = [];
	for(var i =0;i< arr.length;i++) {
		while(stack.length > 0 && stack[stack.length -1] > arr[i] ) {
			result.push({
				n: stack[stack.length -1],
				nn: arr[i]
			});
			stack.pop();
		}
		stack.push(arr[i]);
	}
	return result;
}

monotoneStackDecreasingRightIndex = function(arr) {
	var result = [];
	var previous_less = [-1];
	var stack = [];
	for(var i =0;i< arr.length;i++) {
		while(stack.length > 0 && arr[stack[stack.length -1]] > arr[i] ) {
			result.push({
				n: arr[stack[stack.length -1]],
				nn: i
			});
			stack.pop();
		}
		stack.push(i);
	}
	return result;
}

//monotoneStackDecreasingRightIndex([3, 1, 2, 4, 3])
