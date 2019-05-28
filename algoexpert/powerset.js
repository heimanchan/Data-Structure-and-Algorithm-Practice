function powerset(array) {
  // recursive solution
  // if (idx < 0) return [[]];

  // const el = array[idx];
  // const subsets = powerset(array, idx - 1);
  // const length = subsets.length;
  // for (let i = 0; i < length; i++) {
  //   const currSub = subsets[i];
  //   subsets.push(currSub.concat([el]));
  // }

  // return subsets;

  // iterative solution
	const subsets = [[]];
	for (let el of array) {
		let subsetsLength = subsets.length;
		for (let i = 0; i < subsetsLength; i++) {
			const currSub = subsets[i];
			subsets.push(currSub.concat([el]));
		}
	}
	
	return subsets
}

// Do not edit the line below.
exports.powerset = powerset;
