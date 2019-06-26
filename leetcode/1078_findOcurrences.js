var findOcurrences = function(text, first, second) {
  let textArray = text.split(" ");
  const result = [];
  
  for (let i = 0; i < textArray.length; i++) {
    if (textArray[i] === first && textArray[i+1] === second && i < textArray.length - 2) {
      result.push(textArray[i+2]);
    }
  }
  
  return result;
};