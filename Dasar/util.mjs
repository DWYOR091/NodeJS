//utility untuk mempermudah buat program nodejs

import util from "util"

const name = "Rifqi"

//now
console.log(`Hello ${name}`)
//old
console.log(util.format("Hello %s", name))

//data json contoh
const person = {
    firstName: "Muhamad",
    lastName: "Rifqi"
}

console.log(`Person: ${JSON.stringify(person)}`)
console.log(util.format("Person: %j", person))