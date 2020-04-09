let q = require('./queue');

const queue = require('../mysql/getUnservedGuest');

// var queue = getQueue;

console.log(queue.getUnservedGuest());

// q.enqueue(queue[0].id);