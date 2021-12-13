var SpotifyWebApi = require('spotify-web-api-node');

const scopes = [
    'user-read-email',
    'playlist-read-private',
    'playlist-read-collaborative',
    'streaming',
    'user-read-private',
    'user-library-read',
    'user-top-read',
    'user-read-playback-state',
    'user-modify-playback-state',
    // 'user-library-modify',
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-follow-read',
].join(',');

const params = {
    scope: scopes,
};

const queryParamsString = queryString.stringify(params);