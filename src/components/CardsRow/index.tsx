import Card from '../Card'
import styles from './style.module.scss'

export default function CardsRow() {
    return (
        <section className={styles.cardsRow}>
            <header>
                <h2>Feito para você</h2>
                <p>Quanto mais você escutar, melhores recomendações vai receber.</p>
            </header>

            <div className={styles.row}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </section>
    )
}