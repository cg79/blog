
 // https://www.digitalocean.com/community/tutorials/js-tree-traversal
// https://js-algorithms.tutorialhorizon.com/2015/10/12/binary-tree-traversal/



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

var tree = createtree([20,9,25,5,12,undefined,undefined,undefined,undefined, 11,14])


function maxSuccesor(tree, val) {

  if(tree.left && val < tree.val) {
    return maxNodeSuccesor(tree.left, val, 0);
  }

  if(tree.right && val > tree.val) {
    return maxNodeSuccesor(tree.right, val, 0);
  }
}

function maxNodeSuccesor(node, val, cv) {
  if(!node) {
    return cv;
  }
      cv = node.val > cv ? node.val: cv;
      if(val < node.val) {
        return maxNodeSuccesor(node.left, val, cv);
      }

      return maxNodeSuccesor(node.right, val, cv);
}

maxSuccesor(tree, 12);

