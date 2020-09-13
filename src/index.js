import Koa from 'koa'

const app = new Koa()

app.use(async ctx => {
    let platform
    let product
    // gets the ip from the request
    // reformats to remove "::ffff:" (ipv4 subnet prefix)
    let ip = ctx.ip
    if (ip.substr(0, 7) == "::ffff:") {
        ip = ip.substr(7)
      }
    // gets the header to get the system info
    const device = ctx.header['user-agent']
    // device validation
    // validates if the request was made with Mac OS
    const macOS = device.split(/[\s,\?\,\./\(\;\)\:\!]+/).find(word => word === "Macintosh")
    if (macOS) {
        platform = "Mac"
    }
    // validates if the request was made with WindowsOS
    const WindowsOS = device.split(/[\s,\?\,\./\(\;\)\:\!]+/).find(word => word === "Windows")
    if (WindowsOS) {
        platform = "Windows PC"
    }
    // validates if the request was made with an iPhone
    const iPhone = device.split(/[\s,\?\,\./\(\;\)\:\!]+/).find(word => word === "iPhone")
    if (iPhone) {
        platform = "iPhone"
    }
    // validates if the request was made with an iPhone
    const Android = device.split(/[\s,\?\,\./\(\;\)\:\!]+/).find(word => word === "Android")
    if (Android) {
        platform = "Android"
    }
    // product validation
    // validates if the request was made on Firefox Browser
    const firefox = device.split(/[\s,\?\,\./\(\;\)\:\!]+/).find(word => word === "Firefox")
    if (firefox) {
        product = "Firefox"
    }
    // validates if the request was made on Opera Browser
    const opera = device.split(/[\s,\?\,\./\(\;\)\:\!]+/).find(word => word === "OPR")
    if (opera) {
        product = "Opera"
    }
    // validates if the request was made on Chrome Based Browsers
    const chromeBased = device.split(/[\s,\?\,\./\(\;\)\:\!]+/).find(word => word === "Chrome")
    if (chromeBased) {
        product = "Chrome Based"
    }
    ctx.body = { 
        device_platform: platform, 
        device_product: product,
        device_ip: ip
     }
});


app.listen(6767, () => {
	console.log(`😅 Server up and runing on http://localhost:6767/ 😁`)
})
