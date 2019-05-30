function subarraySort(array) {
	let smallest = Infinity;
	let largest = -Infinity;
	
	for (let i = 0; i < array.length; i++) {
		if (array[i] > array[i+1] || array[i] < array[i-1]) {
			smallest = Math.min(smallest, array[i]);
			largest = Math.max(largest, array[i]);
		}
	}
	
	if (smallest === Infinity || largest === -Infinity) return [-1, -1];
	
	let start = 0;
	while (array[start] <= smallest) start++;
	
	let end = array.length - 1;
	while (array[end] >= largest) end--;
	
	console.log(smallest, largest)
	return [start, end]
}