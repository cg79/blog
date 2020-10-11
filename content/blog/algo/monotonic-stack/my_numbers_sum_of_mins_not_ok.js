

Array.prototype.peek = function() {
	return this[this.length-1] ||  0;
}

//5,3


function aaa(arr) {
	var stack = [-1];
	var sum = arr[0];
	var dp = [0];
	var stackEl = 0;
	

	for(var i=0;i<arr.length;i++) {
		var el = arr[i];
		while(stack.peek() !== -1 && el < arr[stack.peek()]) {
			stack.pop();
		}

		stackEl = stack.peek();

		dp[i+1] = dp[stackEl +1] + (i -stackEl) * el;  

		console.log(dp, stack);
		sum += dp[i+1];

		stack.push(i);

	}

	return sum;

}

aaa([5,3])