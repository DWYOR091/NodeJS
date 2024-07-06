//cluster bisa membuat nodejs mejalankan lebih 1 proses
//cocok untuk cpu pada laptop yg multicore
//kalau cpunya ada 4 ya harus 4processnya

import cluster from "cluster";
import process from "process";
import os from "node:os";
import http from "node:http"

if (cluster.isPrimary) {
    console.log(`Primary : ${process.pid}`)

    for (let i = 0; i < os.cpus().length; i++) {
        cluster.fork()
    }
    //menambhkan listener jika ada worker yg exit jadi tahu
    cluster.on('exit', (worker) => {
        console.log(`Worker-${worker.id} is exit`)

        //ketika mati bisa nyala kembali workernya 
        //jadinya konsisten
        cluster.fork()
    })

}

if (cluster.isWorker) {
    console.log(`Worker: ${process.pid}`)

    //test worker
    const server = http.createServer((req, res) => {
        res.write(`response from process ${process.pid}`)
        res.end()
        process.exit()
    })

    server.listen(3000)
}   