function calculateBoxes(totalBottles, boxCapacity) {
    console.log(Math.ceil(totalBottles / boxCapacity));
}

calculateBoxes(20, 5);
calculateBoxes(15, 7);
calculateBoxes(5, 10);