function round(arr) {
    let number = Number(arr[0]);
    let precision =Number(arr[1]);
    if(Number(arr[1]) >15){
        console.log(number);
        return;
    }
    if(number.toFixed(precision) != number){
        console.log(number.toFixed(precision));

    }else {
        console.log(number);
    }

}

round([3.1415926535897932384626433832795, 2]);
round([10.5,3]);