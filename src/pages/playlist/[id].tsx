import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { useEffect, useState } from 'react'
import { getPlaylist } from '../api/spotifyAPI'

import playlistDurationToString from '../../utils/playlistDurationToString'
import durationToTimeString from '../../utils/durationToTimeString'

import { FavoriteBorderOutlined, MoreHoriz, Schedule } from '@material-ui/icons'
import PlayArrowGreen from '../../components/PlayArrowGreen'

import styles from '../../css/Playlist.module.scss'

export default function Home({ playlist }) {
    const [playlistDuration, setPlaylistDuration] = useState(0)
    const [artists, setArtists] = useState([])

    useEffect(() => {
        if (!playlist.name) {
            return
        } else {
            let duration = 0
            let artists = []
    
            playlist.tracks.items.map(item => (
                duration += item.track.duration_ms
            ))
    
            for (let i = 0; i < playlist.tracks.items.length; i++) {
                let artistsArray = playlist.tracks.items[i].track.artists
                let artistsNames = []
    
                for (let j = 0; j < artistsArray.length; j++) {
                    artistsNames.push(artistsArray[j].name)
                }
    
                artists.push(artistsNames.join(", "))
            }
    
            setArtists(artists)
            setPlaylistDuration(duration / 1000)
        }
    }, [playlist])

    if (!playlist.name) return <div className="loaderContainer"><i>Houve algo de errado</i></div>

    return (
        <div className={styles.playlistContainer}>
            <Head>
                <title>Spotify - {playlist.name}</title>
            </Head>

            <header style={{
                background: `linear-gradient(${playlist.primary_color}, ${playlist.primary_color}45 100%)`,
                boxShadow: `0 8px 200px 80px ${playlist.primary_color}45`
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
                        {playlist.tracks.items.map(((item, key) => (
                            <li key={key}>
                                <span className={styles.position}>{key + 1}</span>
                                <span className={styles.play}></span>
                                <span>
                                    <img src={item.track.album.images[0].url} alt="Álbum" />
                                    <div>
                                        <strong> {item.track.name} </strong>
                                        <p> {artists[key]} </p>
                                    </div>
                                </span>
                                <span className={styles.album}> {item.track.album.name} </span>
                                <span> {item.added_at} </span>
                                <span> {durationToTimeString(item.track.duration_ms / 1000)} </span>
                            </li>
                        )))}
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