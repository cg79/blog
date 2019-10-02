function test1(arr) {
debugger;
var i= arr.length-1;	
while(i>-1) {
   var p = (i+1)*2 -1;
	arr[p] = arr[i] * arr[i];
	arr[p-1] = arr[i];
	i--;
}

}