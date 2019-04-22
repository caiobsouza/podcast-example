const axios = require('axios').default;
const querystring = require('querystring');

const getClientCredentials = () => {
  const base64ClientKey = Buffer.from(`${process.env.SPOTIFY_CLIENTID}:${process.env.SPOTIFY_SECRET}`).toString(
    'base64'
  );
  return `Basic ${base64ClientKey}`;
};

const getAccessToken = () => {
  const Authorization = getClientCredentials();

  return axios.post('/api/token', querystring.stringify({ grant_type: 'client_credentials' }), {
    baseURL: 'https://accounts.spotify.com',
    headers: {
      Authorization,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
};

module.exports = async config => {
  // TODO: check for expired token
  if (this.accessToken && this.accessToken.access_token) return;
  try {
    const response = await getAccessToken();
    this.accessToken = response.data;
    config.headers.Authorization = `Bearer ${this.accessToken.access_token}`;
    return config;
  } catch (error) {
    console.log('Aff doido: ', error.response.data);
  }
};
