const axios = require('axios').default;
const authorizationInterceptor = require('./interceptors/authorization-interceptor')

const config = {
  baseURL: 'https://api.spotify.com/v1',
  headers: { 'Content-Type': 'application/json' },
};

class SpotifyClient {
  constructor() {
    this.accessToken = null;
    this.httpClient = axios.create(config);
    this.httpClient.interceptors.request.use(authorizationInterceptor, error => Promise.reject(error));
  }

  get(path) {
    return this.httpClient.get(path);
  }
}

module.exports = new SpotifyClient();
