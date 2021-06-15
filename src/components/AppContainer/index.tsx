import { useEffect, useRef, useState } from 'react'

import Nav from '../Nav'
import Sidebar from '../Sidebar'
import Player from '../Player'

import styles from './style.module.scss'

export default function AppContainer({ children }) {
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
      <div className={styles.contentContainer}>
        <Sidebar />

        <Nav hasBG={navHasBG} />
        
        <main ref={ref}>
            { children }
        </main>
      </div>

      <Player />
    </div>
  )
}