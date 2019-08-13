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
var node = function(v) {
  this.v =v;
  this.setNext = function(next) {
    this.next = next;
  }
}
var a= [1,2,3];
var root = new node(0);
var c = root;
for(var i=0;i<a.length;i++) {
  var nnode = new node(a[i]);
  c.setNext(nnode);
  c = nnode;
}

function read(root) {
  var result = [];
  result.push(root.v);
  var c = root;
  while(c.next) {
c = c.next;   
result.push(c.v);
    
  }
return result;
}


function removeValue(v, root) {
var p = root;
while(p.next && p.next.v !== v) {
  p = p.next;
}

var tail = p.next.next;
p.next = tail;

}
```
