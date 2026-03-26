"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const op_num = Math.floor(Math.random() * 11);
const num_arr = [];
if (op_num >= 1) {
    for (let i = 1; i <= op_num; i++) {
        num_arr.push(i);
    }
}
else {
    num_arr.push(0);
}
let final = 1;
for (const num of num_arr) {
    final *= num;
}
console.log(op_num);
console.log("Factorial Result:", final);
console.log();
//# sourceMappingURL=script.js.map