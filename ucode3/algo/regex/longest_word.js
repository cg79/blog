function largestWord(str) {
 var x = str.match(/\w+/g);
 var y = x.map(function(t) { return t.length });
 var z = x[y.indexOf(Math.max.apply(Math, y))];
 return z;
 }