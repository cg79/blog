---
slug: "/algo/regex/words"
date: "2020-01-26T03:49:16.408Z"
title: "Sum of array"
description: "MDX Example Description ..."
categories: ["algo/regex/words"]
keywords: ["react"]
banner: "./images/banner.jpg"
---


```javascript
function largestWord(str) {
 var x = str.match(/\w+/g);
 var y = x.map(function(t) { return t.length });
 var z = x[y.indexOf(Math.max.apply(Math, y))];
 return z;
 }
```

For testing, you can use this function as:

```javascript
let result = largestWord('ana is the most beautifull');
console.log(result);
```


Please note that str.match(/\W+/g) matches any non-word character and is equivalent with: [^a-zA-Z0-9_]