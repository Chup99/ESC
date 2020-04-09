class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
    }

    isEmpty() {
        return !this.front;
    }

    enqueue(value) {
        console.log('ENQUEUE', value);
        // create a new node with value
        let node = new Node(value);

        // if queue is empty
        if (this.isEmpty()) {
            // point front and back to new node
            this.front = this.back = node;
        }
        // else the queue is not empty
        else {
            // push node to back of the queue
            // by pointing the last node to the newly created node
            this.back.next = node;

            // move back pointer to new node
            this.back = node;
        }

        this.print();
    }

    print() {
        // If the queue is empty
        if (this.isEmpty()) {
            console.log('EMPTY QUEUE');
        }
        // Else it's not empty
        else {
            // temp arr
            let tmpArr = [];

            // tmp variable to the front of the queue
            let tmp = this.front;

            // iterate through the queue
            while (tmp) {
                // add value into tmp arr
                tmpArr.push(tmp.value);

                // move to the next element
                tmp = tmp.next;
            }

            // print the values
            console.log(tmpArr.join(','));
        }
    }

    dequeue() {
        // pointer to front of the queue
        let node = this.front;
        console.log('DEQUEUE', node ? node.value : '');

        // if queue is not empty
        if (!this.isEmpty()) {
            // move front to the next element
            this.front = this.front.next;
        }

        // check if front is null / past the end of the queue
        if (!this.front) {
            // set back to null
            this.back = null;
        }

        // print
        this.print();

        // return node at the front of the queue
        return node;
    }
}