import Link from 'next/link'
import { PlayArrow } from '@material-ui/icons'
import reduceStringLength from '../../utils/reduceStringLength'
import styles from './style.module.scss'

export default function Card({ item, type }) {
    return (
        <>
        <Link href="/">
            <a className={styles.card}>
                <div className={`${styles.img} ${type === "artist" && styles.artistImg}`}>
                    <img src={item.image === "" ? '/music-note.png' : item.image} alt="Imagem" />

                    <div className={styles.playIcon}>
                        <PlayArrow />
                    </div>
                </div>

                <strong>{item.title}</strong>
                <p><span>{type === "artist" ? item.subtitle : reduceStringLength(item.subtitle, 45)}</span></p>
            </a>
        </Link>
        </>
    )
}