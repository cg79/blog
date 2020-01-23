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
  data: {userId: 2},
  proxy: {
        module: "generic",
        method: "findOne",
        info: {
            collection: "testcollection",
            fields: [''],
            criteria: 'userId == 2 && (age >= 18 || pret<9)',
            pager: {
              pageNo: 1,
              itemsOnPage: 5,
              sort: {}
            }
        }
    }
}
```