var uncommonFromSentences = function(A, B) {
  let words = A.split(" ").concat(B.split(" "));
  let counts = {};

  for (let word of words) {
    counts[word] = (counts[word] || 0) + 1;
  }

  return words.filter(word => counts[word] === 1);
};