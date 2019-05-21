// function hasSingleCycle(array) {
// 	let pos = 0;
// 	let count = array.length;
	
// 	for (let i = 0; i < array.length; i++) {
// 		pos += array[i]
// 		if (count-- < 0) return false;
// 	}
	
// 	return pos % array.length === 0;
// }

function hasSingleCycle(array) {
  let count = 0;
  let idx = 0;
  while (count < array.length) {
    if (idx === 0 && count > 0) return false;
    count++;
    idx = getNextIndex(idx, array)
  }

  return idx === 0;
}

function getNextIndex(currIdx, array) {
  const jump = array[currIdx];
  let nextIdx = (currIdx + jump) % array.length;
  if (nextIdx < 0) {
    nextIdx += array.length
  }

  return nextIdx;
}