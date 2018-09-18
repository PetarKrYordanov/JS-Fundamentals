function oddOrEvenNumber(number) {
    if (Math.abs(number % 2) == 1) {
        console.log("odd");
    } else if (number % 2 == 0) {
        console.log('even');
    } else {
        console.log('invalid');
    }
}

oddOrEvenNumber(5);
oddOrEvenNumber(8);
oddOrEvenNumber(1.5);
oddOrEvenNumber(-3)