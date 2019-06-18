// Find the smallest missing positive integer from the input array
// [1,3,1,4,6,2] => 5
// [-1, -3] => 1

function missingPositiveInteger(A) {
    const seen = new Set;
    let result = 1;
    
    for (const num of A) {
        if (num > 0) seen.add(num)
    }
    
    while (seen.has(result)) {
        result++;
    }
    return result;
}

console.log(missingPositiveInteger([1, 3, 1, 4, 6, 2]))
console.log(missingPositiveInteger([-1, -3]))
console.log(missingPositiveInteger([1,3,5]))