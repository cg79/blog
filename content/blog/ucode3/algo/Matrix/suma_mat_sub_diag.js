function getRandomInt(max) {
return Math.floor(Math.random() * Math.floor(max));
}

function matrix(n, m){
   var i, j, mat=[];
       for(i=0; i<n; i++){
       mat[i]=[];
       for(j=0; j<m; j++){
           mat[i][j]=getRandomInt(5);
           //console.log(mat[i][j]);
       }
   }
   return mat;
}

function calcSumaMatSubDiagonal(mat){
debugger;
  let sum  = 0;   
    for(var i=1; i<mat.length; i++){
      for(var j=0; j<i; j++){
        sum += mat[j][i];
      }
    }
   return sum;
}

function sumaMatDiag(n){
   const mat = matrix(n,n);
   return calcSumaMatSubDiagonal(mat);
}


console.log(sumaMatDiag(3));