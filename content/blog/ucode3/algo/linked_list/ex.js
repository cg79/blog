class Node {
    val = null;
    next = null;
    constructor (val) {
        this.val = val;
    }
    setNext(node) {
        this.next = node;
    }
}

populateLinkedList = function() {
    var root = new Node(1);
    var current = root;
    for (var i = 2; i < 10; i++) {
        var newNode = new Node(i);
        
        current.setNext(newNode);
        current = newNode;
    }
    return root;
}

print = function(root){
  console.log(root.val);
  // var c = root;
  while(root.next) {
  	root= root.next;
  	console.log(root.val);

  }
}

find = function(root, val){
  console.log(root.val);
  // var c = root;
  while(root) {
  	
  	const next = root.next;
  	if(next.val === val) {
		return root;
	}
  	console.log(root.val);
  	root= next;
  }
}


removeElByValue = function(root, v) {
   var prev = find(root, v);
   var nextLink = prev.next.next;
   prev.next = nextLink;
}