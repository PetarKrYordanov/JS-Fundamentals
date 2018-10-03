function aggregateElements([a, b, c]) {
    let sum = 0;
    let inverseSum = 0;
    let string = '';
    for (let i = 0; i < arguments[0].length; i++) {
        sum += arguments[0][i];
        inverseSum += 1.0 / arguments[0][i];
        string += arguments[0][i];
    }
    console.log(sum);
    console.log(inverseSum);
    console.log(string);
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);