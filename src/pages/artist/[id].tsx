import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { getArtist, search } from '../api/spotifyAPI'

import { Add, MoreHoriz } from '@material-ui/icons'
import PlayArrowGreen from '../../components/PlayArrowGreen'
import TrackRow from '../../components/TrackRow'

import styles from '../../css/Playlist.module.scss'
import tracksStyles from '../../css/Tracks.module.scss'
import CardsRow from '../../components/CardsRow'

export default function Playlist({ artist, tracks, albums }) {

    if (!artist.name) return <div className="loaderContainer"><i>Houve algo de errado ao carregar esta página</i></div>

    return (
        <div className={styles.playlistContainer}>
            <Head>
                <title>Spotify - {artist.name}</title>
            </Head>

            <header style={{
                background: 'linear-gradient(#808080, #80808045 100%)',
                boxShadow: '0 8px 200px 80px #80808045'
            }}>
                <img src={artist.images[0].url} alt="Imagem" />

                <div>
                    <h1>{artist.name}</h1>
                    <p>{artist.followers.total.toLocaleString()} seguidores</p>
                </div>
            </header>

            <section>
                <div className={styles.sectionHeader}>
                    <PlayArrowGreen />
                    
                    <button><Add /></button>
                    
                    <button><MoreHoriz /></button>
                </div>

                <div className={tracksStyles.tracks}>
                    <h1>Populares</h1>

                    <ul>
                        {tracks.slice(0, 5).map((item, key) => (
                            <TrackRow key={key}
                                index={key + 1}
                                track={{
                                    id: item.id,
                                    url: item.preview_url,
                                    name: item.name,
                                    artists: item.artists.map(artist => {
                                        return {
                                            name: artist.name,
                                            id: artist.id
                                        }
                                    }),
                                    album: {
                                        id: item.album.id,
                                        name: item.album.name,
                                        img: item.album.images[0].url
                                    },
                                    addedAt: item.added_at,
                                    duration: item.duration_ms,
                                }}
                            />
                        ))}
                    </ul>
                </div>

                <CardsRow data={albums} />
            </section>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { id } = params
    const artist = await getArtist(id)

    const { tracksResult, albumsResult } = await search(artist.name)

    const tracks = tracksResult.items.filter(item => item.artists[0].name === artist.name)
    const albums = {
        title: 'Álbuns',
        items: albumsResult.items.filter(item => item.artists[0].name === artist.name)
    }

    return {
        props: { artist, tracks, albums }
    }
}