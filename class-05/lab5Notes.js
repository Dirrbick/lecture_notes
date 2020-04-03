// Big-O notes
// constant time O(1)

function constantTime(n){
  let cmdCounter = 0;
  cmdCounter++;

  let remainder = n % 2;
  cmdCounter++;

  if (!remainder){
    cmdCounter++;
    return n * 2;
  }
  if (remainder) {
    cmdCounter++;
    return n * 3;
  }
  console.log(cmdCounter);
}

// console.log(constantTime(10));

// constantTime(2);
// constantTime(13);
// constantTime(250);
// constantTime(1234567);
// constantTime(351838496813518);


//lindear Time

function linearTime(n) {
  let cmdCounter = 0;
  let tempArr = [];


  for(let i = 0; i < n; i ++) {
    // cmdCounter++;
    tempArr.push(i);
  }

  console.log(cmdCounter);
  return tempArr
}

// linearTime(2);
// linearTime(13);
// linearTime(250);
// linearTime(1234567);
// linearTime(351838496813518);

//exponential time
// [1, 2, 3]
// [1, 2, 3, 2, 4, 6, ]
function exponentialTime(n) {
  let cmdCounter = 0;

  tempArr = [];

  for(let i = 0; i < n; i ++) {
    for(let j = 0; j < n; j ++) {
      cmdCounter++;
      tempArr.push( i * j );
      
    }
  }
  console.log(cmdCounter);
  return tempArr;
}

// exponentialTime(2);
// exponentialTime(13);
// exponentialTime(250);
// exponentialTime(8671);


// Linked List

class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // default linked list is empty
    this.head = null;

  }

  addToHead(node) {
    let newNode = new Node(val);

    newNode.next = this.head;
    this.head = newNode;
  }

  printList() {
    let currNode = this.head; 
    let str = '';

    while(currNode.next != null){

      str += '[' + currNode.val + '] ->';
      currNode = currNode.next;
    }
    str += 'null';
    console.log(str);
  }

}

let myList = new LinkedList();

myList.printList();

myList.addToHead('A');
myList.printList();








