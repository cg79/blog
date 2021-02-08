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

var matrice1= matrix(2, 3);