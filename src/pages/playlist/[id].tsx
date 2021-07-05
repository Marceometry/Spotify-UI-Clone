import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { useEffect, useState } from 'react'
import { getPlaylist } from '../api/spotifyAPI'

import playlistDurationToString from '../../utils/playlistDurationToString'

import { FavoriteBorderOutlined, MoreHoriz, Schedule } from '@material-ui/icons'
import PlayArrowGreen from '../../components/PlayArrowGreen'

import styles from '../../css/Playlist.module.scss'
import TrackRow from '../../components/TrackRow'

export default function Playlist({ playlist }) {
    const [playlistDuration, setPlaylistDuration] = useState(0)

    useEffect(() => {
        if (!playlist.tracks.items) {
            return
        } else {
            let duration = 0
    
            playlist.tracks.items.map(item => (
                duration += item.track.duration_ms
            ))

            setPlaylistDuration(duration / 1000)
        }
    }, [playlist])

    if (!playlist.name) return <div className="loaderContainer"><i>Houve algo de errado ao carregar esta página</i></div>

    return (
        <div className={styles.playlistContainer}>
            <Head>
                <title>Spotify - {playlist.name}</title>
            </Head>

            <header style={{
                background: `${playlist.primary_color ? 
                    `linear-gradient(${playlist.primary_color}, ${playlist.primary_color}45 100%)`
                    : 'linear-gradient(#808080, #80808045 100%)'
                }`,
                boxShadow: `${playlist.primary_color ?
                    `0 8px 200px 80px ${playlist.primary_color}45`
                    : '0 8px 200px 80px #80808045'
                }`
            }}>
                <img src={playlist.images[0].url} alt="Imagem" />

                <div>
                    <strong>PLAYLIST</strong>

                    <h1>{playlist.name}</h1>
                    <p>{playlist.description}</p>

                    <span><strong>{playlist.owner.display_name}</strong> - {playlist.tracks.total} músicas, {playlistDurationToString(playlistDuration)}.</span>
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
                        {playlist.tracks.items.map((item, key) => (
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
            </section>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { id } = params
    const playlist = await getPlaylist(id)

    return {
        props: { playlist }
    }
}