---
slug: "/algo/arrays/sum-recursion"
date: "2020-01-26T03:49:16.408Z"
title: "Sum of array - recursion"
description: "MDX Example Description ..."
categories: [algo/arrays/sum]
keywords: []
banner: "./images/banner.jpg"
---


```javascript
function sum(arr) {
    if(!arr.length) {
        return 0;
    }
    return arr[0] + sum(arr.splice(1))

}
```

For testing, you can use this function as:

```javascript
let sum = sum([2,3,8]);
console.log(sum);
```


