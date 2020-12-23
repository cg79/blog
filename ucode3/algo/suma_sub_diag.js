//matrice random
function randomMatrix(n) {
   var mat = [];
   for (var i = 0; i < n; i++) {
      mat[i] = [];
      for (var j = 0; j < n; j++) {
         mat[i][j] = Math.floor(Math.random(1, 10) * 10);
      }
   }
   return mat;
}

function sumaSub(m) {
   var s = 0;

   for (var i = 1; i < m.length; i++) {
      for (var j = 0; j < i; j++) {
         s += m[i][j];

      }

   }
   return s;
}