import Link from 'next/link'
import Card from '../Card'
import styles from './style.module.scss'

export default function CardsRow({ type }) {
    return (
        <section className={styles.cardsRow}>
            <header>
                <div>
                    <h2>{type === "playlist" ? "Feito para você" : type === "artist" ? "Seus Artistas Favoritos" : ""}</h2>
                    {type === "playlist" && <p>Quanto mais você escutar, melhores recomendações vai receber.</p>}
                </div>

                <Link href="/"><a>VER TUDO</a></Link>
            </header>

            <div className={styles.row}>
                {type === "playlist" ? (
                    <>
                    <Card type={type} img="/music-note.png" title="Daily Mix" subtitle="Metallica, Scorpions, ACDC e mais" />
                    <Card type={type} img="/music-note.png" title="Daily Mix" subtitle="Metallica, Scorpions, ACDC e mais" />
                    <Card type={type} img="https://i.scdn.co/image/0c22030833eb55c14013bb36eb6a429328868c29" title="Daily Mix" subtitle="Metallica, Scorpions, ACDC e mais" />
                    <Card type={type} img="/music-note.png" title="Daily Mix" subtitle="Metallica, Scorpions, ACDC e mais" />
                    <Card type={type} img="https://i.scdn.co/image/0c22030833eb55c14013bb36eb6a429328868c29" title="Daily Mix" subtitle="Metallica, Scorpions, ACDC e mais" />
                    <Card type={type} img="/music-note.png" title="Daily Mix" subtitle="Metallica, Scorpions, ACDC e mais" />
                    <Card type={type} img="https://i.scdn.co/image/0c22030833eb55c14013bb36eb6a429328868c29" title="Daily Mix" subtitle="Metallica, Scorpions, ACDC e mais" />
                    <Card type={type} img="/music-note.png" title="Daily Mix" subtitle="Metallica, Scorpions, ACDC e mais" />
                    </>
                ) : type === "artist" ? (
                    <>
                    <Card type={type} img="https://i.scdn.co/image/0c22030833eb55c14013bb36eb6a429328868c29" title="Metallica" subtitle="Artista" />
                    <Card type={type} img="https://i.scdn.co/image/0c22030833eb55c14013bb36eb6a429328868c29" title="Metallica" subtitle="Artista" />
                    <Card type={type} img="/music-note.png" title="Metallica" subtitle="Artista" />
                    <Card type={type} img="https://i.scdn.co/image/0c22030833eb55c14013bb36eb6a429328868c29" title="Metallica" subtitle="Artista" />
                    <Card type={type} img="https://i.scdn.co/image/0c22030833eb55c14013bb36eb6a429328868c29" title="Metallica" subtitle="Artista" />
                    <Card type={type} img="/music-note.png" title="Metallica" subtitle="Artista" />
                    <Card type={type} img="/music-note.png" title="Metallica" subtitle="Artista" />
                    <Card type={type} img="https://i.scdn.co/image/0c22030833eb55c14013bb36eb6a429328868c29" title="Metallica" subtitle="Artista" />
                    </>
                ) : ''}
            </div>
        </section>
    )
}