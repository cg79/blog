---
slug: "/algo/arrays/sum-dowhile"
date: "2017-07-13T03:49:16.408Z"
title: "Sum of array"
description: "MDX Example Description ..."
categories: ["algo/arrays/sum-map"]
keywords: ["react"]
banner: "./images/banner.jpg"
---


```javascript
sumDoWhile = (arr) => {
	if(!arr.length) {
		return 0;
	}
	let sum = 0;
	let index = 0;
	do {
		sum += arr[index]; 
		index ++;
	} while(index < arr.length)
	return sum;
}
```

For testing, you can use this function as:

```javascript
let sum = sumDoWhile([2,3,8]);
console.log(sum);
```
