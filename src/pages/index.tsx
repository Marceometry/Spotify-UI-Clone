import Head from 'next/head'
import Header from '../components/Header'
import Section from '../components/Section'
import Footer from '../components/Footer'

import styles from '../css/Home.module.css'

export default function Landing() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Escutar muda tudo - Spotify</title>
      </Head>

      <Header />

      <Section
        type="PREMIUM"
        h1="Curta 3 meses de Premium grátis"
        p="Curta músicas sem anúncios, no modo offline e muito mais. Cancele quando quiser."
        a="GANHE 3 MESES GRÁTIS"
        hasBG={false}
      />

      <Section
        type="FREE"
        h1="Escutar muda tudo"
        p="Milhões de músicas e podcasts para explorar. E nem precisa de cartão de crédito."
        a="BAIXE O SPOTIFY FREE"
        hasBG={true}
      />
      
      <Footer />
    </div>
  )
}
