Array.prototype.seek = function () {
  return this[this.length - 1] || 0;
};

var maxAreaStack = function (arr) {
  //debugger;
  var stack = [];
  var el = 0;
  var seekel = 0;

  var max = 0;
  // debugger;

  for (var i = 0; i < arr.length; i++) {
    el = arr[i];

    while (stack.length && el < stack.seek().h) {
      var sel = stack.pop();
      var surface = (i - sel.i) * sel.h;
      if (surface > max) {
        max = surface;
      }
    }

    stack.push({ i, h: el });
  }

  var right = null;

  if (stack.length) {
    right = stack.pop();

    while (stack.length) {

      var sel = stack.pop();
      var surface = (right.i - sel.i) * sel.h;

      if (surface > max) {
        max = surface;
      }
    }
  }

  return max;
};

var maxArea = function(arr) {
  var i=0;
  var j = arr.length -1;

  var surface = 0;
  
  while(i<j) {
    surface = Math.max(surface, (j-i) * Math.min(arr[i], arr[j]));
    if(arr[i]<arr[j]) {
      i ++;
    } else {
      j--;
    }

  }

  return surface;
}



module.exports = maxArea;
