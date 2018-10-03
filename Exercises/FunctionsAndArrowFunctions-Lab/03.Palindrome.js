function isPalindrome(word) {
    for (var i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[word.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

isPalindrome('hahahh');
console.log(isPalindrome('racecar'));