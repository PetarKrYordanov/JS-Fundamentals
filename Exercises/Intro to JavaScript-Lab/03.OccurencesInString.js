function occurrencesInString(str, letter) {
    let count = 0;
    let word = str;

    for (let i = 0; i < word.length;  i++) {
        if (word[i] == letter){
            count ++;
        }
    }
    console.log(count);
}

occurrencesInString('hello', 'l');
occurrencesInString('panther', 'n');