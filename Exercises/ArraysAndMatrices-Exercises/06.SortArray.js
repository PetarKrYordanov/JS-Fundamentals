function sortArray(input) {

input = input.sort(function(a,b){
    if( a.length-b.length >0){
        return 1;
    }else if(b.length-a.length>0){
        return -1;
    }else {
        return a > b ? 1 : -1;
    }});

    for (let word of input) {
        console.log(word);
    }

}


sortArray(['alpha',
    'beta',
    'gamma',
    'zzzz']
);

sortArray(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']

);