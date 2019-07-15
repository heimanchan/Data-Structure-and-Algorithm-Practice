var romanToInt = function (s) {
  if (!s.length) return 0;

  const map = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  };

  let sum = 0;
  let prev = map[s[0]];
  let next = 0;

  for (let i = 1; i < s.length; i++) {
    next = map[s[i]];

    if (prev < next) {
      sum -= prev;
    } else {
      sum += prev;
    }

    prev = next;
  }

  // add back the first number
  sum += prev;
  return sum;
};