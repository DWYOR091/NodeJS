import fs, { read } from "fs"
import { Readable } from "stream"

const writeAble = fs.createWriteStream("target.log")
writeAble.write("Muhamad\n")
writeAble.write("Rifqi\n")
writeAble.end()

// const readAble = fs.createReadStream("target.log")
// readAble.addListener("data", (data) => {
//     console.log(data.toString())
// })

async function print(readable) {
    readable.setEncoding('utf8');
    let data = '';
    for await (const chunk of readable) {
        data += chunk;
    }
    console.log(data);
}

print(fs.createReadStream('target.log')).catch(console.error); 
