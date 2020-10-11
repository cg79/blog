

function zig(str, n) {
	var mat = [];
	var dir = "down";
	var x = 0;
	var y = 0;
	mat[y] = [];
debugger;

	for(var i=0;i< str.length;i++) {
		mat[y][x] = str[i];

		if(dir === "down") {
			y++;
            if(!mat[y]) {
                mat[y] = [];
            }
			
		} else {
			y = y-1;
			x++;
		}

		if(y === n-1) {
			dir = "up";
            
		}

		if(y === 0) {
			dir = "down";
            y=0;


		}


	}
return mat;

}



function startZig(str, n) {

	var mat = zig(str,n);

	var response = mat.reduce((accarr, elarr) => accarr += (elarr.reduce((acc, el) => acc += el || '', "")), "");

	return response;
}









