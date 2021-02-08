// 1. write a function to return the n character from a string

function log(value){
    console.log('value = ', value);
}

var str = "Salut Claudiu";
var res = str.charAt(3);

log(res);

// 2. WAF (write a function), with 1 parameter x ,  WR (which returns) the char code of character from position x

function log(value){
    console.log('value = ', value);
}

var str = "Salut Claudiu";
var x = str.charCodeAt(5);

log(x);

// 3. WAF with 2 params x and y, WR the sum of charcodes from position x and y

function log(x, y){
    console.log(x + y);
}

log(10,15);

// 4. WAF with 2 params, input (string), x(number), WR the same string with the character from position x as uppercase;

function UpperCase(){
    console.log(input.charAt(x).toUpperCase() + input.slice(1));
}

var input = "salutare";
var x = 0;

UpperCase();

// 5. WAF, (string 1, string 2), WR the indexof string 2 within string 1;

function log(value){
    console.log('value = ', value);
}

var str = "Claudiu";
var ind = str.indexOf("aud");

log(ind);

// 6. WAF, (string 1, string 2), WR the last indexof string 2 within string 1;

function log(value){
    console.log('value = ', value);
}

var str = "Claudiu";
var lastind = str.lastIndexOf("aud");

log(lastind);

// 7. WAF, (string) , WR the first 2 characters

function log(value){
    console.log('value = ', value);
}

var str = "Claudiu";
var slice = str.slice(0, 2);

log(slice);

// 8. WAF, (string), WR the characters from position 1 and -1 (previous character from last one)

function log(value){
    console.log('value = ', value);
}

var str = ("Salut Claudiu!");
var sub = str.substr(1, -1);

log(sub);

// 9. WAF, (string, start, end), WR the characters between (start and end)

function log(value){
    console.log('value = ', value);
}

var str = "Hello world, welcome to the universe.";
var start = str.startsWith("Hello");
var end = str.endsWith("universe.");

log(start, end);

// 10. WAF (string1, string2), to replace the string2 within string1;

function log(value){
    console.log('value = ', value);
}

var str = "Visit Microsoft!";
var replace = str.replace("Microsoft", "W3Schools");

log(replace);

// 11. WAF(string), WR true if the length is even. (%2 === 0)

function log(value){
    console.log('value = ', value);
}

var input = "anna";
var even = input.length%2 === 0;

log(even);

// 12. WAF(string1, s2), WR the sum of lengths of s1 and s2;

function log(value){
    console.log('value = ', value);
}

var input = "anna";
var input2 = "david";
var suma = input.length + input2.length;

log(suma);

// 13. WAF(string1, s2), WR true if s1 starts with s2;

function log(value){
    console.log('value = ', value);
}

var str = "Hello world, welcome to the universe.";
var n = str.startsWith("Hello");

log(n);

// 14.WAF(string, number) to remove the character from position number using slice

function log(value){
    console.log('value = ', value);
}

var str = "Hello world!";
var res = str.slice(4,5);

log(res);

// 15.WAF (string, string) WR the number of aparition of string 2 whithin string1.

function log(value){
    console.log('value = ', value);
}

var str = "Hello world, welcome to the universe.";
var n = str.indexOf("welcome");

log(n);

// 16. create an array

var fruits = ["Banana", "Orange", "Apple", "Mango"];

// 17. WAF to add a string into array

function log(value){
    console.log('value = ', value);
}

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var fruits2 = "kiwi";
var fruits3 = fruits.concat(fruits2);

log(fruits3);

// 18. WAF (arr, string) to add string into array on position 0;

function log(value){
    console.log('value = ', value);
}

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 0, "Lemon");

log(fruits);

// 19. WAF (arr, number) to add the number into array

function log(value){
    console.log('value = ', value);
}

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var num = 5;
var add = fruits.concat(num);

log(add);

// 20; WAF (arr) WR the last element from array

function log(value){
    console.log('value = ', value);
}

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(4, 5);

log(citrus);

// 21; WAF (string) WR the characters from string as array

function log(value){
    console.log('value = ', value);
}

var str = "Salut Claudiu!";
var res = str.split(" ");

log(res);

// 22. WAF (arr) WR the reversed array 

function log(value){
    console.log('value = ', value);
}

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();

log(fruits);

// 23. WAF (string) to return the inversed string. ex: abc ==> cba

