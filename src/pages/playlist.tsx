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

                <table className={styles.playlist}>
                    <tr>
                        <th>#</th>
                        <th>TÍTULO</th>
                        <th>ÁLBUM</th>
                        <th>ADICIONADO EM</th>
                        <th><Schedule /> </th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>
                            <img src="/black-album-paint.png" alt="Álbum" />
                            <div>
                                <strong>Enter Sandman (Acapella Cover)</strong>
                                <span>Metallica</span>
                            </div>
                        </td>
                        <td>Black Album (Feito no Paint)</td>
                        <td>07 de jun. de 2021</td>
                        <td>04:47</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>
                            <img src="/black-album-paint.png" alt="Álbum" />
                            <div>
                                <strong>Nothing Else Matters</strong>
                                <span>Metallica</span>
                            </div>
                        </td>
                        <td>Black Album</td>
                        <td>ago. de 1991</td>
                        <td>06:28</td>
                    </tr>
                </table>
            </section>
        </div>
    )
}
