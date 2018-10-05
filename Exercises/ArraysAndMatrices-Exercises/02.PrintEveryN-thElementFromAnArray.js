function main(input) {
    let result = "";

    let number = Number(input[input.length-1]);
    input.pop();

    for(let i = 0; i<input.length;i+=number){
        console.log(input[i]);
    }
}

main(['5',
    '20',
    '31',
    '4',
    '20',
    '2']
);

main(['dsa',
    'asd',
    'test',
    'tset',
    '2']

);

main(['1',
    '2',
    '3',
    '4',
    '5',
    '6']
);