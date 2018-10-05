function isMagicMatrix(input) {

    let rowSum = input.map((row, col) => row.reduce((acc, val) => sum = acc + val))
        .sort((a, b) => a - b).reduce((sum, current, index, arr) => {
            if (arr[arr.length - 1] === arr[0]) {
                return 1;
            }
            return 0;
        });
    let colSum = input.reduce(function (r, a) {
        a.forEach(function (b, i) {
            r[i] = (r[i] || 0) + b;
        });
        return r;
    }, []).sort((a, b) => a - b).reduce((sum, current, index, arr) => {
        if (arr[arr.length - 1] === arr[0]) {
            return 1;
        }
        return 0;
    });
    return rowSum == true && colSum == true;
}

isMagicMatrix([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
);

isMagicMatrix([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
);

isMagicMatrix([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
);

console.log(isMagicMatrix([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]));