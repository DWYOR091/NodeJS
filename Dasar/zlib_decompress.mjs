import fs from "fs"
import zlib from "node:zlib"

const read = fs.readFileSync('zlib_compress.mjs.txt');
zlib.unzip(read, (err, buffer) => {
    console.log(buffer.toString())
})