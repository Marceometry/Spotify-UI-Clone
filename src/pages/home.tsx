import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
import Player from '../components/Player'

import styles from '../css/Home.module.scss'
import CardsRow from '../components/CardsRow'

export default function Home() {
  const [navHasBG, setNavHasBG] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    
    const scrollListener = () => {
      if (ref.current.scrollTop > 25) {
        setNavHasBG(true)
      } else {
        setNavHasBG(false)
      }
    }
    ref.current.addEventListener('scroll', scrollListener)
    return () => {
      ref.current.removeEventListener('scroll', scrollListener)
    }
  }, [ref])
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Spotify - Web Player</title>
      </Head>
      
      <div className={styles.contentContainer}>
        <Sidebar />

        <Nav hasBG={navHasBG} />
        
        <main ref={ref}>
          <div className={styles.rowsContainer}>
            <CardsRow />
            <CardsRow />
            <CardsRow />
          </div>
        </main>
      </div>

      <Player />
    </div>
  )
}
