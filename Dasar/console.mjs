//class console secar manual
const { Console } = console;
import fs from "fs"

const file = fs.createWriteStream('application.log')

const log = new Console({
    stdout: file,
    stderr: file
})

log.info("rifqi")
log.error("error")
const person = {
    firstName: "Muhamad",
    lastName: "Rifqi"
}
log.table(person)
