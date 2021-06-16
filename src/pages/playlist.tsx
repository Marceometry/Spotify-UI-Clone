import Head from 'next/head'
import { fakeData } from '../utils/fakeData'
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

                    <h1>Descobertas da Semana</h1>
                    <p>Sua mixtape semanal cheia de novas descobertas e pérolas musicais escolhidas só pra você. Atualiza toda segunda.</p>

                    <span><strong>Spotify</strong> - 30 músicas, 2h 31min</span>
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
                        <li>
                            <span className={styles.position}>1</span>
                            <span className={styles.play}></span>
                            <span>
                                <img src="/black-album-paint.png" alt="Álbum" />
                                <div>
                                    <strong> Enter Sandman (Acapella Cover) </strong>
                                    <p> Metallica </p>
                                </div>
                            </span>
                            <span className={styles.album}>Black Album (Feito no Paint)</span>
                            <span>07 de jun. de 2021</span>
                            <span>04:47</span>
                        </li>
                        <li>
                            <span className={styles.position}>2</span>
                            <span className={styles.play}></span>
                            <span>
                                <img src="/black-album-paint.png" alt="Álbum" />
                                <div>
                                    <strong> Enter Sandman (Acapella Cover) </strong>
                                    <p> Metallica </p>
                                </div>
                            </span>
                            <span className={styles.album}>Black Album (Feito no Paint)</span>
                            <span>07 de jun. de 2021</span>
                            <span>04:47</span>
                        </li>
                        <li>
                            <span className={styles.position}>3</span>
                            <span className={styles.play}></span>
                            <span>
                                <img src="/black-album-paint.png" alt="Álbum" />
                                <div>
                                    <strong> Enter Sandman (Acapella Cover) </strong>
                                    <p> Metallica </p>
                                </div>
                            </span>
                            <span className={styles.album}>Black Album (Feito no Paint)</span>
                            <span>07 de jun. de 2021</span>
                            <span>04:47</span>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}
