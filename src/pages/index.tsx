import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

import styles from '../css/Home.module.scss'

export default function Landing() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Escutar muda tudo - Spotify</title>
      </Head>

      <Header />

      <section className={styles.landingSection}>
        <div>
          <span>SPOTIFY PREMIUM</span>

          <h1>Curta 3 meses de Premium grátis</h1>

          <p>Curta músicas sem anúncios, no modo offline e muito mais. Cancele quando quiser.</p>

          <Link href="/home"><a>GANHE 3 MESES GRÁTIS</a></Link>
        </div>

        <img src="/hands.png" alt="Ilustração" />
      </section>

      <section className={`${styles.landingSection} ${styles.blue}`}>
        <div>
          <span>SPOTIFY FREE</span>

          <h1>Escutar muda tudo</h1>

          <p>Milhões de músicas e podcasts para explorar. E nem precisa de cartão de crédito.</p>

          <Link href="/home"><a>BAIXE O SPOTIFY FREE</a></Link>
        </div>

        <div className={styles.placeholder}></div>
      </section>

      <Footer />
    </div>
  )
}
