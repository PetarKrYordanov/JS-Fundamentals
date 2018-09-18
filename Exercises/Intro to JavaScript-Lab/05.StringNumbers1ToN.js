function stringOfNumbers1ToN(numbeerAsString) {
    let number = Number.parseInt(numbeerAsString);
    let result = "";
    for (let i = 1; i <= number; i++) {
        result += i;
    }
    console.log(result.toString());
}

stringOfNumbers1ToN('11');