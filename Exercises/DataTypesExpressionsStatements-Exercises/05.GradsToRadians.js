function convertGradsToDegree(grads) {
    grads %= 400;
    if (grads<0){
        grads = 400 + grads;
    }

  let degrees = 360 *grads / 400;
    console.log(degrees);
}

convertGradsToDegree(100);
convertGradsToDegree(400);
convertGradsToDegree(850);
convertGradsToDegree(-50)