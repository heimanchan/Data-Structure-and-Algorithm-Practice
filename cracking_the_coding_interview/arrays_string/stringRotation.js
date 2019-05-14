const isRotation = (s1, s2) => {
  let len = s1.length;

  if (len > 0 && len === s2.length) {
    let s1s1 = s1 + s1;
    console.log(s1s1)
    return isSubString(s1s1, s2);
  }

  return false;
}

const isSubString = (s1, s2) => {
  return s1.indexOf(s2) > -1;
}

console.log(isRotation("waterbottle", "erbottlewat"));