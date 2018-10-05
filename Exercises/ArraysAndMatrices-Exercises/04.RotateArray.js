function rotateArray(arr) {
    let rotation = (arr[arr.length-1]) % (arr.length-1 );
    arr.pop();
    for(let i = 0; i < rotation; i++){
        let number = arr.pop();
        arr.unshift(number)
    }

    console.log(arr.join(' '));
}

rotateArray(['1',
    '2',
    '3',
    '4',
    '2']
);

rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple',
    '15']
);