function main(input) {
    let arr = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] == "add"){
            arr.push(i+1);
        }else {
            arr.pop();
        }
    }
    if (arr.length == 0){
        console.log('Empty');
        return;
    }
    for (let number of arr) {
        console.log(number);
    }
}

main(['add',
    'add',
    'add',
    'add']
);

main(['add',
    'add',
    'remove',
    'add',
    'add']
);