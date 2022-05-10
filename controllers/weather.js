const axios = require("axios");
const {extApiParams, isOver} = require ( "../helpers/helpers");


const getWeather = async (req, reply) => {

    extApiParams.lat = req.body.lat;
    extApiParams.lon = req.body.lon;

    try {
        let apiData = await axios.get(process.env.WAPI_URL, {
            params: extApiParams
        })
        reply.status(200).send({"result": isOver(apiData.data.current.temp)});

    } catch (error) {
        reply.status(500).send("An error ocurred when trying to connect with the API: " + error);

    }


};

module.exports = {getWeather};