import Head from 'next/head'

import { playlist } from '../utils/fakeData'
import playlistDurationToString from '../utils/playlistDurationToString'
import durationToTimeString from '../utils/durationToTimeString'

import { FavoriteBorderOutlined, MoreHoriz, Schedule } from '@material-ui/icons'
import PlayArrowGreen from '../components/PlayArrowGreen'

import styles from '../css/Playlist.module.scss'

export default function Home() {    
    return (
        <div className={styles.playlistContainer}>
            <Head>
                <title>Spotify - Descobertas da Semana</title>
            </Head>

            <header>
                <img src="https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/XutSn0_6ZZetQsoHgk96xg==/dHB0cHRwdHB0cHRwdHB0cA==" alt="Imagem" />

                <div>
                    <strong>PLAYLIST</strong>

                    <h1>{playlist.name}</h1>
                    <p>{playlist.description}</p>

                    <span><strong>Spotify</strong> - {playlist.songs.length} músicas, {playlistDurationToString(playlist.duration)}</span>
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
                        {playlist.songs.map(((song, key) => (
                            <li key={key}>
                                <span className={styles.position}>{key + 1}</span>
                                <span className={styles.play}></span>
                                <span>
                                    <img src={song.albumImage} alt="Álbum" />
                                    <div>
                                        <strong> {song.title} </strong>
                                        <p> {song.artist} </p>
                                    </div>
                                </span>
                                <span className={styles.album}> {song.album} </span>
                                <span> {song.addedIn} </span>
                                <span> {durationToTimeString(song.duration)} </span>
                            </li>
                        )))}
                    </ul>
                </div>
            </section>
        </div>
    )
}
