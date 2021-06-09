import Image from 'next/image'
import Link from 'next/link'
import FooterNav from '../FooterNav'
import { Instagram, Twitter, Facebook, Public } from '@material-ui/icons'

import styles from './style.module.scss'
import React from 'react'

export default function Header() {
  return (
    <footer className={styles.footer}>
      <main>
        <section>
          <Link href="/">
            <a>
              <Image width={132} height={42} src="/logo.svg" alt="Spotify" />
            </a>
          </Link>

          <FooterNav />
        </section>

        <div className={styles.social}>
          <a href="/">
            <Instagram />
          </a>

          <a href="/">
            <Twitter />
          </a>

          <a href="/">
            <Facebook />
          </a>
        </div>
      </main>

      <div className={styles.bottom}>
        <ul>
          <li>
            <Link href="/">
            <a> Legal </a>
            </Link>
          </li>
          <li>
            <Link href="/">
            <a> Centro de Privacidade </a>
            </Link>
          </li>
          <li>
            <Link href="/">
            <a> Política de Privacidade </a>
            </Link>
          </li>
          <li>
            <Link href="/">
            <a> Cookies </a>
            </Link>
          </li>
          <li>
            <Link href="/">
            <a> Sobre Anúncios </a>
            </Link>
          </li>
        </ul>

        <ul>
          <li> <Public /> Brasil </li>
          <li> &#169; 2021 Spotify AB </li>
          <li> Feito com &#10084; por <a rel="nofollow noreferrer noopenner" href="https://github.com/Marceometry">Marcelino Teixeira</a></li>
        </ul>
      </div>
    </footer>
  )
}