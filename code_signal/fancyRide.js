function fancyRide(l, fares) {
  const map = {
    0: "UberX",
    1: "UberXL",
    2: "UberPlus",
    3: "UberBlack",
    4: "UberSUV",
  }  
  let result = -1;
  
  for (let i = 0; i < fares.length; i++) {
    if (fares[i] * l <= 20) result++;
  }
  
  return map[parseInt(result)];
}
