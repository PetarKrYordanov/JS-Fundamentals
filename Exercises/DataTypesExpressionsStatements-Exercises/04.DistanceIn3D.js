function calculateDistance3d(arr) {
    let squareSum = 0;
    for (let i = 0; i < 3; i++) {
        let pointDiff = Math.abs(arr[i]-arr[i+3]);
        squareSum += Math.pow(pointDiff,2);
    }
    console.log(Math.sqrt(squareSum));
}

calculateDistance3d([3.5, 0, 1, 0, 2, -1])