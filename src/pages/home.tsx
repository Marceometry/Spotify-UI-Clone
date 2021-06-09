import Head from 'next/head'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
import Player from '../components/Player'

import styles from '../css/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Spotify - Web Player</title>
      </Head>
      
      <div className={styles.contentContainer}>
        <Sidebar />

        <main>
          <Nav />
        </main>
      </div>

      <Player />
    </div>
  )
}
