---
slug: "/algo/arrays/sum"
date: "2020-01-26T03:49:16.408Z"
title: "Sum of array"
description: "MDX Example Description ..."
categories: ["algo/arrays/sum-recursion","algo/arrays/sum-for-each", "algo/arrays/sum-map","algo/arrays/sum-reduce", "algo/arrays/sum-while", "algo/arrays/sum-dowhile" ]
keywords: []
banner: "./images/banner.jpg"
---


```javascript
function sumArrayV1(arr) {
    let s = 0;
    for (let i=0;i<arr.length;i++) {
        s+= arr[i];
    }
    return s;
};
```

For testing, you can use this function as:

```javascript
let sum = sumArrayV1([2,3,8]);
console.log(sum);
```


<Counter initialCounter={3} />
