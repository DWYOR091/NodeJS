import net from "net"

const client = net.createConnection({
    port: 3000,
    localhost: "localhost"
})

client.addListener("data", (data) => {
    console.log(data.toString())
})

setInterval(() => {
    client.write(process.argv[2])
}, 1000);

client.on("end", () => {
    console.log("disconnected from server")
    client.end()
})
