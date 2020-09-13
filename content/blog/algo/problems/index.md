---
slug: "/algo/problems"
date: "2020-01-26T03:49:16.408Z"
title: "Arrays"
description: "MDX Example Description ..."
categories: ["algo/arrays/sum","algo/regex" ]
keywords: ["react"]
baselink: "algo"
banner: "./images/banner.jpg"
---


1. sa se ordoneze un sir de numere  descrescator in functie de numarul de aparitii ale cifrei 1 din reprezentarea binara a numarului;
daca sunt mai multe numere care contin aceeasi valoare de numere de 1, acestea vor fi tiparite descrescator

[1,2,3,8] ==> [3, 8, 2, 1]

```javascript

Object.entries([1,2,3,8].map(el => ({el, c:el.toString(2).match(/1/gi).length })).reduce((acc, cur) => {
    if(!acc[cur.c]) {
        acc[cur.c] = [];
    }
    acc[cur.c].push(cur.el); 
    return acc;

}, {})).sort((a,b) => parseInt(a[0]) > parseInt(b[0]) ? -1: 1 ).reduce((acc, el) => {

    acc = acc.concat(el[1].sort((a,b) => a>b? -a:1 ));
    return acc;

}, [])
```


2. sum of column numbers from matrix
```javascript
[[1,2],[3,4]].reduce((accArr, elArr) => elArr.map((el, i) => accArr[i] += el ))
```

@octocat :+1: This looks great!

