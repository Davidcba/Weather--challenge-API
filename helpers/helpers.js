const cacheSettings = {
    ttl : 60,
    request: {
        method: ['POST'],
        url: true
    }
}
const extApiParams = {
    appid : process.env.WAPI_KEY,
    units : "metric",
    exclude: "hourly,daily,alerts,minutely",
    lat: "",
    lon: ""
}
const isOver = (temp) =>{
    let comp = 15;
    return temp > comp;
}

module.exports = {
    cacheSettings,
    extApiParams,
    isOver

}