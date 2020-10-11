

Object.defineProperty(Array.prototype, 'last', {
  get() {
    return this[this.length - 1] || {i: 0, el:0};
  },
});



var largestRectangleArea = function (arr) {
  if (!arr.length) {
    return 0;
  }

  if (arr.length === 1) {
    return arr[0];
  }

  var max = 0;
  var stack = [
    {
      i: 0,
      el: arr[0],
    },
  ];
  var el = 0;

  for (var i = 1; i < arr.length; i++) {
    el = arr[i];
    if (stack.length === 0 || el > stack.last.el) {
      stack.push({
        i,
        el,
      });
      continue;
    }
    var popped = null;

    while (stack.length && stack.last.el > el) {
      popped = stack.pop();
      max = Math.max(max, (i - popped.i) * popped.el);
    }

    if(popped) {
        stack.push({
            i: popped.i, el,
        });    
    }
    
  }

  while (stack.length) {
    popped = stack.pop();
    max = Math.max(max, (i - popped.i) * popped.el);
  }

  return max;
};



module.exports = {
  largestRectangleArea,
};
