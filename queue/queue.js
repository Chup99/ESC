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
        this.items = []; 
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
    
    push(element){
        // adding element to the queue 
        this.items.push(element); 
    }

    pop(){
        // removing element from the queue 
        // returns underflow when called  
        // on empty queue 
        if(this.isEmpty()) 
            return "Underflow"; 
        return this.items.shift(); 
    }

    // front()
    // front function 
    front() 
    { 
        // returns the Front element of  
        // the queue without removing it. 
        if(this.isEmpty()) 
            return "No elements in Queue"; 
        return this.items[0]; 
    }  

    // isEmpty() 
    // isEmpty function 
    isEmpty() 
    { 
        // return true if the queue is empty. 
        return this.items.length == 0; 
    }

    // printQueue()
    // printQueue function 
    printQueue() 
    { 
        var str = ""; 
        for(var i = 0; i < this.items.length; i++) 
            str += this.items[i] +" "; 
        return str; 
    }  
}