// implement a queue starting from two stacks

// A queue is an data struction where the first element in is the first element out - FIFO - a line in the supermarket
// a stack is a data structure where the last element in is the first element out - LIFO - a web browser back button


const stack1 = [];
const stack2 = [];

// use push and pop methods to create a queue

// method enqueue -> add elements to the queue

const enqueue = function(element){
  stack1.push(element);
}

// mdethod dequeue -> push all elements of stack1 to stack2. Stack2 becomes a queue, since all elements will be dequeue in FIFO, first in first out order = the definition of queue.

const dequeue = function(){
  if(stack.length === 0){
    if(stack1.length === 0){
      return "Cannot dequeue, because queue is empty";
    }
    while(stack1.length > 0){
      let elem1 = stack1.pop();
      stack2.push(elem1);
    }
  }
  return stack2.pop();
}


//Edge case: stack2 is NOT empty, you will need anoter stack to behave as the queue, and it is no longer space constant:
// const newStackAsQueue = function(){
  //  const stack3 = []
  // while(stack2.length > 0){
  //   let elem2 = stack2.pop();
  //   stack3.push(elem2)
  // }
//}