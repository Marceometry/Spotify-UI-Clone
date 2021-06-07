import Head from 'next/head'
import Header from '../components/Header'
import Section from '../components/Section'
import styles from '../css/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Escutar muda tudo - Spotify</title>
      </Head>

      <Header />

      <Section />
    </div>
  )
}
