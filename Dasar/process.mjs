import process from "process";

process.addListener("exit", (exitCode) => {
    console.log(`Node js exit with code ${exitCode}`)
})

console.info(process.argv) //data argumen
console.info(process.version) //versi nodejs
console.table(process.report)
console.info(process.env)

process.exit(1)
//tidak akan keluar
console.info("hello")