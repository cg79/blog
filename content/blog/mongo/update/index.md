---
slug: "/mongo/update"
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
  data: {userId: 25},
  proxy: {
        module: "generic",
        method: "updateOne",
        info: {
            collection: "testcollection",
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