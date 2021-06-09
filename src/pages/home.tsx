import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Player from '../components/Player'

import styles from '../css/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Spotify - Web Player</title>
      </Head>

      <Sidebar />

      <Player />
    </div>
  )
}
