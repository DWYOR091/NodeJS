import path from "path";

const file = "Users/belajar/contoh.html";

console.info(path.basename(file)) //contoh
console.info(path.dirname(file)) //Users/belajar
// console.info(path.delimiter(file)) //
console.info(path.extname(file)) // .html