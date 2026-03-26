const op_num: number = Math.floor(Math.random() * 11);

const num_arr: number[] = [];
if(op_num >= 1){
    for(let i: number = 1; i <= op_num; i++){
        num_arr.push(i);
    }
}
else {
    num_arr.push(0);
}

let final: number = 1;
for(const num of num_arr){
    final *= num;
}

console.log(op_num);
console.log("Factorial Result:", final);
console.log();