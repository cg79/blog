
[5,3,6,1]
-----------------------
[5]
[5,3]
[5,3,6]
[5,3,6,1]

5 + 6 + 1




[3]
[3,6]
[3,6,1]

2 * 3 + 1

[6]
[6,1]

+ 6 + 1

[1]

= 27



[5,3,7,1]
-----------------------
[5]
==5

[5,3]
[3]
==6

=== 5* 1 + 3* 2



[5,3,7]
[3,7]
[7]
==13

[5,3,7,1]
[3,7,1]
[7,1]
[1]

= 4

=== 28





function getArrays(source, count) {
	var start = 0;
	var end = count;
	var response = [];


	while((count + start) <= source.length) {
		response.push(source.slice(start, start + count));
		start++;
	}

	return response;

}

var sumSubarrayMins_my = function(arr) {
	var sum = 0;
	var rArrays = [];
    for (var i = 1; i < arr.length +1; i++) {
    	rArrays = getArrays(arr,i);

    	for (var k = 0; k < rArrays.length; k++) {
    		sum += Math.min(...rArrays[k]);

    	}

    }

    return Math.pow(10,9) % sum + 7;
};


//sumSubarrayMins([3,1,2,4]);


Array.prototype.peek = function() {
	return this[this.length-1];
}

var sumSubarrayMins = function(A) {
	var result = 0;
        var stack = [-1];
        var dp = [0];

        var result = 0; 
        var M = 1e9 + 7;
        var sPeek = 0;
        var el = 0;
        for (var i = 0; i < A.length; i++) {
            sPeek = stack.peek();
            el = A[i];
            while (sPeek != -1 && el <= A[sPeek]) {
                stack.pop();
                sPeek = stack.peek();

            }
            var dpPrev = dp[sPeek + 1];
            var iMinusSPeek = i - sPeek;
            dp[i + 1] = (dpPrev + iMinusSPeek * el) % M;
            stack.push(i);
            console.log(stack);
            console.log(dp);
            console.log('\n');

            result += dp[i + 1];
            result %= M;
        }
        return result;
    }




//sumSubarrayMins([3,1,2,4]);











