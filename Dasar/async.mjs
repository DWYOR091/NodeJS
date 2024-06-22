//mjs defaultnya non blocking(async)
async function samplePromise() {
    return Promise.resolve("Rifqi")
}

const name = await samplePromise()
console.info(name)