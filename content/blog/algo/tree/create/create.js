class node {
  val = 0;
  left = null;
  right = null;
}

function createnode(arr, startIndex) {
    if(arr[startIndex] === undefined) {
        return null;
    }

    var nodeInst = new node();

    nodeInst.val = arr[startIndex];

    nodeInst.left = createnode(arr, (2 * startIndex) +1);
    nodeInst.right = createnode(arr, (2 * startIndex) +2);

    return nodeInst;
     
}

function createtree(arr) {
    var root  = createnode(arr, 0);
    return root;
}

var tree = createtree([1,2,3,4,5,6])

function levelSum(node, level, result) {
  if(!node.left || !node.right) {
    return;
  }

  if(!result[level]) {
    result[level] = 0;
  }


  if(node.left) {
    result[level] += node.left.val; 
    levelSum(node.left, level +1, result);

  }
  if(node.right) {
    result[level] += node.right.val; 
    levelSum(node.right, level +1, result);
  }

  

}

function calculateLevelSum(tree) {
  var result  = {};
  result[0] = tree.val;
  levelSum(tree, 1, result);

  debugger;

  return result;

}


function leftright(node, direction, count) {
  if(! node.left && !node.right) {
    return count;
  }

  var maxLeft = node.left ? leftright(node.left, 'l', direction === 'l' ? count : count +1) : count;
  var maxRight = node.right ? leftright(node.right, 'r', direction === 'r' ? count : count +1) : count;

  return maxLeft > maxRight ? maxLeft : maxRight;

}

function calculateLeftRight(tree){
  var ml  = tree.left ?  leftright(tree.left, 'l', 0) : 0;
  var mr  = tree.right ?  leftright(tree.right, 'r', 0) : 0;

  return ml > mr ? ml : mr;
}


https://www.digitalocean.com/community/tutorials/js-tree-traversal



