input = [
    'mission statement',
    'a quick bite to eat',
    'a chip off the old block',
    'chocolate bar',
    'mission impossible',
    'a man on a mission',
    'block party',
    'eat my words',
    'bar of soap'
]

expected output = [
    'a quick bite to eat my words',
    'a chip off the old block party',
    'chocolate bar of soap',
    'a man on a mission statement',  
    'a man on a mission impossible'
]

function generate_phrases(phrases) {
    let result = [];
    let map = {};

    for (let phrase of phrases) {
        let words = phrase.split(" ");
        let firstWord = words[0];
        let secondToLast = words.slice(1).join(" ");

        if (map.hasOwnProperty(firstWord)) {
            map[firstWord].push(secondToLast);
        } else {
            map[firstWord] = [secondToLast];
        }
    }

    for (let phrase of phrases) {
        let words = phrase.split(" ");
        let lastWord = words[words.length - 1];

        if (map.hasOwnProperty(lastWord)) {
            map[lastWord].forEach(subPhrase => result.push(`${phrase} ${subPhrase}`));
        }
    }

    return result;
}