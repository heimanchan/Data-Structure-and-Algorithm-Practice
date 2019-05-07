const interpolate = (str, data) => {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "{") {
      result += str[i];
    } else {
      let key = "";
      while (str[++i] !== "}") {
        key += str[i];
      }

      if (data.hasOwnProperty(key)) {
        result += data[key];
      }
    }
  }
  
  return result;
}

console.log(interpolate("Hello, {name} {name}.", { name: "Bob" }));
console.log(interpolate("name", { name: "Bob" }));
console.log(interpolate("", {name: "Bob"}))
console.log(interpolate("Hello {name} good day.", {}))