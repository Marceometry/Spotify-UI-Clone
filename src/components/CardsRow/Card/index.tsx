import Link from 'next/link'
import Image from 'next/image'
import reduceStringLength from '../../../utils/reduceStringLength'
import PlayArrowGreen from '../../PlayArrowGreen'
import styles from './style.module.scss'
import { useEffect, useState } from 'react'
import artistsNamesToString from '../../../utils/artistsNamesToString'

export default function Card({ item, type }) {
    const [artists, setArtists] = useState('')

    useEffect(() => {
        if (type === 'albums') {   
            setArtists(artistsNamesToString(item.artists))
        }
    }, [])

    return (
        <div className={styles.cardContainer}>
            <Link href={type === "playlists" ?
                `/playlist/${item.id}`
                : type === "artists" ?
                `/artist/${item.id}`
                : `/`
            }>
                <a></a>
            </Link>
            
            <div className={styles.card}>
                <div className={`${styles.img} ${type === "artists" && styles.artistImg}`}>

                    <Image width={320} height={320} alt="Imagem"
                        src={!item.images[0] ? '/music-note.png' : item.images[0].url}
                        className={!item.images[0] ? styles.placeholderImg : ''}
                    />

                    <PlayArrowGreen />
                </div>

                <strong>{item.name}</strong>
                
                <p><span>
                    {type === "playlists" && item.description ? (
                        reduceStringLength(item.description, 45)
                    ) : type === "artists" ? "Artista"
                      : type === "albums" ? artists
                      : "Playlist"
                    }
                </span></p>
            </div>
        </div>
    )
}