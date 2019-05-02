const levelOrder = function (root) {
  if (!root) return [];

  let queue = [root];
  let result = [];

  while (queue.length) {
    let levelLen = queue.length;
    let level = [];

    for (let i = 0; i < levelLen; i++) {
      let node = queue[0];

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);

      level.push(queue.shift().val)
    }

    if (level.length) result.push(level)
  }

  return result;
};