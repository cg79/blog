

Array.prototype.seek = function() {

	return this[this.length -1 ] || 0;
}

var maxArea = function(arr) {
	//debugger;
	var stack = [];
	var el = 0;
	var seekel = 0;

	var max = 0;
	var tempArea = 0;
	var left = 0;
	debugger;

	for(var i = 0; i< arr.length; i++) {
		el = arr[i];

		while(stack.length && el > stack.seek().h) {
			var sel = stack.pop();
			var surface = (i - sel.i) * sel.h;
			if(surface > max) {
				max = surface;
			}
		}

		
		stack.push({i, h: el});

	}

	var i  = arr.length -1;

	while(stack.length) {
			var sel = stack.pop();
			var surface = (i - sel.i) * sel.h;
			if(surface > max) {
				max = surface;
			}
		}


	return max;

}

module.exports = maxArea;

