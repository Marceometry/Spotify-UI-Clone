import Head from 'next/head'
import { useSearch } from '../../contexts/SearchContext'
import CardsRow from '../../components/CardsRow'
import styles from '../../css/Home.module.scss'

export default function Search() {
  const { searchResult, isInputEmpty } = useSearch()
  
  // const { albums, artists, playlists, tracks } = searchResult

  return (
    <div className={styles.rowsContainer}>
      <Head>
        <title>Spotify - Web Player</title>
      </Head>

      {!isInputEmpty && (
        <>
        <CardsRow data={searchResult.artistsResult} />
        {/* <CardsRow data={searchResult.tracksResult} /> */}
        <CardsRow data={searchResult.albumsResult} />
        <CardsRow data={searchResult.playlistsResult} />
        </>
      )}
    </div>
  )
}