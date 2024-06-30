import net from "net"

const server = net.createServer((client) => {
    console.log("Client Connected")
    client.on("data", (data) => {
        console.log(`Received data from client: ${data.toString()}`)
        client.write(`Hello ${data.toString()}`)
    })
})

server.listen(3000, "localhost")