import { setTimeout, setInterval } from "timers/promises"

// await setTimeout(1000, "rifqi")
// console.log(new Date())

// for await (const start of setInterval(1000)) {
//     console.log(`Start time at ${new Date()}`)
// }

const interval = 1000;
for await (const startTime of setInterval(interval, Date.now())) {
    const now = new Date();
    console.log(now);
    if ((now - startTime) >= 10000)
        break;
}
console.log(Date.now());