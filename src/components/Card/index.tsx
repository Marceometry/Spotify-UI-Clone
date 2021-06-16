import Link from 'next/link'
import reduceStringLength from '../../utils/reduceStringLength'
import PlayArrowGreen from '../PlayArrowGreen'
import styles from './style.module.scss'

export default function Card({ item, type }) {
    return (
        <>
        <Link href="/playlist">
            <a className={styles.card}>
                <div className={`${styles.img} ${type === "artists" && styles.artistImg}`}>
                    <img src={!item.image ? '/music-note.png' : item.image} alt="Imagem" />

                    <PlayArrowGreen />
                </div>

                <strong>{item.title}</strong>
                <p><span>{type === "artists" ? "Artista" : reduceStringLength(item.subtitle, 45)}</span></p>
            </a>
        </Link>
        </>
    )
}