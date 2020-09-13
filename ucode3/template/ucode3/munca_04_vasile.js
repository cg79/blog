// 1. WAF which logs to the console the numbers smaller than n;  ex: show(4) ==> 0,1,2,3

// use for syntax

function smallerThanElement(number) {
  for (i = 0; i < number; i++) {
    console.log(i);
  }
}
smallerThanElement(4);

// or //

function smallerThanElement3(number) {
  var array = [];
  for (i = 0; i < number; i++) {
    array.push(i);
  }
  console.log(array);
}
smallerThanElement3(4);

// use while syntax

function smallerThanElement2(number) {
  var text = "";
  var i = 0;
  while (i < number) {
    text += i;
    i++;
  }
  text = text.split("");
  console.log(text);
}
smallerThanElement2(4);

// use map

// use forEach

function consoleLogElements(number) {
  var array = [];
  for (i = 0; i < number; i++) {
    return i;
  }
  array.forEach(function (item) {
    console.log(item);
  });
}
consoleLogElements(3);

// 2. WAF which logs to the console the numbers smaller than n only if number is even;  ex: show(4) ==> 0,2; HINT use if

function smallerThanElement5(number) {
  for (i = 0; i < number; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
smallerThanElement5(7);

// use while syntax

function smallerThanElement8(number) {
  var i = 0;
  while (i < number) {
    i++;
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
smallerThanElement8(8);

// use map

// use forEach

// 3. WAF which logs to the console the numbers smaller than n and iterating over x steps;  ex: show(20, 3) ==> 3, 6, 9, 12, 15, 18

function smallerThanElement7(num) {
  var array = [];
  for (i = 3; i < num; i++) {
    array.push(i);
    i += 2;
  }
  console.log(array);
}
smallerThanElement7(20);

// use while syntax

// use map

// use forEach

// 4. the same as exercise 2 but the input will be an array

function smallerThanElement6(number) {
  var array = [];
  for (i = 0; i < number; i++) {
    if (i % 2 === 0) {
      array.push(i);
    }
  }
  console.log(array);
}
smallerThanElement6(7);

// 5. WAF which retuns the sum of elements from an array

function sumOfElFromArr(array) {
  var total = 0;
  for (i = 0; i < array.length; i++) {
    total += array[i];
  }
  console.log(total);
}
sumOfElFromArr([2, 4, 5, 7, 9, 11, 20]);

function sumOfElFromArr2(array) {
  var i = 0;
  var sum = 0;
  while (i < array.length) {
    sum += array[i];
    i++;
  }
  console.log(sum);
}
sumOfElFromArr2([2, 4, 5, 7, 9, 11, 20]);

function sumOfElFromArr3(array) {
  var sumOfElements = array.reduce(function (accumulator, item) {
    return accumulator + item;
  }, 0);
  console.log(sumOfElements);
}
sumOfElFromArr3([2, 4, 5, 7, 9, 11, 20]);

function sumOfElFromArr4(array) {
  var total = 0;
  array.forEach(function (item) {
    total += item;
  });
  console.log(total);
}
sumOfElFromArr4([2, 4, 5, 7, 9, 11, 20]);

//6. WAF which retuns the sum of elements from an array only if the value is multiple of x

function sumOfElFromArr5(array) {
  const arrayMultiple2 = array.filter(function (item) {
    if (item % 2 === 0) {
      return true;
    }
  });
  var sum = 0;
  for (i = 0; i < arrayMultiple2.length; i++) {
    sum += arrayMultiple2[i];
  }
  console.log(sum);
}
sumOfElFromArr5([2, 4, 5, 7, 9, 11, 20]);

function sumOfElFromArr6(array) {
  const arrayMultiple2 = array.filter(function (item) {
    if (item % 2 === 0) {
      return true;
    }
  });
  var sum = 0;
  var i = 0;
  while (i < arrayMultiple2.length) {
    sum += arrayMultiple2[i];
    i++;
  }
  console.log(sum);
}
sumOfElFromArr6([2, 4, 5, 7, 9, 11, 20]);

function sumOfElFromArr7(array) {
  const arrayMultiple2 = array.filter(function (item) {
    if (item % 2 === 0) {
      return true;
    }
  });
  var sum = 0;
  arrayMultiple2.forEach(function (item) {
    return (sum += item);
  });
  console.log(sum);
}
sumOfElFromArr7([2, 4, 5, 7, 9, 11, 20]);

function sumOfElFromArr8(array) {
  const arrayMultiple2 = array.filter(function (item) {
    if (item % 2 === 0) {
      return true;
    }
  });
  const sumOfArray = arrayMultiple2.reduce(function (accumulator, item) {
    return accumulator + item;
  }, 0);
  console.log(sumOfArray);
}
sumOfElFromArr8([2, 4, 5, 7, 9, 11, 20]);

// 7. rotate an array x times

/* 8. WAF which receive an array as input and returns another array  - every time the step will increase with 1. ex;
    [3,6,1,8,90,23,4,21,54,2,88, 1,2,3] ==> [3, 6,  8, 4, 88] */

/* 9. WAF which receive an array and returns the sum of numbers;
	the element from even position will be decreased with his position
	the element from ODD position will be INCREASED with his position */

function sumOfEvenNumbers(array) {
  var sum = 0;
  array.forEach(function (item, index) {
    if (item % 2 === 0) {
      sum += item - index;
    }
  });
  console.log(sum);
}
sumOfEvenNumbers([3, 5, 6, 4, 1, 9]);

function sumOfOddNumbers(array) {
  var sum = 0;
  array.forEach(function (item, index) {
    if (item % 2 !== 0) {
      sum += item - index;
    }
  });
  console.log(sum);
}
sumOfOddNumbers([3, 5, 6, 4, 1, 9]);

function sumOfEvenNumbers2(array) {
  var sumNumbers = array.reduce(function (accumulator, item, index) {
    if (item % 2 === 0) {
      return accumulator + (item - index);
    } else {
      return accumulator;
    }
  }, 0);
  console.log(sumNumbers);
}
sumOfEvenNumbers2([3, 5, 6, 4, 1, 9]);

function sumOfEvenNumbers3(array) {
  var sumNumbers = array.reduce(function (accumulator, item, index) {
    if (item % 2 !== 0) {
      return accumulator + (item - index);
    } else {
      return accumulator;
    }
  }, 0);
  console.log(sumNumbers);
}
sumOfEvenNumbers3([3, 5, 6, 4, 1, 9]);

// use for

// 10. WAF which returns the maximum element from an array

function maximumNumber(array) {
  let max = 0;
  array.forEach(function (i) {
    if (max < i) {
      return (max = i);
    } else {
      return max;
    }
  });
  console.log(max);
}
maximumNumber([13, 5, 6, 4, 1]);

function maximumElement(array) {
  let max = 0;
  array.forEach((i) => (max < i ? (max = i) : max));
  console.log(max);
}
maximumElement([13, 5, 6, 4, 1]);

// 11. WAF which returns the MINIMUM element from an array

function minimumElement(array) {
  let min = array[0];
  for (i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  console.log(min);
}
minimumElement([13, 5, 6, 4, 20]);

// 12. WAF with arr as input and returns the position of an element in array; e.g; [4,5,6,4], 6 ==> 2

function positionElement(number) {
  var array = [4, 5, 6, 4];
  var indexOfItem = array.indexOf(number);
  console.log(indexOfItem);
}
positionElement(6);

// 13. WAF with arr as input and returns ALL positions of an element in array; e.g; [4,5,6,4], 4 ==> [0,3]

function allPositionElement(number) {
  var indexArray = [];
  var array = [4, 5, 6, 4];
  array.forEach(function (item, index) {
    if (item === number) {
      indexArray.push(index);
    }
  });
  console.log(indexArray);
}
allPositionElement(4);

// 14. WAF WR the maximum number smaller than n by using multiplications with 2 (starts with 1);

// function maximumNumber(number) {
//   for (i = 1; i < number; i + 2) {
//     i = i * 2;
//     if (i > number) {
//       return;
//     }
//     var finalNum = i;
//     finalNum = number - i;
//     console.log(finalNum);
//   }
// }
// maximumNumber(65);

// 15. WAF wich receive 2 arrays; combine the two arrays; ([1,2,3], [7,8,9] ) ==> [1,7,2,8,3,9]

function combineArray(array1, array2) {
  for (i = 0; i < 1; i++) {
    console.log(array1.concat(array2));
  }
}
combineArray([1, 2, 3], [7, 8, 9]);

function combineArray2(array1, array2) {
  var i = 0;
  while (i < 1) {
    i++;
    console.log(array1.concat(array2));
  }
}
combineArray2([1, 2, 3], [7, 8, 9]);

function combineArray3(array1, array2) {
  array2.forEach(function (item) {
    array1.push(item);
  });
  console.log(array1);
}
combineArray3([1, 2, 3], [7, 8, 9]);

// 16. WAF to return true if a number is prime

function numberIsPrime(num) {
  if (num < 2) {
    return false;
  }
  for (i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(numberIsPrime(127));

// 17. WAF to return all prime numbers between min, max

//
