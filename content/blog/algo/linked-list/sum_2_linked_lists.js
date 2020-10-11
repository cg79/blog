

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function createLinkedList(arr) {
	var head  = new ListNode();
	head.val = arr[0];
	head.next = null;

	var curentNode = head;
	for(var i=1;i<arr.length;i++) {
		var newnode = new ListNode();
		newnode.val = arr[i];
		newnode.next = null;
		curentNode.next = newnode;

		curentNode = newnode;
	}

	return head;
}

    
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // l1 = createLinkedList([9,9,9,9,9,9,9]);
    // l2 = createLinkedList([9,9,9,9]);

    // l1 = createLinkedList([2,4,3]);
    // l2 = createLinkedList([5,6,4]);

    // l1 = createLinkedList([5,6]);
    // l2 = createLinkedList([5,4,9]);

  var c1  = l1;
  var c2  = l2;

  var def = new ListNode(0,null);

  var carrier = 0;
  var valI = 0;
  var sum = 0;  


  // 8+9 = 17;
  // carrier = 7;
  // v = 1;

//   2+3 = 5;
//   carrier = 0;
//   v = 5;


debugger;

  sum  = c1.val +c2.val + carrier;

  if(sum >= 10) {
    valI = sum % 10;
    carrier  = Math.floor(sum / 10);
  } else {
      valI = sum;
      carrier = 0;
  }
  

  var response = new ListNode();
  response.val = valI;
  var head = response;

  while(c1.next || c2.next) {
    if(c1.next) { c1 = c1.next} else c1 = def;
    if(c2.next) { c2 = c2.next} else c2 = def;

    sum  = c1.val +c2.val + carrier;

    if(sum >= 10) {
         valI = sum % 10;
         carrier = Math.floor(sum / 10);
    } else {
        valI = sum;
        carrier = 0;
    }

    head.next = new ListNode(valI, null);

    head = head.next;


  }

  if(carrier) {
    head.next = new ListNode(carrier, null);
  }


  
  return response;


};