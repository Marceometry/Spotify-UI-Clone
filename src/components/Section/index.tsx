import Link from 'next/link'
import styles from './style.module.scss'

type SectionProps = {
  type: string
  h1: string
  p: string
  a: string
  hasBG: boolean
}

export default function Section({ type, h1, p, a, hasBG }: SectionProps) {
  return (
    <section className={`${styles.container} ${hasBG ? styles.blue : ''}`}>
        <div>
            <span>SPOTIFY {type}</span>

            <h1>{h1}</h1>

            <p>{p}</p>

            <Link href="/home"><a>{a}</a></Link>
        </div>

        {!hasBG ? (
          <img src="/hands.png" alt="Ilustração" />
        ) : (
          <div className={styles.placeholder}></div>
        )}
    </section>
  )
}
