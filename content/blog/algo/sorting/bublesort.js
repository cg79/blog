function buble(arr) {
	var aux = null;
	for(var i=0;i< arr.length;i++) {
		for(var j=i+1;j< arr.length;j++) {
			if(arr[i]> arr[j]) {
				aux = arr[i];
				arr[i] = arr[j];
				arr[j] = aux;
			}
		}	
	}
}

var arr = [3,2,1];
buble(arr);