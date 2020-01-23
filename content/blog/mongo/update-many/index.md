---
slug: "/mongo/insert"
date: "2017-07-13T03:49:16.408Z"
title: "Arrays"
description: "MDX Example Description ..."
categories: ["mongo/insert-many", "mongo/entities/nested" ]
keywords: ["insert entity"]
baselink: "mongo"
banner: "./images/banner.jpg"
---

```javascript
{
  proxy: {
        module: "generic",
        method: "updateOne",
        info: {
            collection: "testcollection",
            criteria: 'userId == 2 && (age >= 18 || pret<9)'
            fields: [
            {
              name: 'new Name',
              age: 18
            },
            {
              op: 'inc',
              field: 'money',
              value: '10'
            },
            {
              op: 'dec',
              field: 'money',
              value: '10'
            },
            ],
        }
    }
}
```