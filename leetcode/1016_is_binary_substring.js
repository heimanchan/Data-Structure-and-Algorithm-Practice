var queryString = function(S, N) {
  for (let i = 1; i <= N; i++) {
    console.log(i.toString(2))
    if (S.indexOf(i.toString(2)) < 0) return false;
  }
  
  return true
};
