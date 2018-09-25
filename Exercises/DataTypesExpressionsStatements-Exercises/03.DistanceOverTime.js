function calculateDistance(arr) {
    let V1 = arr[0];
    let V2 = arr[1];
    let T = arr[2];
    console.log(Math.abs(V1 - V2) * T / 3.6);
}

calculateDistance([0, 60, 3600]);
calculateDistance([11, 10, 120]);
calculateDistance([5, -5, 40]);