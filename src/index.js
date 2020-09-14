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
    // validates if the request was made with an Android
    const Android = device.split(/[\s,\?\,\./\(\;\)\:\!]+/).find(word => word === "Android")
    if (Android) {
        platform = "Android"
    }
    // validates if the request was made with an Ubuntu
    const Ubuntu = device.split(/[\s,\?\,\./\(\;\)\:\!]+/).find(word => word === "Ubuntu")
    if (Ubuntu) {
        platform = "Ubuntu"
    }
    // validates if the request was made with an Debian
    const Debian = device.split(/[\s,\?\,\./\(\;\)\:\!]+/).find(word => word === "Debian")
    if (Debian) {
        platform = "Debian"
    }
    // validates if the request was made with an Fedora
    const Fedora = device.split(/[\s,\?\,\./\(\;\)\:\!]+/).find(word => word === "Fedora")
    if (Fedora) {
        platform = "Fedora"
    }
    // validates if the request was made with an Kubuntu
    const Kubuntu = device.split(/[\s,\?\,\./\(\;\)\:\!]+/).find(word => word === "Kubuntu")
    if (Kubuntu) {
        platform = "Kubuntu"
    }
    // validates if the request was made with an Unknown
    const Unknown = device.split(/[\s,\?\,\./\(\;\)\:\!]+/).find(word => word === "Unknown")
    if (Unknown) {
        platform = "Unknown Device"
    }
    // validates if the request was made with an SMART TV
    const SMART = device.split(/[\s,\?\,\./\(\;\)\:\!]+/).find(word => word === "SMART")
    if (SMART) {
        platform = "SMART TV"
    }
    // validates if the request was made with an Hisense TV
    const Hisense = device.split(/[\s,\?\,\./\(\;\)\:\!]+/).find(word => word === "Hisense")
    if (Hisense) {
        platform = "Hisense TV"
    }
    // validates if the request was made with an Linux
    const Linux = device.split(/[\s,\?\,\./\(\;\)\:\!]+/).find(word => word === "Linux")
    if (Linux) {
        platform = "Linux Based"
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
    // validates if the request was made on Microsoft Edge
    const Edge = device.split(/[\s,\?\,\./\(\;\)\:\!]+/).find(word => word === "Edg")
    if (Edge) {
        product = "Microsoft Edge"
    }
    // validates if the request was made on Vivaldi
    const Vivaldi = device.split(/[\s,\?\,\./\(\;\)\:\!]+/).find(word => word === "Vivaldi")
    if (Vivaldi) {
        product = "Vivaldi"
    }
    // validates if the request was made on SamsungBrowser
    const SamsungBrowser = device.split(/[\s,\?\,\./\(\;\)\:\!]+/).find(word => word === "SamsungBrowser")
    if (SamsungBrowser) {
        product = "Samsung Browser"
    }
    // validates if the request was made on TeslaBrowser
    const TeslaBrowser = device.split(/[\s,\?\,\./\(\;\)\:\!]+/).find(word => word === "TeslaBrowser")
    if (TeslaBrowser) {
        product = "Tesla Browser"
    }
    // validates if the request was made on Chromium
    const Chromium = device.split(/[\s,\?\,\./\(\;\)\:\!]+/).find(word => word === "Chromium")
    if (Chromium) {
        product = "Chromium"
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
