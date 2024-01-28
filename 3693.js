const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline.on('line', function(line) {
    input.push(line);
    if(input.length === +input[0]+1) {
        input.shift();
        readline.close();
    }
}).on('close', function(){
    q = input.map(item=>+item);
    for(i in q) {
        solution(q[i])
    }
    process.exit();
});

function solution(q) {
    if(q % 5 > 0) q = Math.floor(q/5) + 1;
    else q = Math.floor(q/5);
    let result = {row:0, col:0, area:0};
    let row = 48;
    let col = 12;

    if(q === 1)
        result = {row:row, col:col, area:row*col};
    else {
        for(let cols=1; cols<=Math.sqrt(q); cols++) {
            row = 48;
            col = 12;
            row += 44 * (cols-1);
            col += 10 * (Math.floor(q/cols)-1);
            if(q % cols > 0)
                col += 10;
            let mul = row * col;
            if(result.area === 0)
                result = {row:row, col:col, area:mul};
            else if(result.area > mul) {
                result = {row:row, col:col, area:mul};
            }
            else if(result.area === mul)
                if(result.row-result.col > row-col) {
                    result = {row:row, col:col, area:mul};
                }
        }
    }

    if(result.col > result.row) {
        temp = result.col;
        result.col = result.row;
        result.row = temp;
    }

    console.log(result.row, "X", result.col, "=", result.area);
}
