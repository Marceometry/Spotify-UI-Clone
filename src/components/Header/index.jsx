import Image from 'next/image'
import Link from 'next/link'
import styles from './style.module.scss'

export default function Header() {
  return (
    <header className={styles.container}>
      <Link href="/">
        <a>
          <Image width={132} height={42} src="/logo-svg.svg" alt="Spotify" />
        </a>
      </Link>

      <ul>
        <li>
          <Link href="/">
            <a>Premium</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Suporte</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Baixar</a>
          </Link>
        </li>

        <li className={styles.divide}> | </li>

        <li>
          <Link href="/">
            <a>Inscrever-se</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Entrar</a>
          </Link>
        </li>
      </ul>
    </header>
  )
}
