import Image from 'next/image'
import styles from './style.module.scss'

export default function PlaylistsRow() {
    return (
        <section className={styles.sectionRow}>
            <header>
                <h2>Feito para você</h2>
                <p>Quanto mais você escutar, melhores recomendações vai receber.</p>
            </header>

            <div className={styles.row}>
                <div className={styles.card}>
                    <div className={styles.img}>
                        <Image width={132} height={132} src="/note-icon.svg" alt="Imagem" />
                    </div>

                    <strong>Daily Mix 1</strong>
                    <p>Megadeth, Metallica, Scorpions e mais</p>
                </div>
                
                <div className={styles.card}>
                    <div className={styles.img}>
                        <Image width={132} height={132} src="/note-icon.svg" alt="Imagem" />
                    </div>

                    <strong>Daily Mix 2</strong>
                    <p>Sabaton, Powerwolf, Týr e mais</p>
                </div>
                
                <div className={styles.card}>
                    <div className={styles.img}>
                        <Image width={132} height={132} src="/note-icon.svg" alt="Imagem" />
                    </div>

                    <strong>Daily Mix 2</strong>
                    <p>Sabaton, Powerwolf, Týr e mais</p>
                </div>
                
                <div className={styles.card}>
                    <div className={styles.img}>
                        <Image width={132} height={132} src="/note-icon.svg" alt="Imagem" />
                    </div>

                    <strong>Daily Mix 2</strong>
                    <p>Sabaton, Powerwolf, Týr e mais</p>
                </div>
                
                <div className={styles.card}>
                    <div className={styles.img}>
                        <Image width={132} height={132} src="/note-icon.svg" alt="Imagem" />
                    </div>

                    <strong>Daily Mix 2</strong>
                    <p>Sabaton, Powerwolf, Týr e mais</p>
                </div>
                
                <div className={styles.card}>
                    <div className={styles.img}>
                        <Image width={132} height={132} src="/note-icon.svg" alt="Imagem" />
                    </div>

                    <strong>Daily Mix 2</strong>
                    <p>Sabaton, Powerwolf, Týr e mais</p>
                </div>
                
                <div className={styles.card}>
                    <div className={styles.img}>
                        <Image width={180} height={180} src="/note-icon.svg" alt="Imagem" />
                    </div>

                    <strong>Daily Mix 2</strong>
                    <p>Sabaton, Powerwolf, Týr e mais</p>
                </div>
                
                <div className={styles.card}>
                    <div className={styles.img}>
                        <Image width={132} height={132} src="/note-icon.svg" alt="Imagem" />
                    </div>

                    <strong>Daily Mix 2</strong>
                    <p>Sabaton, Powerwolf, Týr e mais</p>
                </div>
            </div>
        </section>
    )
}