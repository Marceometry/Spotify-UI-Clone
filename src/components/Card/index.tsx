import { PlayArrow } from '@material-ui/icons'
import Link from 'next/link'
import styles from './style.module.scss'

export default function Card({ type, img, title, subtitle }) {
    return (
        <>
        <Link href="/">
            <a className={styles.card}>
                <div className={`${styles.img} ${type === "artist" && styles.artistImg}`}>
                    <img src={img} alt="Imagem" />

                    <div className={styles.playIcon}>
                        <PlayArrow />
                    </div>
                </div>

                <strong>{title}</strong>
                <p>{subtitle}</p>
            </a>
        </Link>
        </>
    )
}