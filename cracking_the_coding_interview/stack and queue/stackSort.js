// Sort the stack by using one extra stack only, ascending order

function stackSort(inputStack) {
  let extraStack = [];

  while (inputStack.length) {
    let temp = inputStack.pop();

    while (extraStack.length && extraStack[extraStack.length - 1] > temp) {
      inputStack.push(extraStack.pop());
    }

    extraStack.push(temp);
  }

  while (extraStack.length) {
    inputStack.push(extraStack.pop())
  }

  return inputStack;
}

let test = [10,7,8,3,12,1];
console.log(stackSort(test))