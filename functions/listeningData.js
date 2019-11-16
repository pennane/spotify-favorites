const SpotifyApi = require('spotify-web-api-node')

const secret = process.env.SPOTIFY_SECRET;
const redirectUri = process.env.REDIRECT_URI;
const clientId = process.env.SPOTIFY_CLIENT_ID;

function ellapsedFrom(date, msg) {
    console.log(msg + ": " + (Date.now() - date) + " ms")
}

exports.handler = function (event, context, callback) {

    if (!secret || !redirectUri || !clientId) {
        console.log("ENV VARIABLES ARE MISSING")
        return callback(null, {
            statusCode: 500,
            body: "Spotify api not available"
        })
    }

    const now = Date.now()
    const code = event.queryStringParameters.token
    ellapsedFrom(now, "start")

    if (!code) return callback(null, {
        statusCode: 200,
        body: "Code not received"
    });

    const spotify = new SpotifyApi({
        clientId: clientId,
        clientSecret: secret,
        redirectUri: redirectUri
    })

    spotify.authorizationCodeGrant(code)
        .then(data => {

            ellapsedFrom(now, "Granted")
            spotify.setAccessToken(data.body["access_token"])
            spotify.setRefreshToken(data.body["refresh_token"])

            async function topTracks(range) {
                let i = 0, tracks = {}
                const trackToObject = item => {
                    if (tracks[item.id]) return
                    i++
                    tracks[item.id] = {
                        id: item.id, name: item.name, uri: item.uri,
                        position: i, url: item.external_urls.spotify,
                        artists: item.artists,
                        imgurl: item.album.images[0]
                            ? item.album.images[item.album.images.length - 1].url
                            : "img/nocover.png"
                    }
                }

                let topTracks50 = await spotify.getMyTopTracks({
                    limit: 50, time_range: range
                })

                await topTracks50.body.items.forEach(item => {
                    trackToObject(item)
                })

                return tracks
            }

            async function topArtists(range) {
                let i = 0, artists = {}

                const artistToObject = item => {
                    if (artists[item.id]) return
                    i++
                    artists[item.id] = {
                        id: item.id, name: item.name, uri: item.uri,
                        url: item.external_urls.spotify, position: i,
                        imgurl: item.images[0]
                            ? item.images[item.images.length - 1].url
                            : "img/nocover.png"
                    }
                }

                let topArtists50 = await spotify.getMyTopArtists({
                    limit: 50, time_range: range
                })

                await topArtists50.body.items.forEach(item => {
                    artistToObject(item)
                })

                return artists
            }

            spotify.getMe()
                .then(async () => {
                    ellapsedFrom(now, "got me")
                    let tracks = {
                        short: await topTracks("short_term"),
                        medium: await topTracks("medium_term"),
                        long: await topTracks("long_term")
                    }
                    let artists = {
                        short: await topArtists("short_term"),
                        medium: await topArtists("medium_term"),
                        long: await topArtists("long_term")
                    }
                    ellapsedFrom(now, "got tracks")
                    callback(null, {
                        statusCode: 200,
                        body: JSON.stringify({ tracks, artists, refresh_token: data.body.refresh_token })
                    });
                    ellapsedFrom(now, "sent response")
                })
                .catch(err => callback(null, {
                    statusCode: 500,
                    body: "err" + JSON.stringify(err)
                }))
        })
        .catch(err => {
            callback(null, {
                statusCode: 500,
                body: "err" + JSON.stringify(err)
            })
            console.log(err)
        })
}