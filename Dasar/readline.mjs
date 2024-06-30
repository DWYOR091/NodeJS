//readline untuk menerimana input user biar interaktif
import process from "process";

// pakai callback
import readline from "readline";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

input.question("Siapa nama anda?", (nama) => {
    console.log(nama)
    input.close()
})

// pakai promise
// import readline from "readline/promises"

// const input = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// const answer = await input.question("Siapa nama anda?")
// console.log(answer)
// input.close()
