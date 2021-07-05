import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { useEffect, useState } from 'react'
import { getArtist } from '../api/spotifyAPI'

import playlistDurationToString from '../../utils/playlistDurationToString'

import { FavoriteBorderOutlined, MoreHoriz, Schedule } from '@material-ui/icons'
import PlayArrowGreen from '../../components/PlayArrowGreen'
import TrackRow from '../../components/TrackRow'

import styles from '../../css/Playlist.module.scss'

export default function Playlist({ artist }) {
    // const [playlistDuration, setPlaylistDuration] = useState(0)

    // useEffect(() => {
    //     if (!artist.tracks.items) {
    //         return
    //     } else {
    //         let duration = 0
    
    //         artist.tracks.items.map(item => (
    //             duration += item.track.duration_ms
    //         ))

    //         setPlaylistDuration(duration / 1000)
    //     }
    // }, [artist])

    console.log(artist)

    if (!artist.name) return <div className="loaderContainer"><i>Houve algo de errado ao carregar esta página</i></div>

    return (
        <div className={styles.playlistContainer}>
            <Head>
                <title>Spotify - {artist.name}</title>
            </Head>

            {/* <header style={{
                background: `${artist.primary_color ? 
                    `linear-gradient(${artist.primary_color}, ${artist.primary_color}45 100%)`
                    : 'linear-gradient(#808080, #80808045 100%)'
                }`,
                boxShadow: `${artist.primary_color ?
                    `0 8px 200px 80px ${artist.primary_color}45`
                    : '0 8px 200px 80px #80808045'
                }`
            }}>
                <img src={artist.images[0].url} alt="Imagem" />

                <div>
                    <strong>PLAYLIST</strong>

                    <h1>{artist.name}</h1>
                    <p>{artist.description}</p>

                    <span><strong>{artist.owner.display_name}</strong> - {artist.tracks.total} músicas, {playlistDurationToString(playlistDuration)}.</span>
                </div>
            </header>

            <section>
                <div className={styles.sectionHeader}>
                    <PlayArrowGreen />
                    
                    <button><FavoriteBorderOutlined /></button>
                    
                    <button><MoreHoriz /></button>
                </div>

                <div className={styles.playlist}>
                    <div className={styles.playlistHeader}>
                        <span>#</span>
                        <span>TÍTULO</span>
                        <span>ÁLBUM</span>
                        <span>ADICIONADO EM</span>
                        <span><Schedule /> </span>
                    </div>

                    <ul>
                        {artist.tracks.items.map((item, key) => (
                            <TrackRow key={key}
                                index={key + 1}
                                track={{
                                    id: item.track.id,
                                    url: item.track.preview_url,
                                    name: item.track.name,
                                    artists: item.track.artists.map(artist => {
                                        return {
                                            name: artist.name,
                                            id: artist.id
                                        }
                                    }) ,
                                    album: {
                                        id: item.track.album.id,
                                        name: item.track.album.name,
                                        img: item.track.album.images[0].url
                                    },
                                    addedAt: item.added_at,
                                    duration: item.track.duration_ms,
                                }}
                            />
                        ))}
                    </ul>
                </div>
            </section> */}
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { id } = params
    const artist = await getArtist(id)

    return {
        props: { artist }
    }
}