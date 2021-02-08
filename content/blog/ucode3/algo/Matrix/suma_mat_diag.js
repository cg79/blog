function getRandomInt(max) {
return Math.floor(Math.random() * Math.floor(max));
}

function matrix(n, m){
   var i, j, mat=[];
       for(i=0; i<n; i++){
       mat[i]=[];
       for(j=0; j<m; j++){
           mat[i][j]=getRandomInt(1000);
           //console.log(mat[i][j]);
       }
   }
   return mat;
}

function calcSumaMatDiag(mat){
	let sum  = 0;   
    for(var i=0; i<mat.length; i++){
   		sum += mat[i][i];
   	}
   return sum;
}

function sumaMatDiag(n){
   const mat = matrix(n,n);
   return calcSumaMatDiag(mat);
}


console.log(sumaMatDiag(7));