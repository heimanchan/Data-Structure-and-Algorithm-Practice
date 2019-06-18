function minRewards(scores) {
  //Refactor solution
  const rewards = new Array(scores.length).fill(1)

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > scores[i - 1]) rewards[i] = rewards[i - 1] + 1;
  }

  for (let j = scores.length - 2; j >= 0; j--) {
    if (scores[j] > scores[j + 1]) rewards[j] = Math.max(rewards[j], rewards[j + 1] + 1);
  }

  return rewards.reduce((a, b) => (a + b));
	// if (scores.length === 2) return 3;
	// let rewards = new Array(scores.length).fill(1)
	
	// for (let i = 0; i < scores.length; i++) {
	// 	let num = scores[i];
	// 	let j = i - 1;
	// 	let left = scores[j];
	// 	let k = i + 1
	// 	let right = scores[k];
		
	// 	if (num < left && num < right) {
	// 		while (left > num && j >= 0) {
	// 			rewards[j] = Math.max(rewards[j], rewards[j+1] + 1);
	// 			num = left;
	// 			left = scores[--j];
	// 		}
			
	// 		num = scores[i];
	// 		while (num < right && k < scores.length) {
	// 			rewards[k] = Math.max(rewards[k], rewards[k-1] + 1);
	// 			num = right;
	// 			right = scores[++k];
	// 		}
	// 	}
	// }
	
	// console.log(rewards)
	// return rewards.reduce((a,b) => (a+b));
}