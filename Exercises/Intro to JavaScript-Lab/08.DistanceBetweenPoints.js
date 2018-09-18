function calculateDistance(x1,y1,x2,y2) {
    let a = x1 - x2;
    let b = y1 - y2;

    let c = Math.sqrt( a*a + b*b );
   return c;
}

calculateDistance(2, 4, 5, 0);
calculateDistance(2.34, 15.66, -13.55, -2.9985);