function solve(number) {
    let second = number % 12;
    let first = parseInt(number/12);

    console.log(`${first}'-${second}"`);
}

solve(36);
solve(55);
solve(11);