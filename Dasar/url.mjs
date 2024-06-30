import url from "node:url"

const myUrl = new URL("https://www.youtube.com:8080/results?search_query=windah")
//manipulasi
myUrl.hostname = "www.google.com"
myUrl.port = ""
myUrl.search = "?search=windah+basudara"
myUrl.searchParams.set("search", "gaming")

console.log(myUrl.protocol);
console.log(myUrl.hostname);
console.log(myUrl.pathname);
console.log(myUrl.port);
console.log(myUrl.search);
console.log(myUrl.searchParams);

