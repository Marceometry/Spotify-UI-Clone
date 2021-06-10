import Image from 'next/image'
import Link from 'next/link'
import { Home, Search, MenuBook, AddBox, Favorite, GetApp } from '@material-ui/icons'

import styles from './style.module.scss'

export default function Sidebar() {
    return (
        <aside className={styles.sidebar}>
          <Link href="/">
            <a className={styles.logo}>
              <Image width={132} height={42} src="/logo.svg" alt="Spotify" />
            </a>
          </Link>

          <ul className={styles.main}>
            <li>
              <Link href="/home">
                <a>
                  <Home /> <span>Início</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <Search /> <span>Buscar</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <MenuBook /> <span>Sua Biblioteca</span>
                </a>
              </Link>
            </li>
          </ul>
        
          <div className={styles.playlistsContainer}>
            <ul>
              <li>
                <Link href="/">
                  <a>
                    <AddBox /> <span>Criar playlist</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <Favorite /> <span>Músicas Curtidas</span>
                  </a>
                </Link>
              </li>
            </ul>

            <hr />

            <ul className={styles.playlists}>
              <li>
                <Link href="/">
                  <a>This Is Metallica</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>This Is Queen</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>This Is ACDC</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>This Is Avenged Sevenfold</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>This Is Guns and Roses</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>This Is Rolling Stones</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>This Is Nirvana</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>This Is System of a Down</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>This Is Creedence</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>This Is Scorpions</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>This Is Beatles</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>This Is Led Zeppelin</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>This Is Red Hot Chili Peppers</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>This Is Disturbed</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>This Is Imagine Dragons</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>This Is Green Day</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>This Is Deep Purple</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>This Is Pink Floyd</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>This Is Slipknot</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>This Is Megadeth</a>
                </Link>
              </li>
            </ul>
          </div>

          <ul id={styles.getApp}>
            <li>
              <Link href="/">
                <a>
                  <GetApp /> <span>Instalar aplicativo</span>
                </a>
              </Link>
            </li>
          </ul>
        </aside>
    )
}