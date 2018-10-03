function wordsUppercase(str) {
    let strUpper = str.toUpperCase();
    let words = extract();
    words = words.filter(e => e != '');
    return words.join(', ');

    function extract() {
        return strUpper.split(/\W+/);
    }
}

console.log(wordsUppercase('Hi, how are you?'));