const podcastsRoute = require('./podcasts');

module.exports = app => {
  app.use('/podcasts', podcastsRoute);
};
