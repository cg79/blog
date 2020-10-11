/**
 * @param {string[]} strs
 * @return {string}
 */

var checkWord = function (dictsource, word) {
  var dict = {};
  var ok = false;
  var x = null;
  var y = null;
  (' ' + word).split('').reduce((a, b) => {
    x = dictsource[b];
    if (x) {
      if (x[a]) {
        y = dict[b];
        if (!y) {
          y = {};
          dict[b] = y;
        }
        y[a]=1;
        ok = true;
      }
    }
    return b;
  });

  return ok ? dict : null;
};
var longestCommonPrefix = function (words) {
  if (!words || !words.length) {
    return '';
  }
  if (words.length === 1) {
    return words[0];
  }
  //var L = words.length;
  var dict = {};
  //var last = words.splice(words.length-1)[0];
  var word = words[0];
  var response = '';

  var dict = {};
  var x = null;

  (' ' + word).split('').reduce((a, b) => {
    x = dict[b];
    if (!x) {
      x = {};
      dict[b] = x;
    }
    x[a] = 1;
    return b;
  });
  console.log('dict', dict);
  //word.split('').forEach(el => dict[el] = 1);

  for (var i = 1; i < words.length; i++) {
    word = words[i];
    dict = checkWord(dict, word);
    if (!dict) return '';
  }

  return Object.keys(dict).reduce((acc, el) => (acc += el), '');
};
module.exports = { longestCommonPrefix };
