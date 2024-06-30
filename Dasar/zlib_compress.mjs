import fs from "fs"
import zlib from "node:zlib"
import { unzip, unzipSync } from "zlib"

const source = fs.readFileSync("zlib_compress.mjs")
let result = zlib.gzipSync(source)

console.log(result.toString())
fs.writeFileSync("zlib_compress.mjs.txt", result)
