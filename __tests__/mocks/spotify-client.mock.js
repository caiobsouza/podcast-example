jest.doMock('./../../src/clients/spotify-client', () => {
  class SpotifyClient {
    get() {
      return Promise.resolve({ data: require('../data/podcasts.json') });
    }
  }
  return new SpotifyClient();
});
