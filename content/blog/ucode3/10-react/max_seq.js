function maxSeq(arr) {
  //[2,2,3,3,3] ==> [1,2,1,2,3]

  if (!arr.length) {
    return [];
  }
  var maxValue = 0;
  var result = [1];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      result.push(result[i - 1] + 1);
    } else {
      result.push(1);
    }
  }

  return result;
}

function maxSeqConsecutive(arr) {
    //[3,4,5,6] ==> [1,2,3,4]
  
    if (!arr.length) {
      return [];
    }
    var result = [1];
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] === arr[i - 1] + 1) {
        result.push(result[i - 1] + 1);
      } else {
        result.push(1);
      }
    }
  
    return result;
  }

function getMaxSeq(arr) {
  debugger;
  var analyzedArr = maxSeqConsecutive(arr);
  var max = Math.max(...analyzedArr);
  console.log(max);
  var position = analyzedArr.indexOf(max);

  var startPosition = position - max + 1;

  var response = arr.slice(startPosition, startPosition + max);
  return response;
}

//cu obiecte

// function maxSeq(arr) {

// if(!arr.length) {
//     return [];
// }
// var result = [{
//     index: 0,
//     v: 1
// }];
// for(var i=1;i<arr.length;i++) {
//     if(arr[i] === arr[i-1]) {
//         result.push({v: result[i-1].v +1, index: i});
//     } else {
//         result.push({v: 1, index:i});
//     }
// }

// return result;

// }

// maxSeq([2,2,2,3]).reduce((a,b) => a.v> b.v ? a:b)



///////////////  folosind functie din afara

function maxSeq(arr, checkConditionFunc) {
    //[2,2,3,3,3] ==> [1,2,1,2,3]
    
    if(!arr.length) {
        return [];
    }
    var result = [{
        index: 0,
        v: 1
    }];
    for(var i=1;i<arr.length;i++) {
        if(checkConditionFunc(arr[i-1],arr[i])) {
            result.push({v: result[i-1].v +1, index: i});
        } else {
            result.push({v: 1, index:i});
        }
    }
    
    return result;
    
        
    }
    debugger;maxSeq([1,2,3,4], (e0,e1) => e0 === e1 -1)