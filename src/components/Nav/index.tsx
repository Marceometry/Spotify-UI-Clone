import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState, useEffect, useRef } from "react"
import { NavigateBefore, NavigateNext, Person } from "@material-ui/icons"
import SearchInput from "../SearchInput"

import styles from "./style.module.scss"

export default function Nav({ hasBG }) {
  const [isUserPopUpOpen, setIsUserPopUpOpen] = useState(false)
  const popupRef = useRef(null)
  const router = useRouter()

  function openUserPopUp() {
    setIsUserPopUpOpen(!isUserPopUpOpen)
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsUserPopUpOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [popupRef])

  return (
    <nav className={`${styles.nav} ${hasBG ? styles.bg : ''}`}>
      <div className={styles.router}>
        <button>
          <NavigateBefore />
        </button>
        <button disabled>
          <NavigateNext />
        </button>

        {router.pathname === '/search' ? (
          <SearchInput />
        ) : ''}
      </div>

      <div>
        <Link href="/">
          <a className={styles.upgrade}>FAÇA UPGRADE</a>
        </Link>

        <button
          ref={popupRef}
          className={styles.user}
          onClick={openUserPopUp}
          style={isUserPopUpOpen ? { background: "var(--gray-30)" } : {}}
        >
          <Person />

          <span className={styles.userName}>Marcelino Teixeira</span>

          <span
            className={`${styles.arrow} ${isUserPopUpOpen ? styles.arrowUp : styles.arrowDown}`}>
          </span>

          <ul
            className={styles.userPopUp}
            style={isUserPopUpOpen ? {
              transform: 'scaleY(1)',
              padding: '5px'
            } : {}}
          >
            <li>
              <Link href="/">
                <a>
                  <span>Conta</span>
                  <Image width={32} height={32} src="/external-link.svg" alt="" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <span>Perfil</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <span>Faça upgrade para o Premium</span>
                  <Image width={32} height={32} src="/external-link.svg" alt="" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <span>Sair</span>
                </a>
              </Link>
            </li>
          </ul>
        </button>
      </div>
    </nav>
  )
}
