function increasingSubsequence(input) {
        let number =Number(input[0]);

        for (let i = 1; i < input.length; i++) {
            if(number<input[i]){
                number = input[i];
            }else {
                input[i] =Number.MIN_VALUE;
            }
        }
        let arr = input.filter(e=>e!=Number.MIN_VALUE);
        for (let num of arr) {
            console.log(num);
        }
}

increasingSubsequence([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
);

increasingSubsequence([20,
    3,
    2,
    15,
    6,
    1]
);