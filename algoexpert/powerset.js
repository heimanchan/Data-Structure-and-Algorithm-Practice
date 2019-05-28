function powerset(array) {
  // recursive solution
  // if (!array.length) return [[]];
  // const last = array[array.length - 1];
  // const subs = powerset(array.slice(0, array.length-1));
  
  // return subs.concat(subs.map( sub => {
  //   let newArr = sub.slice(0)
  //   newArr.push(last);
  //   return newArr;											
  // }))

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
