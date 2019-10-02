https://stackoverflow.com/questions/9133500/how-to-find-a-node-in-a-tree-with-javascript

findInTree(condFunction,directories = this.root.directories) {
    const stack = [...directories];
    while (stack.length) {
      const node = stack.pop()
      if (condFunction(node)) {
        return node;
      }
      stack.push(...node.directories)
    }
    return null;

    // for (let i = 0; i < directories.length; i++) {
    //   const dir = directories[i];
    //   if (condFunction(dir)) {
    //     return dir;
    //   } else {

    //   }
    //   return this.findInTree(condFunction, dir.directories);
    // } 
  }