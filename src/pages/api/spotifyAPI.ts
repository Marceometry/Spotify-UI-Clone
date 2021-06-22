import querystring from 'querystring'

const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

const USER_PLAYLISTS_ENDPOINT = 'https://api.spotify.com/v1/users/lhg9s64w62qlvitz3awnfx1ii/playlists?offset=2'
const FEATURED_PLAYLISTS_ENDPOINT = 'https://api.spotify.com/v1/browse/featured-playlists'
const PLAYLIST_ENDPOINT = 'https://api.spotify.com/v1/playlists/' // + {playlist_id}
const ARTISTS_ENDPOINT = 'https://api.spotify.com/v1/me/following?type=artist'
const SEARCH_ENDPOINT = 'https://api.spotify.com/v1/search'
// const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing'
// const TOP_TRACKS_ENDPOINT = 'https://api.spotify.com/v1/me/top/tracks'

const myUrlWithParams = new URL("https://api.spotify.com/v1/search?type=album,artist,playlist,track")

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

export const search = async (params: string) => {
  const { access_token } = await getAccessToken()

  myUrlWithParams.searchParams.append("q", params)

  const response = await fetch(myUrlWithParams.href, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })

  const data = await response.json()

  return console.log(data)
}

export const getArtists = async (limit) => {
  const { access_token } = await getAccessToken()

  const response = await fetch(ARTISTS_ENDPOINT + limit, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })

  const { artists } = await response.json()
  const items = artists.items
  const title = "Seus Artistas Favoritos"
  const slug = "seus-artistas-favoritos"
  const description = null
  const type = "artists"

  return {
    title, slug, description, type, items
  }
}

export const getUserPlaylists = async (limit) => {
  const { access_token } = await getAccessToken()

  const response = await fetch(USER_PLAYLISTS_ENDPOINT + limit, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })

  const { items } = await response.json()
  const title = "Feito para você"
  const slug = "feito-para-voce"
  const description = "Quanto mais você escutar, melhores recomendações vai receber."
  const type = "playlists"

  return {
    title, slug, description, type, items
  }
}

export const getFeaturedPlaylists = async (limit) => {
  const { access_token } = await getAccessToken()

  const response = await fetch(FEATURED_PLAYLISTS_ENDPOINT + limit, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })

  const { playlists } = await response.json()
  const items = playlists.items
  const title = "Playlists em destaque"
  const slug = "playlists-em-destaque"
  const description = "Fique por dentro das playlists mais ouvidas no momento."
  const type = "playlists"

  return {
    title, slug, description, type, items
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

// export const getNowPlaying = async () => {
//   const { access_token } = await getAccessToken()

//   return fetch(NOW_PLAYING_ENDPOINT, {
//     headers: {
//       Authorization: `Bearer ${access_token}`
//     }
//   })
// }

// export const getTopTracks = async () => {
//   const { access_token } = await getAccessToken()

//   return fetch(TOP_TRACKS_ENDPOINT, {
//     headers: {
//       Authorization: `Bearer ${access_token}`
//     }
//   })
// }


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