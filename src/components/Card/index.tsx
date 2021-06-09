import { PlayArrow } from '@material-ui/icons'
import Image from 'next/image'
import Link from 'next/link'
import styles from './style.module.scss'

export default function Card() {
    return (
        <>
        <Link href="/">
            <a className={styles.card}>
                <div className={styles.img}>
                    <Image width={100} height={100} src="/music-note.png" alt="Imagem" />

                    <div className={styles.playIcon}>
                        <PlayArrow />
                    </div>
                </div>

                <strong>Daily Mix 1</strong>
                <p>Metallica, Sabaton, ACDC e mais</p>
            </a>
        </Link>
        </>
    )
}