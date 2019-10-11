var sumEvenAfterQueries = function (A, queries) {
  let sum = 0;
  let result = [];

  A.forEach(num => num % 2 === 0 ? sum += num : 0);

  for (let i = 0; i < queries.length; i++) {
    let val = queries[i][0];
    let idx = queries[i][1];

    if (isEven(A[idx])) sum -= A[idx];
    A[idx] += val;
    if (isEven(A[idx])) sum += A[idx];

    result.push(sum);
  }

  return result;

  function isEven(num) {
    return num % 2 === 0;
  }
};