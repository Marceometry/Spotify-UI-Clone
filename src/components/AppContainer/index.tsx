import { useEffect, useRef, useState } from 'react'
import { Toaster } from 'react-hot-toast'

import Nav from '../Nav'
import Sidebar from '../Sidebar'
import Player from '../Player'

import styles from './style.module.scss'

export default function AppContainer({ children }) {
  const [navHasBG, setNavHasBG] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      const scrollListener = () => {
        if (ref.current.scrollTop > 25) {
          setNavHasBG(true)
        } else {
          setNavHasBG(false)
        }
      }
      ref.current.addEventListener('scroll', scrollListener)
      return () => {
        ref.current && ref.current.removeEventListener('scroll', scrollListener)
      }
    }
  }, [ref])
  
  return (
    <div className={styles.container}>
      <Toaster gutter={-56} toastOptions={{
        className: 'toaster',
        error: { duration: 2000 }
      }} />
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