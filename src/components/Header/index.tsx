import Image from 'next/image'
import Link from 'next/link'
import styles from './style.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/home">
        <a>
          <Image width={132} height={42} src="/logo.svg" alt="Spotify" />
        </a>
      </Link>

      <ul>
        <li>
          <Link href="/home">
            <a>Premium</a>
          </Link>
        </li>
        <li>
          <Link href="/home">
            <a>Suporte</a>
          </Link>
        </li>
        <li>
          <Link href="/home">
            <a>Baixar</a>
          </Link>
        </li>

        <li className={styles.divide}> | </li>

        <li>
          <Link href="/home">
            <a>Inscrever-se</a>
          </Link>
        </li>
        <li>
          <Link href="/home">
            <a>Entrar</a>
          </Link>
        </li>
      </ul>
    </header>
  )
}
