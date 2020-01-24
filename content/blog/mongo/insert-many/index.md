---
slug: "/mongo/insert-many"
date: "2017-07-13T03:49:16.408Z"
title: "Arrays"
description: "MDX Example Description ..."
categories: ["mongo/insert", "mongo/insert-many","mongo/find", "mongo/find-many", "mongo/update", "mongo/update-many", "mongo/remove", "mongo/remove-many"  ]
keywords: ["insert entity"]
baselink: "mongo"
banner: "./images/banner.jpg"
---

```javascript
{
  data: [{}],
  proxy: {
        module: "generic",
        method: "insertMany",
        info: {
            collection: "testcollection",
            fields: [''],
        }
    }
}
```