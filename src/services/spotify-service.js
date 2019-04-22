const spotifyClient = require('../clients/spotify-client');

module.exports = {
  async getShows(artistID) {
    const { data } = await spotifyClient.get(`/shows/${artistID}`);
    return data;
  },
};
