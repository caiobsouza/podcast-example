require('../mocks/spotify-client.mock');
const spotifyService = require('../../src/services/spotify-service');

describe('SpotifyService', () => {
  it('should return the payload with podcast data', async () => {
    const response = await spotifyService.getShows('AAA');
    expect(response.name).toEqual('Mosaico Igreja');
    expect(response.uri).toEqual('spotify:show:2RpKnppT6GQLUsGyeOkcY4');
  });
});
