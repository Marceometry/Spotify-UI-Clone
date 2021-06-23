import Link from 'next/link'
import Image from 'next/image'
import reduceStringLength from '../../utils/reduceStringLength'
import PlayArrowGreen from '../PlayArrowGreen'
import styles from './style.module.scss'

export default function Card({ item, type }) {
    return (
        <div className={styles.cardContainer}>
            <Link href={type === "playlists" ? `/playlist/${item.id}` : '/'}>
                <a></a>
            </Link>
            <div className={styles.card}>
                <div className={`${styles.img} ${type === "artists" && styles.artistImg}`}>
                    <Image width={320} height={320} src={!item.images[0].url ? '/music-note.png' : item.images[0].url} alt="Imagem" />

                    <PlayArrowGreen />
                </div>

                <strong>{item.name}</strong>
                
                <p><span>
                    {type === "playlists" && item.description ? (
                        reduceStringLength(item.description, 45)
                    ) : type === "artists" ? "Artista" : "Playlist"}
                </span></p>
            </div>
        </div>
    )
}