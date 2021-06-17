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

                <Link href={`/genre/${data.slug}`}><a>VER TUDO</a></Link>
            </header>

            <div className={styles.row}>
                {data.items.map((item, key) => (
                    <Card item={item} type={data.type} key={key} />
                ))}
            </div>
        </section>
    )
}