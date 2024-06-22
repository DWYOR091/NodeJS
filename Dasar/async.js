function samplePromise() {
    const p = Promise.resolve("Rifqi")
    return p
}

//tidak boleh seperti ini kalau bukan modules
// const name = await samplePromise()
//     console.info(name)

async function run() {
    const name = await samplePromise()
    console.info(name)
}

run()