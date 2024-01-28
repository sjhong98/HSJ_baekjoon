const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on('line', function(line) {
    input.push(line);
    if(input.length === 3) 
        rl.close();
}).on('close', function(){
    p = input.map(item => {return item.split(" ").map(item => {return +item})});
	let val = (p[0][0]*p[1][1] + p[1][0]*p[2][1] + p[2][0]*p[0][1]) - (p[1][0]*p[0][1] + p[2][0]*p[1][1] + p[0][0]*p[2][1]);
    if(val === 0) 
        console.log(0);
    else if(val > 0)
        console.log(1);
    else    
        console.log(-1)
    process.exit();
});