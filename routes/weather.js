const {getWeather } = require('../controllers/weather');

const weatherRoutes = (fastify, opts, done) => {
    // get all posts
    fastify.post('/api/weather', getWeather);
    done();
};

module.exports = weatherRoutes;