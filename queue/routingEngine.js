let q = require('./queue');

const queue = require('../mysql/getUnservedGuest');

// var queue = getQueue;

// queue.getQueue();


let array = q.array;

console.log(array);

// q.enqueue(queue[0].id);

class RoutingEngine{
    // number of tags
    static tags = 3; 
    
    constructor(){
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
            agentQueue[0].push("id");
        }
        for (var i = 0; i < agentTag2; i++){
            agentQueue[1].push("id");
        }
        for (var i = 0; i < agentTag3; i++){
            agentQueue[2].push("id");
        }
    }

    push(element){
        switch (element[skill]){
            case "Network":
                customerQueue[0].push(element);
                break;
            case "Hardware":
                customerQueue[1].push(element);
                break;
            case "Display":
                customerQueue[2].push(element);
                break;
            default:
        }
    }

    pop(tag){
        switch (tag){
            case "Network":
                serviceList.push(["Network", customerQueue[0].front()]);
                customerQueue[0].pop(element);
                agentQueue[0].pop();  
                break;
            case "Hardware":
                serviceList.push(["Hardware", customerQueue[1].front()]);
                customerQueue[1].pop();
                agentQueue[1].pop();
                break;
            case "Display":
                serviceList.push(["Display", customerQueue[2].front()]);
                customerQueue[2].pop();
                agentQueue[2].pop();
                break;
            default:
        }
        
    }
    


}

