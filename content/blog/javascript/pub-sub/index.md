---
slug: "/javascript/pub-sub"
date: "2020-01-26T03:49:16.408Z"
title: "Algorithms"
description: "MDX Example Description ..."
categories: ["javascript"]
keywords: []
baselink: "javascript"
banner: "./images/banner.jpg"
---


![image info](/assets/inorder.gif)

Tree

1. create directory 
[create directories list!](/algo/tree/directories.js)

```javascript
var EventManager = new (function() {
  var events = {};

  this.publish = function(name, data) {
    var handlers = events[name];
    if(!!handlers === false) return;
    handlers.forEach(function(handler) {
      handler.call(this, data);
    });
  };

  this.subscribe = function(name, handler) {
    var handlers = events[name];
    if(!!handlers === false) {
      handlers = events[name] = [];
    }
    handlers.push(handler);
  };

  this.unsubscribe = function(name, handler) {
    var handlers = events[name];
    if(!!handlers === false) return;

    var handlerIdx = handlers.indexOf(handler);
    handlers.splice(handlerIdx);
  };
});
```
