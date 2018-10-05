function solve([width, height, x, y]) {

    let matrix = [];
    for (let row = 0; row < height; row++) {
        let arr = [];
        for (let col = 0; col < width; col++) {
            if (row == x && y !== width) {
                arr.push(Math.abs(col - y) + 1);
            } else if (col === y && x !== height) {
                arr.push(Math.abs(row - x) + 1);
            }
            else if (Math.abs(x - row) === Math.abs(y - col)) {
                arr.push(Math.abs(x - row) + 1);
            } else if (Math.abs(x - row) > Math.abs(y - col)) {
                arr.push(Math.abs(x - row) + 1);
            } else if (Math.abs(x - row) < Math.abs(y - col)) {
                arr.push(Math.abs(y - col) + 1);
            }
            else {
                arr.push(1);
            }
        }
        matrix.push(arr);
    }
    matrix.forEach(number => console.log(number.join(' ')));
}

solve([4, 4, 0, 0]);
solve([5, 5, 2, 2]);
solve([3, 3, 2, 2]);