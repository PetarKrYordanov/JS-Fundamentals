function primeChecker(num) {
    if (num === 1 | num === 0) {
        return false;
    }
    if (num<0){
        return false;
    }
    for (let i = 2; i < Math.abs(Math.sqrt(num)); i++) {
        if (Math.abs(num) % i === 0) {
            return false;
        }
    }
    return true;
}

primeChecker(3);
primeChecker(7);
primeChecker(8);
primeChecker(81);
primeChecker(-5);
primeChecker(0);
primeChecker(1)