static bool ifNodeExists( Node node, int key)  
{  
    if (node == null)  
        return false;  
   
    if (node.data == key)  
        return true;  
   
    // then recur on left sutree / 
    bool res1 = ifNodeExists(node.left, key);  
   
    // now recur on right subtree / 
    bool res2 = ifNodeExists(node.right, key);  
   
    return res1 || res2;  
}  