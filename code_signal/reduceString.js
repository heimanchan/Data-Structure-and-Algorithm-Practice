// You are given a string.Remove its first and last characters until the string 
// is empty or the first and the last characters are not equal.
// Output the resulting string.

function reduceString(inputString) {
  if (!inputString.length) return ""
  let p = 0
  let q = inputString.length - 1
  let arr = inputString.split("")
  
  while (p < q) {
    if (arr[p] === arr[q]) {
      p++
      q--
    } else {
      return inputString.slice(p, q+1)
    }
  }
  
  return arr[p] === arr[q] ? "" : inputString.slice(p, q+1)
}
