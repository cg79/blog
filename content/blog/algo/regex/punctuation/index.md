---
slug: "/algo/regex/words"
date: "2017-07-13T03:49:16.408Z"
title: "Sum of array"
description: "MDX Example Description ..."
categories: ["algo/regex/words"]
keywords: ["react"]
banner: "./images/banner.jpg"
---


```javascript
function punctuation (input) {
 function dot(s) {
 var re = /(\.|\!|\?)(\s{0,})(\w)/g;
 s = s.replace(re, function(x, $1, $2, $3) {
 return $1 + " " + $3.toUpperCase();
 });
 return s;
 }
 function comma(s) {
 var re = /(\,|\:|\;)(\s{0,})(\w)/g;
 s = s.replace(re, function(x, $1, $2, $3) {
 return $1 +$2 + $3;
 });
 return s;
 }
 
 var result = dot(input);
 result = comma(result);
 console.log(result);
 return result;
 }
```

For testing, you can use this function as:

```javascript
let sum = sumArrayV1([2,3,8]);
console.log(sum);
```


<Counter initialCounter={3} />
