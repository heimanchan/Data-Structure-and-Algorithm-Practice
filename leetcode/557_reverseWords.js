var reverseWords = function(s) {
  return s.split(" ").map(word => reverse(word)).join(" ")
  
  function reverse(word) {
    let reverseWord = "";
    
    for (let i = word.length - 1; i >= 0; i--) {
      reverseWord += word[i];
    }
    
    return reverseWord;
  }
};