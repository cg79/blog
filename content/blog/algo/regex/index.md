---
slug: "/algo/regex"
date: "2020-01-26T03:49:16.408Z"
title: "Arrays"
description: "MDX Example Description ..."
categories: ["algo/arrays/sum","algo/regex" ]
keywords: []
baselink: "algo"
banner: "./images/banner.jpg"
---

http://regex101.com

https://stackoverflow.com/questions/3758798/how-to-search-for-occurrences-of-more-than-one-space-between-words-in-a-line

## code between 2 characters

```javascript
function textBetweensquareBrackets(str) {
 var x = str.match(\[.*?\]\g);
 
 return x;
 }
```


## GROUPS. 

```javascript
 function dot(s) {
  var re = /(\.|\!|\?)(\s{0,})(\w)/g;
  s = s.replace(re, function(x, $1, $2, $3) {
  return $1 + " " + $3.toUpperCase();
  });
 return s;
 }


dot('.    d') => . D
dot('    d') ==>     d

 ```


 ## Largest word

 ```javascript
function largestWord(str) {
 var x = str.match(/\w+/g);
 var y = x.map(function(t) { return t.length });
 var z = x[y.indexOf(Math.max.apply(Math, y))];
 return z;
 }
```


## Comment
 ```javascript
var str = "//*asdf*/".match(/^\/\/.*/g);
```

## Comment multiline
 ```javascript
var str = "asd".match(/\*((.|\n)*)\*\//g)
```