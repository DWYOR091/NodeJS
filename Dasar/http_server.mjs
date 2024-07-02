import http from "node:http"

const server = http.createServer((req, res) => {


    if (req.method === "POST") {
        req.on("data", (data) => {
            res.setHeader("Content-Type", "application/json")
            //balesan
            res.write(`${data}`)
            res.end()
        })
    } else {

        //route
        if (req.url === "/rifqi") {
            res.write("Hello Rifqi")
        } else {
            res.write('Welcome to Http')
        }
        // console.log(req.method)
        // console.log(req.headers)
        res.end()
    }
})

server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 bad Request\r\n\r\n')
})

server.listen(3000)