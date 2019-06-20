function maxSumIncreasingSubsequence(array) {
  let sums = [...array]
  let subs = new Array(array.length);
  let maxIdx = 0;

  for (let i = 1; i < array.length; i++) {
    let curr = array[i];
    for (let j = 0; j < i; j++) {
      if (array[j] < curr && curr + sums[j] >= sums[i]) {
        sums[i] = curr + sums[j]
        subs[i] = j
      }
    }

    if (sums[i] >= sums[maxIdx]) maxIdx = i
  }

  return [sums[maxIdx], makeIncreasingSeq(maxIdx)]

  function makeIncreasingSeq(idxToTrace) {
    let seq = [];
    while (array[idxToTrace]) {
      seq.unshift(array[idxToTrace])
      idxToTrace = subs[idxToTrace]
    }

    return seq;
  }
}