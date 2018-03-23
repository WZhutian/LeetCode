/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    if (board == null || board.length == 0)
        return;
    solve(board);
};
var solve = function (board) {
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            if (board[i][j] == '.') {
                for (var c = 1; c <= 9; c++) {//trial. Try 1 through 9
                    if (isValid(board, i, j, c)) {
                        board[i][j] = c + ""; //Put c for this cell
                        if (solve(board))
                            return true; //If it's the solution return true
                        else
                            board[i][j] = '.'; //Otherwise go back
                    }
                }
                return false;
            }
        }
    }
    return true;
}
var isValid = function (board, row, col, c) {
    for (var i = 0; i < 9; i++) {
        if (board[i][col] != '.' && board[i][col] == c) return false; //check row
        if (board[row][i] != '.' && board[row][i] == c) return false; //check column
        if (board[3 * parseInt(row / 3) + parseInt(i / 3)][3 * parseInt(col / 3) + i % 3] != '.' &&
            board[3 * parseInt(row / 3) + parseInt(i / 3)][3 * parseInt(col / 3) + i % 3] == c) return false; //check 3*3 block
    }
    return true;
}
module.exports = solveSudoku