// 1click
// 2,有人赢了或者格子不为空，return
// 3，当前下棋的人是X则空格里填x，否则填o
// 4,判断谁赢了，有人赢--return，否则向下执行
// 5，改变下棋的人为另一个

let player = "x"//x先下棋
handleClick(e) {

    //1有人赢了或者格子不为空，return
    if(winnerIs() || !valueOfSquare()) {
        return;
    }

    //2,当前下棋的人是X则空格里填x，否则填o
    changeInnerHTML(e.target);

    //3有人赢了或者格子不为空，return
    if(winnerIs() || !valueOfSquare()) {
        return;
    }
};

function winnerIs() {
    let winner = null;
    return winner;
}
function valueOfSquare() {
    isEmpety = true;
    return isEmpety;
}

function changeInnerHTML(dom) {
    dom.innerHTML = player === 'x'?'x':'o';
}