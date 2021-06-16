import Head from 'next/head'
import { fakeData } from '../utils/fakeData'
import { FavoriteBorderOutlined, MoreHoriz } from '@material-ui/icons'
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

                    <span><strong>Marcelino Teixeira</strong> - 30 músicas, 2h 31min</span>
                </div>
            </header>

            <section>
                <div className={styles.sectionHeader}>
                    <PlayArrowGreen />
                    <FavoriteBorderOutlined />
                    <MoreHoriz />
                </div>
            </section>
        </div>
    )
}
