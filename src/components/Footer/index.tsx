import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Twitter, Facebook, Public } from '@material-ui/icons'

import styles from './style.module.scss'
import React from 'react'

export default function Header() {
  return (
    <footer className={styles.footer}>
      <main>
        <section>
          <Link href="/home">
            <a>
              <Image width={132} height={42} src="/logo.svg" alt="Spotify" />
            </a>
          </Link>

          <ul>
            <li>EMPRESA</li>

            <li>
              <Link href="/home">
                <a> Sobre </a>
              </Link>
            </li>
            <li>
              <Link href="/home">
                <a> Empregos </a>
              </Link>
            </li>
            <li>
              <Link href="/home">
                <a> For the Record </a>
              </Link>
            </li>
          </ul>

          <ul>
            <li>COMUNIDADES</li>

            <li>
              <Link href="/home">
                <a> Para Artistas </a>
              </Link>
            </li>
            <li>
              <Link href="/home">
                <a> Desenvolvedores </a>
              </Link>
            </li>
            <li>
              <Link href="/home">
                <a> Publicidade </a>
              </Link>
            </li>
            <li>
              <Link href="/home">
                <a> Investidores </a>
              </Link>
            </li>
            <li>
              <Link href="/home">
                <a> Fornecedores </a>
              </Link>
            </li>
          </ul>

          <ul>
            <li>LINKS ÚTEIS</li>

            <li>
              <Link href="/home">
                <a> Suporte </a>
              </Link>
            </li>
            <li>
              <Link href="/home">
                <a> Player da Web </a>
              </Link>
            </li>
            <li>
              <Link href="/home">
                <a> Aplicativo móvel grátis </a>
              </Link>
            </li>
          </ul>
        </section>

        <div className={styles.social}>
          <a href="/home">
            <Instagram />
          </a>

          <a href="/home">
            <Twitter />
          </a>

          <a href="/home">
            <Facebook />
          </a>
        </div>
      </main>

      <div className={styles.bottom}>
        <ul>
          <li>
            <Link href="/home">
              <a> Legal </a>
            </Link>
          </li>
          <li>
            <Link href="/home">
              <a> Centro de Privacidade </a>
            </Link>
          </li>
          <li>
            <Link href="/home">
              <a> Política de Privacidade </a>
            </Link>
          </li>
          <li>
            <Link href="/home">
              <a> Cookies </a>
            </Link>
          </li>
          <li>
            <Link href="/home">
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