---
slug: "/algo/arrays/sum-while"
date: "2020-01-26T03:49:16.408Z"
title: "Sum of array"
description: "MDX Example Description ..."
categories: ["algo/arrays/sum-map"]
keywords: []
banner: "./images/banner.jpg"
---


```javascript
sumWhileV1 = (arr) => {
	let sum = 0;
	while(arr.length) {
		const el = arr.pop();
		sum += el; 
	}
	return sum;
}
```

For testing, you can use this function as:

```javascript
let sum = sumWhileV1([2,3,8]);
console.log(sum);
```


```javascript
sumWhileV2 = (arr) => {
	let sum = 0;
	let index = 0;
	while(index< arr.length) {
		const el = arr[index];
		sum += el; 
		index++;
	}
	return sum;
}
```

For testing, you can use this function as:

```javascript
let sum = sumWhileV2([2,3,8]);
console.log(sum);
```

