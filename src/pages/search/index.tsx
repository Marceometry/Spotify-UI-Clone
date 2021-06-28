import Head from 'next/head'
import { useSearch } from '../../contexts/SearchContext'
import TrackRow from '../../components/TrackRow'
import CardsRow from '../../components/CardsRow'
import styles from '../../css/Home.module.scss'
import searchStyles from '../../css/Search.module.scss'

export default function Search() {
  const { searchResult, isInputEmpty } = useSearch()
  
  return (
    <div className={styles.rowsContainer}>
      <Head>
        <title>Spotify - Web Player</title>
      </Head>

      {!isInputEmpty && (
        <>

          {/* <div className={searchStyles.tracks}>
            <h1>Músicas</h1>
            <ul>
              {searchResult.tracksResult.items.slice(0, 5).map((item, key) => (
                <TrackRow key={key}
                  index={key}
                  name={item.name}
                  artists={item.artists}
                  albumImg={item.album.images[0].url}
                  album={item.album.name}
                  duration={item.duration_ms}
                />
              ))}
            </ul> */}
          {/* </div> */}

        <CardsRow data={searchResult.artistsResult} />
        <CardsRow data={searchResult.albumsResult} />
        <CardsRow data={searchResult.playlistsResult} />
        </>
      )}
    </div>
  )
}