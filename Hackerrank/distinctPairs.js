function countPairs(arr, k) {
    // Write your code here
    let count = 0;
    let set = new Set;

    for (let currNum of arr) {
        let pairNum = k - currNum;

        if (set.has(currNum)) {
            continue;
        } else {
            set.add(currNum);
            if (set.has(pairNum)) {
                count++;
            }
        }
    }

    return count;
}