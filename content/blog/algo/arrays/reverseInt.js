/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(n) {
    if(n === 0) return 0;
    var response = 0;
	var modulo = 0;
    
    var isNegative = false;
    if(n<0) {
        isNegative = true;
        n = -1 * n;
    }
    var max = Math.pow(2,31) -1;


	while(n>0) {
		modulo = n % 10;
		response =  response * 10 + modulo;
		n = (n-modulo) / 10;
        if(response > max) {
            return 0;
        }


	}
	return isNegative ?  (-1) * response : response;
};

