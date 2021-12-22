const SpotifyApi = require('spotify-web-api-node')

if (process.NODE_ENV === 'development') {
    require('dotenv').config()
}

const redirectUri = process.env.REDIRECT_URI
const clientId = process.env.SPOTIFY_CLIENT_ID
const secret = process.env.SPOTIFY_SECRET

const trackToObject = (item, i) => {
    return {
        id: item.id,
        name: item.name,
        uri: item.uri,
        position: i + 1,
        url: item.external_urls.spotify,
        artists: item.artists,
        imgurl: item.album.images[0] ? item.album.images[item.album.images.length - 1].url : 'img/nocover.png'
    }
}

const artistToObject = (item, i) => {
    return {
        id: item.id,
        name: item.name,
        uri: item.uri,
        url: item.external_urls.spotify,
        position: i + 1,
        imgurl: item.images[0] ? item.images[item.images.length - 1].url : 'img/nocover.png'
    }
}

async function fetchTopTracks(spotify, range) {
    return await spotify
        .getMyTopTracks({
            limit: 50,
            time_range: range
        })
        .map(trackToObject)
}

async function fetchTopArtists(spotify, range) {
    return await spotify
        .getMyTopArtists({
            limit: 50,
            time_range: range
        })
        .map(artistToObject)
}

exports.handler = async function(event, context, callback) {
    if (!secret || !redirectUri || !clientId) {
        return callback(null, {
            statusCode: 500,
            body: 'Spotify api not available'
        })
    }

    const token = event.queryStringParameters.token

    if (!token)
        return callback(null, {
            statusCode: 200,
            body: 'Token was not passed'
        })

    const spotify = new SpotifyApi({
        clientId: clientId,
        clientSecret: secret,
        redirectUri: redirectUri
    })

    const authorization = await spotify.authorizationCodeGrant(await token)

    spotify.setAccessToken(authorization.body['access_token'])
    spotify.setRefreshToken(authorization.body['refresh_token'])

    try {
        await spotify.getMe()

        const body = JSON.stringify({
            tracks: {
                short: await fetchTopTracks(spotify, 'short_term'),
                medium: await fetchTopTracks(spotify, 'medium_term'),
                long: await fetchTopTracks(spotify, 'long_term')
            },
            artists: {
                short: await fetchTopArtists(spotify, 'short_term'),
                medium: await fetchTopArtists(spotify, 'medium_term'),
                long: await fetchTopArtists(spotify, 'long_term')
            },
            refresh_token: authorization.body.refresh_token
        })

        callback(null, {
            statusCode: 200,
            body
        })
    } catch (err) {
        callback(null, {
            statusCode: 500,
            body: 'error'
        })
    }
}
