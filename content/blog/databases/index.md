---
slug: "/databases"
date: "2020-01-26T03:49:16.408Z"
title: "Algorithms"
description: "MDX Example Description ..."
categories: ["databases/mongo","databases/firebase", "databases/sql", "databases/couchdb", "databases/casandra", "databases/redis" ]
keywords: []
baselink: "algo"
banner: "./images/banner.jpg"
---


![image info](/assets/inorder.gif)

Tree

1. create directory 
[create directories list!](/algo/tree/directories.js)

```javascript

var source = [
    {
        id:1,
        name: 'work',
        parentid: 0,
    },
    {
        id:7,
        name: 'games',
        parentid: 0,
    },
    {
        id:2,
        name: 'javascript',
        parentid: 1,
    },
    {
        id:3,
        name: 'algoritmica',
        parentid: 2,
    },

];

function createNode(id,name, parentid) {
    return {
        id,
        name,
        parentid,
        children: [],
    }
}

function createDirStructure(list,node, parentid) {
    var sourceItems = list.filter(el =>el.parentid === parentid);

    sourceItems.forEach(element => {
        var nodeItem = createNode(element.id,element.name,element.parentid);

        createDirStructure(list,nodeItem, nodeItem.id);

        node.children.push(nodeItem);
    });

    

    return  node;
}


function start(list) {
    debugger;
    var root = createNode(0,'root', 0);
    
    createDirStructure(list,root, 0);

    return root.children;
}

start(source);
```
