import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { getArtists, getFeaturedPlaylists, getUserPlaylists } from '../api/spotifyAPI'
import Card from '../../components/Card'

import styles from '../../css/List.module.scss'

export default function List({ list }) {
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
                {list.items.map((item, key) => (
                    <Card item={item} type={list.type} key={key} />
                ))}
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { slug } = params
    let list = {}

    if (slug === 'feito-para-voce') {
        list = await getUserPlaylists('')
    } else if (slug === 'seus-artistas-favoritos') {
        list = await getArtists('')
    } else if (slug === 'playlists-em-destaque') {
        list = await getFeaturedPlaylists('')
    } else {
        list = null
    }

    return {
        props: { list }
    }
}