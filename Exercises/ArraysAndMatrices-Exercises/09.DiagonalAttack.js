function diagonalAttack(input) {
    let matrix = input.map(value => value.split(' ').map(e => Number(e)));

    let sum = 0;
    let primaryDiagonal = matrix.map((item, index) => {
        return +item.filter((v, ind) => {
            return index === ind
        })
    }).reduce((a, b) => a + b);

    let secondaryDiagonal = matrix.map((item, index) => {
        return +item.filter((v, ind) => {
            return ind === item.length - 1 - index;
        })
    }).reduce((a, b) => a + b);

    let result = matrix.map((value, index) => {
        let a = [];
        for (let i = 0; i < value.length; i++) {
            if (i === index) {
                a.push(value[i])
            } else if (i === value.length - 1 - index) {
                a.push(value[i]);
            } else {
                a.push(primaryDiagonal)
            }
        }
        return a;
    }).forEach(v => console.log(v.join(' ')));

}

diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);

diagonalAttack(['1 1 1',
    '1 1 1',
    '1 1 0']
);