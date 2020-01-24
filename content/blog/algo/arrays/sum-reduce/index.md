---
slug: "/algo/arrays/sum-reduce"
date: "2017-07-13T03:49:16.408Z"
title: "Sum of array"
description: "MDX Example Description ..."
categories: ["algo/arrays/sum-map"]
keywords: []
banner: "./images/banner.jpg"
---


```javascript
function sumArrayReduce(arr) {
    return arr.reduce((acumulator, el)=> acumulator = acumulator+el,0);
};

function sum(...nums: number[]): number {
    return nums.reduce((a, b) => a + b, 0);
}
```

For testing, you can use this function as:

```javascript
let sum = sumArrayReduce([2,3,8]);
console.log(sum);
```


