import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { getUserPlaylists } from './api/spotifyAPI'
import { fakeData } from '../utils/fakeData'
import CardsRow from '../components/CardsRow'
import styles from '../css/Home.module.scss'

export default function Home({ items }) {  
  return (
    <div className={styles.rowsContainer}>
      <Head>
        <title>Spotify - Web Player</title>
      </Head>

      {/* {console.log(items)} */}

      {fakeData.map((item, key) => (
        <CardsRow data={item} key={key} />
      ))}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await getUserPlaylists()
  const data = await response.json()
  console.log(data)

  return {
    props: { }
  }
}