function log(value){
    console.log('value = ', value);
}

var salut = ("Salut Claudiu!");
var inversed = salut.split(""); 
var inversed2 = inversed.reverse();
var inversed3 = inversed2.join("");

log(inversed3);


// 24. WAF (arr, x) to remove the value from position x from array

function log(value){
    console.log('value = ', value);
}

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1);

log(fruits);


// 25. WAF (arr, x) WR true if there is any value equal x into the array

function log(value) {
    console.log("value = ", value >= 28);
}

var ages = [32, 33, 28, 40];

log();


// 26. WAF (arr, y) WR an array containing all the values except y

function log(value){
    console.log('value = ', value);
}

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1);

log(fruits);

// 27. WAF (arr) of numbers which returns the sorted array;

function log(value){
    console.log('value = ', value);
}

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

log(fruits);


// 28. WAF (arr) WR the rotated array (1 time)

function log(value){
    console.log('value = ', value);
}

var arr = [1,2,3,4,5];
var rotate = arr.shift();
var rotate2 = arr.push(rotate);

log(arr);


// 29. WAF (arr) of numbers WR another array which contains the squared values; [1,2,3] ==> [1,4,9]

function log(value){
    console.log('value = ', value);
}

var arr = [1,2,3,4,5];
var map = arr.map(x => x * x);

log(map);

// 30. WAF (r: number) WR the  surface of a circle having the raduis equal r;

function log(value){
    console.log('value = ', value);
}

var radius = 25;
var area = Math.pow(radius, 2) * Math.PI;

log(area);


// 31. WAF (arr) which prints to the console the value from the array (one by one)
// 32. WAF writeToConsole(value) which prints the value to the console;

function writeToConsole(value){
    console.log('value = ', value);
}

var suma = 2 + 3;

writeToConsole(suma);


// 33. WAF (arr1, arr2) which returns another array with elements from arr1 and arr2;

function writeToConsole(value){
    console.log('value = ', value);
}

var arr1 = [1,2,3,4,5];
var arr2 = [6,7,8,9,10];

var slice1 = arr1.slice(1, 4);
var slice2 = arr2.slice(1, 4);

var concat = slice1.concat(slice2);

writeToConsole(concat);

// 34; WAF (arr, position) (arr) contains strings, which replace the element from position x with the inversed value; ex: ['ana', 'xy'], 1 ==> ["ana", "yx"]
// 35. WAF: (arr, value) WR the position of value into the array

function log(value){
    console.log('value = ', value);
}

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");

log(a);

// 36. WAF (n) which returns an array with n elements

function log(value){
    console.log('value = ', value);
}

var n = 10;
var arr = Array.from(Array(n), (_,index) => index + 1);

log(arr);

// 37. WAF(string) WR string withowt spaces. ex: "    a    bcd   xyzt    " ==> "abcdxyzt";

function log(value){
    console.log('value = ', value);
}

var string = ("    a    bcd   xyzt    ");
var split = string.split(" ");
var noSpace = split.filter(function(e) {
    return String(e).trim();
});
var noSpaceStr = noSpace.join();

log(noSpaceStr);


// 38. WAF (X) which returns true if x is array

function writeToConsole(x){
    console.log('value = ', x);
}

var x = [1,2,3,4,5];
var n = Array.isArray(x);

writeToConsole(n);

// 39. WAF (y) which returns true if y is string;

function writeToConsole(x){
    console.log('value = ', x);
}

var x = ("Salut Claudiu!");
var n = (typeof x === "string");

writeToConsole(n);

// 40. WAF (string, number) which returns the string + number

function writeToConsole(value){
    console.log('value = ', value);
}

var x = ("cinci");
var y = 5;
var n = x + y;

writeToConsole(n);

// 41. WAF WR the inverse value; suppose you have a door; write a function which toggle the state door. isOPEN/isClosed
// 42. WAF WR the number of miliseconds of your life;
// 43. WAF WR current date + 2h
// 44. WAF WR day of the week of the current date
// 45. WAF WR 	 the difference between 2 dates

function writeToConsole(value){
    console.log('value = ', value);
}

var start = new Date("March 30, 2020");
var end = new Date("June 9, 2020");
var diff = 0;
var days = 1000 * 60 * 60 * 24;

diff = end - start;

log(Math.floor(diff / days) + " days have passed!");






