

// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

// It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.


// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.

var dict = {};
function candidates(arr, target) {
    arr.forEach(element => {
         dict[element] = {
             rest: target % element,
             count: target / element >> 0
         };   
    });

    var result = [];
    var i = 0;
    var el = 0;
    var dictEl = null;
    while (i < arr.length) {
      el = arr[i];
        if(el === target) {
            result.push(el);
            i++;
            continue;
        }

        dictEl = dict[el];    
        if(dict[dictEl.rest]) {
            result.concat([el, ]);
        }




      i++;
    }
    return result;
  }
  

function candidates(arr, target, index) {
  var result = [];
  var i = 0;
  var el = 0;
  while (i < arr.length) {
    el = arr[i];

    i++;
  }
  return result;
}
