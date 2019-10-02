/* Give a binary search tree and a number,  
inserts a new node with the given number in  
the correct place in the tree. Returns the new  
root pointer which the caller should then use  
(the standard trick to avoid using reference  
parameters). */
static node insert(node node, int data) 
{ 
  
    /* 1. If the tree is empty, return a new,  
    single node */
    if (node == null) 
        return (newNode(data)); 
    else
    { 
  
        /* 2. Otherwise, recur down the tree */
        if (data <= node.data) 
            node.left = insert(node.left, data); 
        else
            node.right = insert(node.right, data); 
  
        /* return the (unchanged) node pointer */
        return node; 
    } 
} 