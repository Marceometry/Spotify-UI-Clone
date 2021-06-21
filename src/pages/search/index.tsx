import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { getUserPlaylists, getArtists, getFeaturedPlaylists } from '../api/spotifyAPI'
import CardsRow from '../../components/CardsRow'
import styles from '../../css/Home.module.scss'

export default function Search() {
  return (
    <div className={styles.rowsContainer}>
      <Head>
        <title>Spotify - Web Player</title>
      </Head>

      {/* <CardsRow data={playlists} />
      <CardsRow data={artists} />
      <CardsRow data={featuredPlaylists} /> */}
    </div>
  )
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const playlists = await getUserPlaylists('&limit=8')
//   const featuredPlaylists = await getFeaturedPlaylists('?limit=8')
//   const artists = await getArtists('&limit=8')

//   return {
//     props: { playlists, featuredPlaylists, artists }
//   }
// }