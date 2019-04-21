const urlify = (str, trueLength) => {
  let result = str.slice(0, trueLength);
  return result.replace(/ /g, "%20") // replace " " spaces globally
}

console.log(urlify("Mr John Smith   ", 13))