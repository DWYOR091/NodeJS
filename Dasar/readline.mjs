import process from "process";
import readline from "readline/promises"

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const answer = await input.question("Siapa nama anda?")
console.log(answer)
input.close()