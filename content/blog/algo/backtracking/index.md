---
slug: "/algo/arrays/sum-map"
date: "2020-01-26T03:49:16.408Z"
title: "Sum of array"
description: "MDX Example Description ..."
categories: ["algo/arrays/sum-map"]
keywords: []
banner: "./images/banner.jpg"
---


```javascript

class permutation {

    sol = [];
    solutions = [];


    check = (pos) => {
        if (pos === this.sol[pos]) {
            return true;
        }

        return false;
    }

    print = () => {
        this.solutions.push([...this.sol]);
        this.sol.forEach(el => console.log(el))
    }

    bk = (pos) => {
        debugger;
        if (pos === this.n) {
            return this.print();
        }

        for (var i = 0; i < this.n; i++) {
            this.sol[pos] = i;
            this.check && this.bk(pos + 1);
        }

    }

    getPermutations(n) {
		this.n = n;
		this.solutions = [];
		this.bk(0);

		return this.solutions;
	}

}  



```

For testing, you can use this function as:

```javascript
let sum = sumArrayV1([2,3,8]);
console.log(sum);
```


<Counter initialCounter={3} />
