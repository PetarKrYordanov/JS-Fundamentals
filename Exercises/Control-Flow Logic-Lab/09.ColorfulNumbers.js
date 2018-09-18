function colorfulNumbers(number) {
    let htmlCode = '<ul>\n';

    for (let i = 1; i <= number; i++) {
        let color = 'green';
        if (i % 2 === 0) {
            color = 'blue';
        }
        htmlCode += ` <li><span style='color:
${color}'>${i}</span></li>\n`;
    }
    htmlCode += '</ul>';
    console.log(htmlCode);
}

colorfulNumbers(10);