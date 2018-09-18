function calculateConeParameters(baseRadius, height) {
    let volume = Math.PI * Math.pow(baseRadius, 2) * height / 3;
    console.log('volume = ' + volume.toFixed(4));

    let slantHeight = Math.sqrt(Math.pow(baseRadius, 2) + Math.pow(height, 2));
    let totalSurface = Math.PI * baseRadius * (baseRadius + slantHeight);

    console.log('area = ' + totalSurface.toFixed(4));
}

calculateConeParameters(3, 5);
calculateConeParameters(3.3, 7.8);