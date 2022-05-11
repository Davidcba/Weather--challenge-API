const {getWeather } = require('../controllers/weather');

const weatherRoutes = (fastify, opts, done) => {
    fastify.post('/api/weather', getWeather);
    done();
};

module.exports = weatherRoutes;
