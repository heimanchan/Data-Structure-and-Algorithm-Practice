const asteroidCollision = function (asteroids) {
  let stack = [];

  for (let ast of asteroids) {
    if (ast > 0) {
      stack.push(ast);
    } else {
      let pushAst = true;

      while (stack.length) {
        let topAst = stack[stack.length - 1];
        if (topAst > 0) {
          if (Math.abs(ast) > topAst) {
            stack.pop();
          } else if (Math.abs(ast) === topAst) {
            stack.pop();
            pushAst = false;
            break;
          } else {
            pushAst = false;
            break;
          };
        } else break;
      }

      if (pushAst) stack.push(ast);
    }
  }

  return stack;
}

console.log(asteroidCollision([5,10,-5]))
console.log(asteroidCollision([5,-5]))
console.log(asteroidCollision([1,2,3,4,5,-6]))
console.log(asteroidCollision([-2,-1,1,2]))
console.log(asteroidCollision([-2,1,1,-1]))
