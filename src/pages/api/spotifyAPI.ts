import querystring from 'querystring'

const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

const USER_PLAYLISTS_ENDPOINT = 'https://api.spotify.com/v1/users/lhg9s64w62qlvitz3awnfx1ii/playlists?offset=2'
const PLAYLIST_ENDPOINT = 'https://api.spotify.com/v1/playlists/' // + {playlist_id}
const ARTISTS_ENDPOINT = 'https://api.spotify.com/v1/me/following?type=artist&limit=8'
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token
    })
  })

  return response.json()
}

export const getArtists = async () => {
  const { access_token } = await getAccessToken()

  const response = await fetch(ARTISTS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })

  const result = await response.json()
  const title = "Seus Artistas Favoritos"
  const description = null
  const type = "artists"

  return {
    title, description, type, result
  }
}

export const getUserPlaylists = async () => {
  const { access_token } = await getAccessToken()

  const response = await fetch(USER_PLAYLISTS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })

  const result = await response.json()
  const title = "Feito para você"
  const description = "Quanto mais você escutar, melhores recomendações vai receber."
  const type = "playlists"

  return {
    title, description, type, result
  }
}

export const getPlaylist = async (id) => {
  const { access_token } = await getAccessToken()

  const response = await fetch(PLAYLIST_ENDPOINT + id, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })

  return response.json()
}

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken()

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
}

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken()

  return fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
}


// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// axios('https://accounts.spotify.com/api/token', {
//   headers: {
//     'Content-Type' : 'application/x-www-form-urlencoded',
//     'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)      
//   },
//   data: 'grant_type=client_credentials',
//   method: 'POST'
// })
// .then(tokenResponse => {      
//   setToken(tokenResponse.data.access_token);

// axios('https://api.spotify.com/v1/browse/categories?locale=sv_US', {
//   method: 'GET',
//   headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
// })
// .then (genreResponse => {        
//   setGenres({
//     selectedGenre: genres.selectedGenre,
//     listOfGenresFromAPI: genreResponse.data.categories.items
//   })
// });

// });