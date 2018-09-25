function solve(a, b, c) {
    let d = (b * b - 4.0 * a * c);
    if (d < 0) {
        console.log('No');
    } else if (d == 0) {
        console.log(-b /( 2.0 * a));
    } else {
        let rootD = Math.sqrt(d);

        let x2 = (-b + rootD) / (2.0 * a);
        let x1 = (-b - rootD) / (2.0 * a);
        console.log(x1);
        console.log(x2);
    }
}

solve([6,11,-35]);
solve([1,-12,36]);