import Link from 'next/link'
import Card from '../Card'
import styles from './style.module.scss'

export default function CardsRow({ data }) {
    return (
        <section className={styles.cardsRow}>
            <header>
                <div>
                    <h2>{data.title}</h2>
                    {data.description && <p>{data.description}</p>}
                </div>

                <Link href="/"><a>VER TUDO</a></Link>
            </header>

            <div className={styles.row}>
                {data.type === 'artists' ? (
                    <>
                    {data.result.artists.items.map((item, key) => (
                        <Card item={item} type={data.type} key={key} />
                    ))}
                    </>
                ) : (
                    <>
                    {data.result.items.map((item, key) => (
                        <Card item={item} type={data.type} key={key} />
                    ))}
                    </>
                )}
            </div>
        </section>
    )
}