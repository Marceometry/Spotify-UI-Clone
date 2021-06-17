import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { NavigateBefore, NavigateNext, Person, ArrowDropDown, ArrowDropUp } from "@material-ui/icons"

import styles from "./style.module.scss"

export default function Nav({ hasBG }) {
  const [isUserPopUpOpen, setIsUserPopUpOpen] = useState(false)
  const ref = useRef(null)

  function openUserPopUp() {
    setIsUserPopUpOpen(!isUserPopUpOpen)
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsUserPopUpOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ref])

  return (
    <nav className={`${styles.nav} ${hasBG ? styles.bg : ''}`}>
      <div className={styles.router}>
        <NavigateBefore className={styles.disabled} />
        <NavigateNext className={styles.disabled} />
      </div>

      <Link href="/">
        <a className={styles.upgrade}>FAÇA UPGRADE</a>
      </Link>

      <button
        ref={ref}
        className={styles.user}
        onClick={openUserPopUp}
        style={isUserPopUpOpen ? {background: "var(--gray-30)"} : {}}
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
    </nav>
  );
}
