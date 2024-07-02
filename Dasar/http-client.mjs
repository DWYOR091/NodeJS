let https
try {
    https = await import('node:https')
} catch {
    console.error('Https support is disable')
}

const endPoint = "https://webhook.site/a06bcfdb-2401-4c47-b4e3-784a58d45532"
const options = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
}
const request = https.request(endPoint, options, (response) => {
    response.on("data", (data) => {
        console.info(`Receive data : ${data.toString()}`)
    })
})

const body = {
    firstName: "Muhamad",
    lastName: "Rifqi"
}

request.write(JSON.stringify(body))
request.end()