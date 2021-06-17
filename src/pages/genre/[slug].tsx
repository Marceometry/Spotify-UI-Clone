import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { useEffect, useState } from 'react'
import { getArtists, getPlaylist, getUserPlaylists } from '../api/spotifyAPI'

import playlistDurationToString from '../../utils/playlistDurationToString'
import durationToTimeString from '../../utils/durationToTimeString'

import { FavoriteBorderOutlined, MoreHoriz, Schedule } from '@material-ui/icons'
import PlayArrowGreen from '../../components/PlayArrowGreen'
import Card from '../../components/Card'

import styles from '../../css/List.module.scss'

export default function List({ list }) {
    // const [playlistDuration, setPlaylistDuration] = useState(0)
    // const [artists, setArtists] = useState([])

    // useEffect(() => {
    //     if (!playlist.name) {
    //         return
    //     } else {
    //         let duration = 0
    //         let artists = []
    
    //         playlist.tracks.items.map(item => (
    //             duration += item.track.duration_ms
    //         ))
    
    //         for (let i = 0; i < playlist.tracks.items.length; i++) {
    //             let artistsArray = playlist.tracks.items[i].track.artists
    //             let artistsNames = []
    
    //             for (let j = 0; j < artistsArray.length; j++) {
    //                 artistsNames.push(artistsArray[j].name)
    //             }
    
    //             artists.push(artistsNames.join(", "))
    //         }
    
    //         setArtists(artists)
    //         setPlaylistDuration(duration / 1000)
    //     }
    // }, [playlist])

    if (!list) return <div className="loaderContainer"><i>Houve algo de errado</i></div>

    return (
        <div className={styles.container}>
            <Head>
                <title>Spotify - {list.title}</title>
            </Head>

            <header>
                <h2>{list.title}</h2>
            </header>

            <div className={styles.grid}>
                {list.type === 'artists' ? (
                    <>
                    {list.result.artists.items.map((item, key) => (
                        <Card item={item} type={list.type} key={key} />
                    ))}
                    </>
                ) : (
                    <>
                    {list.result.items.map((item, key) => (
                        <Card item={item} type={list.type} key={key} />
                    ))}
                    </>
                )}
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { slug } = params
    let list

    if (slug === 'feito-para-voce') {
        list = await getUserPlaylists('')
    } else if (slug === 'seus-artistas-favoritos') {
        list = await getArtists('')
    } else {
        list = null
    }

    return {
        props: { list }
    }
}