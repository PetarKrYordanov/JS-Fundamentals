function countWords([input]) {
    let wordsCount = {};
    let words = input.split(/[\W]+/).filter(e => e !== '');

    for (let w of words) {
        wordsCount[w] ? wordsCount[w]++ : wordsCount[w] = 1;
    }
    return (JSON.stringify(wordsCount));
}

countWords([`Far too slow, you're far too slow.`]);
countWords(['JS devs use Node.js for server-side JS.-- JS for devs']);