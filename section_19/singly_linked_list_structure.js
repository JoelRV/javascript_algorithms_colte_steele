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

    // If there are no nodes in the list, return undefined
    // Loop through the list until you reach the tail
    // Set the next property of the 2nd to last node to be null
    // Set the tail to be the 2nd to last node
    // Decrement the length of the list by 1
    // Return the value of the node removed
    pop() {
        if (!this.head) return undefined;

        let current = this.head;
        let previous = current;
        while (current.next) {
            previous = current;
            current = current.next;
        }
        this.tail = previous;
        this.tail.next = null;

        this.length--;
        // behaviour when list is empty
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {}
}

let list = new SinglyLinkedList();
list.push("hello");
list.push("there");
list.push("friend");
console.log(list);
list.pop();
list.pop();
list.pop();
list.pop();
console.log(list);
