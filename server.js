const fastify = require('fastify')({ logger: true });
const cache = require('fastify-cache');
const {cacheSettings} = require("./helpers/helpers");
require('dotenv').config()

const PORT = process.env.PORT || 5000;
fastify.register((cache, cacheSettings));

fastify.register(require('./routes/weather'));

const startServer = async () => {
    try {
        await fastify.listen(PORT);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

startServer()