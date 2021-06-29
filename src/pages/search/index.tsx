import Head from 'next/head'
import { useSearch } from '../../contexts/SearchContext'
import TrackRow from '../../components/TrackRow'
import CardsRow from '../../components/CardsRow'
import styles from '../../css/Home.module.scss'
import searchStyles from '../../css/Search.module.scss'

export default function Search() {
  const { searchResult, isInputEmpty, isLoading } = useSearch()

  if (isLoading) return <div className="loaderContainer"><div className="loader"></div></div>



  return (
    <div className={styles.rowsContainer}>
      <Head>
        <title>Spotify - Web Player</title>
      </Head>

      {!isInputEmpty ? (
        <>
        {!searchResult.artistsResult.items.length &&
         !searchResult.albumsResult.items.length &&
         !searchResult.tracksResult.items.length &&
         !searchResult.playlistsResult.items.length ? (
          <div className="loaderContainer">
            <h2>Não há resultados para essa busca</h2>
          </div>
         ) : (
           <>
           {searchResult.tracksResult.items.length ? (
             <div className={searchStyles.tracks}>
               <h1>Músicas</h1>
               <ul>
                 {searchResult.tracksResult.items.slice(0, 5).map((item, key) => (
                   <TrackRow key={key}
                     index={key + 1}
                     track={{
                       id: item.id,
                       url: item.preview_url,
                       name: item.name,
                       artists: item.artists.map(artist => {
                         return {
                           name: artist.name,
                           id: artist.id
                         }
                       }),
                       album: {
                         id: item.album.id,
                         name: item.album.name,
                         img: item.album.images[0].url
                       },
                       addedAt: item.added_at,
                       duration: item.duration_ms,
                     }}
                   />
                 ))}
               </ul>
             </div>
           ) : ''}
   
             {searchResult.artistsResult.items.length ? (
               <CardsRow data={searchResult.artistsResult} />
             ) : ''}
   
             {searchResult.albumsResult.items.length ? (
                 <CardsRow data={searchResult.albumsResult} />
             ) : ''}
   
             {searchResult.playlistsResult.items.length ? (
                 <CardsRow data={searchResult.playlistsResult} />
             ) : ''}
             </>
         )}
        </>
      ) : (
        <div className="loaderContainer">
          <h2>Pesquise por artistas, músicas, álbuns ou playlists</h2>
        </div>
      )}
    </div>
  )
}