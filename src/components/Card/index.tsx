import { PlayArrow } from '@material-ui/icons'
import Link from 'next/link'
import styles from './style.module.scss'

export default function Card() {
    return (
        <>
        <Link href="/">
            <a className={styles.card}>
                <div className={styles.img}>
                    <img src="/music-note.png" alt="Imagem" />

                    <div className={styles.playIcon}>
                        <PlayArrow />
                    </div>
                </div>

                <strong>Daily Mix 1</strong>
                <p>Metallica, Scorpions, ACDC e mais</p>
            </a>
        </Link>
        </>
    )
}