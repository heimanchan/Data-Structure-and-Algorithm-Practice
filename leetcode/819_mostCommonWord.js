var mostCommonWord = function(paragraph, banned) {
  const lowerPara = paragraph.toLowerCase().split(" ").map(word => word.replace(/[^a-z]+/, ""));
  const countMap = {};
  const banSet = new Set;
  let result;
  let maxCount = 0;
  
  for (const banWord of banned) {
    banSet.add(banWord);
  }
  
  for (const word of lowerPara) {
    if (banSet.has(word)) {
      continue;
    } else if (word in countMap) {
      countMap[word]++;
    } else {
      countMap[word] = 1;
    }
    
    if (countMap[word] > maxCount) {
      result = word;
      maxCount = countMap[word]
    }
  }
  
  console.log(banSet, countMap)
  return result;
};