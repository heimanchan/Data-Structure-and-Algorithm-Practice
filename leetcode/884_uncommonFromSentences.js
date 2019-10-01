var uncommonFromSentences = function(A, B) {
    let words = A.split(" ").concat(B.split(" "));
    let counts = {};
    for(let i = 0; i < words.length; i++){
        if(counts.hasOwnProperty(words[i]) === false)
            counts[words[i]] = 0; 
        counts[words[i]]++;
    }
    
    return words.filter(word => counts[word] === 1);
};