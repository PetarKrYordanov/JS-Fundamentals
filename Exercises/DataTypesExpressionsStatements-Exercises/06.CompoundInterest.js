function calculateFutureValue(arr){
    let presentValue = arr[0];
    let interestRate = arr[1]/100.0;
    let compoundPeriod = arr[2];
    let compoundFrequency = 12.0 / compoundPeriod;
    let t = arr[3];

    let futureValue = presentValue * Math.pow((1+ (interestRate/compoundFrequency)),compoundFrequency*t);
    console.log(futureValue.toFixed(2));
}

calculateFutureValue([1500, 4.3, 3, 6]);
calculateFutureValue([100000, 5, 12, 25]);