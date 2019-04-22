const isOneAway = (s1, s2) => {
  if (s1.length === s2.length) {
    return oneReplace(s1, s2);
  } else if (s1.length + 1 === s2.length) {
    return oneEdit(s1, s2);
  } else if (s2.length + 1 === s1.length) {
    return oneEdit(s2, s1);
  }

  return false;
}

const oneReplace = (s1, s2) => {
  let diff = false;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      if (diff) return false;
      diff = true;
    }
  }

  return true;
}

const oneEdit = (s1, s2) => {
  let idx1 = 0, idx2 = 0;

  while (idx1 < s1.length && idx2 < s2.length) {
    if (s1[idx1] !== s2[idx2]) {
      if (idx1 !== idx2) {
        return false
      } else {
        idx2++;
      }
    } else {
      idx1++;
      idx2++;
    }
  }

  return true;
}

console.log(isOneAway("pale", "ple"))   //true
console.log(isOneAway("pales", "pale")) //true
console.log(isOneAway("pale", "bale"))  //true
console.log(isOneAway("pale", "bake"))  //false
console.log(isOneAway("pale", "balee")) //false
console.log(isOneAway("aa", "b"))       //false
console.log(isOneAway("aaa", "baa"))    //true