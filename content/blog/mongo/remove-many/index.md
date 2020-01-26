---
slug: "/mongo/remove-many"
date: "2020-01-26T03:49:16.408Z"
title: "Arrays"
description: "MDX Example Description ..."
categories: ["mongo/insert", "mongo/insert-many","mongo/find", "mongo/find-many", "mongo/update", "mongo/update-many", "mongo/remove", "mongo/remove-many"  ]
keywords: ["insert entity"]
baselink: "mongo"
banner: "./images/banner.jpg"
---

```javascript
{
  data: {userId: 23},
  proxy: {
        module: "generic",
        method: "remove",
        info: {
            collection: "testcollection",
            fields: [''],
            criteria: 'userId == 2 && (age >= 18 || pret<9)'
        }
    }
}
```