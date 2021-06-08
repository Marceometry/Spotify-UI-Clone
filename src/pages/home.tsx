import Head from 'next/head'
import Header from '../components/Header'
import Section from '../components/Section'
import Footer from '../components/Footer'

import styles from '../css/Home.module.scss'
import Player from '../components/Player'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Spotify - Web Player</title>
      </Head>

      <Header />

      <Section
        type="PREMIUM"
        h1="Curta 3 meses de Premium grátis"
        p="Curta músicas sem anúncios, no modo offline e muito mais. Cancele quando quiser."
        a="GANHE 3 MESES GRÁTIS"
        img={true}
        hasBG={false}
      />

      <Player />
    </div>
  )
}
