function launchSequenceChecker(systemNames, stepNumbers) {
  const hashMap = {};
  
  for (let i = 0; i < systemNames.length; i++) {
    let key = systemNames[i];
    let el = stepNumbers[i];
    
    if (!hashMap.hasOwnProperty(key)) {
      hashMap[key] = [el];
    } else if (hashMap[key][hashMap[key].length - 1] >= el) {
      return false;
    } else {
      hashMap[key].push(el);
    }
  }
  
  return true;
}
