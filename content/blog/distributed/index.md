---
slug: "/git"
date: "2020-01-26T03:49:16.408Z"
title: "Arrays"
description: "MDX Example Description ..."
categories: ["algo/arrays/sum","algo/regex" ]
keywords: ["react"]
baselink: "algo"
banner: "./images/banner.jpg"
---


https://github.com/josdejong/distributed-app
https://blog.logrocket.com/divide-and-conquer-scale-your-node-js-app-using-distributed-queues-8231a9486d3a/
import Counter from "$components/Counter";

Showcasing how MDX for Gatsby.js works ... The Counter component is imported explicitly, but since we are using MDXProvider, we can also define global components which don't need to be imported (e.g. Link, YouTube).

## A React component in Markdown (imported component):

<Counter initialCounter={3} />

## Code Snippet

```jsx{1,4-6}
import React from 'react';

const Counter = initialCounter => {
  const [counter, setCounter] = React.useState(initialCounter);

  const onIncrement = () => {
    setCounter(c => c + 1);
  };

  const onIncrement = () => {
    setCounter(c => c - 1);
  };

  return (
    <div>
      {counter}

      <div>
        <button onClick={onIncrement} type="button">
          Increment
        </button>
        <button onClick={onDecrement} type="button">
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
```

## An external Link:

<Link to="https://roadtoreact.com/">Find out more about it</Link>

## An Image:

![Some Cover Image](./images/banner.jpg)





That's it.