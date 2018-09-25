function binaryToDecimal(string) {
    let num = 0;
    let count = 0;
    for( let i = string.length -1; i>=0; i--){
        if(string[i] == '1'){
            num += Math.pow(2,count);
        }
        count ++;
    }
    console.log(num);
}

binaryToDecimal('00001001');
binaryToDecimal('11110000');
