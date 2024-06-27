//untuk memanipulasi file 

//menggunakan callback
// import fs from "fs"

// const read = (err, data) => {
//     console.info(data.toString())
// }

// fs.readFile("./file_system.mjs", read);



// menggunakan promise
// import fs from "fs/promises"
import { promises as fs } from "fs"
//membaca file system
const buffer = await fs.readFile("./file_system.mjs");

console.info(buffer.toString())

await fs.writeFile("temp.txt", "Hello Rifqi")