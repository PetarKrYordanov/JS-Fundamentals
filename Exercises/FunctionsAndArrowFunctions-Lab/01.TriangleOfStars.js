function printTriangle(rows) {
    for (let i = 1; i <= rows; i++) {
        console.log('*'.repeat(i));
    }
    for(let i = rows-1; i>0;i--){
        console.log('*'.repeat(i));
    }
}

printTriangle(1);
printTriangle(2);
printTriangle(5);