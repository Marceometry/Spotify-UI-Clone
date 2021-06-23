import querystring from 'querystring'

const client_id = '73bc6779890243ae9c4bed89800d6214'
const client_secret = '0864880a9d5446c39c6421f84c409bfb'
const refresh_token = 'AQAlXbQKVznQ_KexhMqKXcqViamT8i6Le5uWt_FTdqkpR3koEaV7PHklGV_lOenzdmnfJ3vb9nvwtW_r3sLzdLP8t51v1UlGERHzG1-iB6Hef6QccAiJQD9_afZ6bEenNMY'

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

const USER_PLAYLISTS_ENDPOINT = 'https://api.spotify.com/v1/users/lhg9s64w62qlvitz3awnfx1ii/playlists'
const FEATURED_PLAYLISTS_ENDPOINT = 'https://api.spotify.com/v1/browse/featured-playlists'
const PLAYLIST_ENDPOINT = 'https://api.spotify.com/v1/playlists/' // + {playlist_id}
const ARTISTS_ENDPOINT = 'https://api.spotify.com/v1/me/following?type=artist'
const searchEndpoint = new URL("https://api.spotify.com/v1/search?type=album,artist,playlist,track")
// const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing'
// const TOP_TRACKS_ENDPOINT = 'https://api.spotify.com/v1/me/top/tracks'

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

  searchEndpoint.searchParams.append("q", params)
  const response = await fetch(searchEndpoint.href, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  })
  searchEndpoint.searchParams.delete("q")

  const { artists, albums, playlists, tracks } = await response.json()

  const data = {
    artistsResult: {
      title: 'Artistas',
      type: 'artists',
      items: artists.items
    },
    albumsResult: {
      title: 'Álbuns',
      type: 'albums',
      items: albums.items
    },
    playlistsResult: {
      title: 'Playlists',
      type: 'playlists',
      items: playlists.items
    },
    tracksResult: {
      title: 'Músicas',
      type: 'tracks',
      items: tracks.items
    }
  }

  console.log(data)

  return data
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