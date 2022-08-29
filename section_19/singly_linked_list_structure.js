// piece of data - val
// reference to next node - next

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    // if no head, set head + tail to new node
    // else set next on current tail to new node
    // and update tail to point to new tail
    // then return the list
    push(val) {
        let newN = new Node(val);
        if (this.head === null) {
            this.head = newN;
            this.tail = newN;
        } else {
            this.tail.next = newN;
            this.tail = newN;
        }
        this.length++;
        return this; // returning the new list
    }
}

let list = new SinglyLinkedList();
list.push("hello");
list.push("there");
list.push("friend");
console.log(list);
