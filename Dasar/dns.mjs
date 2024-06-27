import { promises as dns } from "dns";

const address = await dns.lookup("www.google.com")

console.info(address.family)