// Queue class
class Queue 
{ 
    // Array is used to implement a Queue 
    constructor() 
    { 
        this.items = []; 
    } 
                  
    // Functions to be implemented 
    // enqueue(item) 
    // enqueue function 
    enqueue(element) 
    {     
        // adding element to the queue 
        this.items.push(element); 
    } 

    // dequeue() 
    // dequeue function 
    dequeue() 
    { 
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




// apply change function
function applyChange(){
    
    if (!customerQueue[0].isEmpty() && !agentQueue[0].isEmpty()){
        tdCustomerQueue1.textContent--;
        tdAgentQueue1.textContent--;
        var d = new Date();
        serviceList.push([0, d, customerQueue[0].front()]);
        customerQueue[0].dequeue();
        agentQueue[0].dequeue();
        
    }
    if (!customerQueue[1].isEmpty() && !agentQueue[1].isEmpty()){
        tdCustomerQueue2.textContent--;
        tdAgentQueue2.textContent--
        var d = new Date();
        serviceList.push([1, d, customerQueue[1].front()]);
        customerQueue[1].dequeue();
        agentQueue[1].dequeue();
    }
    if (!customerQueue[2].isEmpty() && !agentQueue[2].isEmpty()){
        tdCustomerQueue3.textContent--;
        tdAgentQueue3.textContent--;
        var d = new Date();
        serviceList.push([2, d, customerQueue[2].front()]);
        customerQueue[2].dequeue();
        agentQueue[2].dequeue();
    }
    var endDate = new Date();
    if (serviceList.length>0){
        if (endDate-serviceList[0][1]>3000){
            var tag = serviceList[0][0];
            agentQueue[tag].enqueue("id");
            switch (tag){
                case 0:
                    tdAgentQueue1.textContent++;
                    break;
                case 1:
                    tdAgentQueue2.textContent++;
                    break;
                case 2:
                    tdAgentQueue3.textContent++;
                    break;
                default:
            }
            serviceList.shift();
        }
    }
}


// print serving pairs function
function printPairs(){
    var str = ""; 
    if (serviceList.length<1)
        return "No agent is serving any customer now.";
    for(var i = 0; i < serviceList.length; i++) {
        str += "Agent with tag " + serviceList[i][0] + " is serving customer with ID "
             + serviceList[i][2] + ".\n"; 
    }
    return str;
}

// random customer ID generator
function randomID(){
    return Math.floor(Math.random() * (randomMax - randomMin) ) + randomMin;
}






// MAIN FUNCTION



// number of tags
const tags = 3; 

// random ID generator range
const randomMax = 999999999;
const randomMin = 100000000;

// initiate customerQueue and agentQueue
var customerQueue = [];
var agentQueue = [];
for (var i = 0; i < tags; i++){
    customerQueue.push(new Queue());
}
for (var i = 0; i < tags; i++){
    agentQueue.push(new Queue());
}

// the current pairs that are serving
var serviceList = [];

// set number of available agents for each tag;
const agentTag1 = 3;
const agentTag2 = 5;
const agentTag3 = 2;

for (var i = 0; i < agentTag1; i++){
    agentQueue[0].enqueue("id");
}
for (var i = 0; i < agentTag2; i++){
    agentQueue[1].enqueue("id");
}
for (var i = 0; i < agentTag3; i++){
    agentQueue[2].enqueue("id");
}

var buttonTag1 = document.getElementById('tag1');
var buttonTag2 = document.getElementById('tag2');
var buttonTag3 = document.getElementById('tag3');

var tdCustomerQueue1 = document.getElementById('customerQueue1');
var tdCustomerQueue2 = document.getElementById('customerQueue2');
var tdCustomerQueue3 = document.getElementById('customerQueue3');
var tdAgentQueue1 = document.getElementById('agentQueue1');
var tdAgentQueue2 = document.getElementById('agentQueue2');
var tdAgentQueue3 = document.getElementById('agentQueue3');

var customerID = 0;
//set event listener
buttonTag1.addEventListener('click', function(event){
    customerQueue[0].enqueue(randomID());
    tdCustomerQueue1.textContent++;
});
buttonTag2.addEventListener('click', function(event){
    customerQueue[1].enqueue(randomID());
    tdCustomerQueue2.textContent++;
});
buttonTag3.addEventListener('click', function(event){
    customerQueue[2].enqueue(randomID());
    tdCustomerQueue3.textContent++;
});

setInterval(function(){
    applyChange();
    document.getElementById('pairs').innerText = printPairs();
    document.getElementById('date').textContent = new Date();
}, 0);

    


//alert("Hi, this is routing engine test prototype1.\nType 'help' for usage clientInformation.\nType 'exit' to terminate the engine.");

// console.log("Hi, this is routing engine test prototype1.");
// console.log("Type 'help' for usage information.");
// console.log("Type 'exit' to terminate the engine.");

// var input = prompt("input:");
// while (true){
//     if (input == "exit")
//         throw new Error("Engine terminated");
//     else
//         console.log("user input is:" + input);
//     input = prompt("input:");
// }