class Solution {
  constructor(nums) {
    this.array = nums;
  }
  
  reset() {
    return this.array;
  }
  
  shuffle() {
    let result = [...this.array]
    let n = result.length - 1;
    
    for (let i = n; i > 0; i--) {
      let randomIdx = Math.floor(Math.random() * (i+1));
      [ result[i], result[randomIdx] ] = [ result[randomIdx], result[i] ];
    }
    
    return result;
  }
}