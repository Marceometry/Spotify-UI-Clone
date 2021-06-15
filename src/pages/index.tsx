import Head from 'next/head'
import CardsRow from '../components/CardsRow'
import { fakeData } from '../utils/fakeData'
import styles from '../css/Home.module.scss'

export default function Home() {  
  return (
    <div className={styles.rowsContainer}>
      <Head>
        <title>Spotify - Web Player</title>
      </Head>

      {fakeData.map((item, key) => (
        <CardsRow data={item} key={key} />
      ))}
    </div>
  )
}
