import Link from 'next/link'
import styles from './style.module.scss'

export default function Section() {
  return (
    <section className={styles.container}>
        <div>
            <span>SPOTIFY PREMIUM</span>

            <h1>Curta 3 meses de Premium grátis</h1>

            <p>Curta músicas sem anúncios, no modo offline e muito mais. Cancele quando quiser.</p>

            <Link href="/"><a>GANHE 3 MESES GRÁTIS</a></Link>
        </div>

        <img src="/hands.png" alt="Ilustração" />
    </section>
  )
}
