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

    // If there are no nodes, return undefined
    // Store the current head property in a variable
    // Set the head property to be the current head's next property
    // Decrement the length by 1
    // Return the value of the node removed
    shift() {
        if (!this.head) return undefined;
        let tempHead = this.head;
        this.head = tempHead.next;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return tempHead;
    }

    // This function should accept a value
    // Create a new node using the value passed to the function
    // If there is no head property on the list, set the head and tail to be the newly created node
    // Otherwise set the newly created node's next property to be the current head property on the list
    // Set the head property on the list to be that newly created node
    // increment list length by one
    // return linked list
    unshift(val) {
        let newN = new Node(val);
        if (!this.head) {
            this.head = newN;
            this.tail = newN;
        } else {
            newN.next = this.head;
            this.head = newN;
        }
        this.length++;
        return this;
    }

    // This function should accept an index
    // If the index is less than zero or greater than or equal to the length of the list, return null
    // Loop through the list until you reach the index and return the node at that specific index
    get(index) {
        if (index < 0 || index > this.length - 1) return null;
        let counter = 0;
        let currentNode = this.head;
        while (counter < index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    // This function should accept a value and an index
    // Use your get function to find the specific node.
    // If the node is not found, return false
    // If the node is found, set the value of that node to be the value passed to the function and return true
    set(val, index) {
        let target = this.get(index);
        if (!target) return false;
        target.val = val;
        return true;
    }
    // If the index is less than zero or greater than the length, return false
    // If the index is the same as the length, push a new node to the end of the list
    // If the index is 0, unshift a new node to the start of the list
    // Otherwise, using the get method, access the node at the index - 1
    // Set the next property on that node to be the new node
    // Set the next property on the new node to be the previous next
    // Increment the length
    // Return true

    insert(val, index) {
        if (index < 0 || index > this.length) return false;

        if (index === 0) return !!this.unshift(val);
        // the double bang is equivalent to the next block
        // it is a clever way to consicely generate a true/false
        // return.
        // this.unshift returns the list
        // !list = false (opposite of a truthy value)
        // !!list = !false = true

        if (index === this.length) {
            this.push(val);
            return true;
        }

        let newN = new Node(val);
        let prevNode = this.get(index - 1);
        newN.next = prevNode.next;
        prevNode.next = newN;
        this.length++;
        return true;
    }
    // If the index is less than zero or greater than the length, return undefined
    // If the index is the same as the length-1, pop
    // If the index is 0, shift
    // Otherwise, using the get method, access the node at the index - 1
    // Set the next property on that node to be the next of the next node
    // Decrement the length
    // Return the value of the node removed

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let prevNode = this.get(index - 1);
        let target = prevNode.next;
        prevNode.next = target.next;
        this.length--;
        return target;
    }

    // Swap the head and tail
    // Create a variable called next
    // Create a variable called prev
    // Create a variable called node and initialize it to the head property
    // Loop through the list
    // Set next to be the next property on whatever node is
    // Set the next property on the node to be whatever prev is
    // Set prev to be the value of the node variable
    // Set the node variable to be the value of the next variable
    // Once you have finished looping, return the list
    reverse() {
        let newN = this.head;
        this.tail = this.head;

        let next;

        let prev = null; // the new tail has to point to null
        let i = 0;

        while (i < this.length) {
            next = newN.next; // save next node

            newN.next = prev; // point current node backwards
            prev = newN; // update previous to be the current node
            newN = next; // move a node forward by using the saved next node

            i++;
        }
        // after the loop we are at the node that used to be the tail
        // redefine it has the new head
        this.head = prev;
        return this;
    }
}

// BigO complexity of linked Lists
// Insertion O(1) <<< STRENGTH
// Removal O(1) if head - > O(N) worst case if poping last element << STRENGTH
// Searching O(n)
// Access O(n)

let list = new SinglyLinkedList();
list.push("hello");
list.push("there");
list.push("friend");
// console.log(list);
list.pop();
list.pop();
console.log(list);

list.shift();
list.shift();
console.log(list);
list.unshift("friend");
list.unshift("friend2");
list.unshift("friend3");
list.insert("replaced", 0);
console.log(`list.remove(1)`, list.remove(1));
console.log(list);
list.reverse();
console.log(list);
