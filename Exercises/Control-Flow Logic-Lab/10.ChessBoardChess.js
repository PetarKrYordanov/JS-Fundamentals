function chessBoard(dimension) {
    let board = '<div class="chessboard">\n';
    for (let row = 1; row <= dimension; row++) {
        board += '  <div>\n';

        for (let col = 1; col <= dimension; col++) {
            let color = 'white';
            if ((col + row) % 2 === 0) {
                color = 'black';
            }
            board += `    <span class="${color}"></span>\n`;
        }
        board += '  </div>\n'
    }
    board += '</div>\n';
    //   console.log(board);
    return board;
}

chessBoard(3);