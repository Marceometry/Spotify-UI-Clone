import Link from "next/link"
import { useState } from "react"
import { NavigateBefore, NavigateNext, Person, ArrowDropDown, ArrowDropUp } from "@material-ui/icons"

import styles from "./style.module.scss"

export default function Nav() {
  const [isUserPopUpOpen, setIsUserPopUpOpen] = useState(false)

  function openUserPopUp() {
    setIsUserPopUpOpen(!isUserPopUpOpen)
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.router}>
        <NavigateBefore className={styles.disabled} />
        <NavigateNext />
      </div>

      <Link href="/">
        <a className={styles.upgrade}>FAÇA UPGRADE</a>
      </Link>

      <button className={styles.user} onClick={openUserPopUp}>
        <Person />

        <span>Marcelino Teixeira</span>

        {isUserPopUpOpen ? (
          <>
          <ArrowDropUp />
          
          <ul className={styles.userPopUp}>
            <li>
              <Link href="/">
                <a> <span>Conta</span>  <img src="/external-link.svg" /> </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a> <span>Perfil</span>  </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a> <span>Faça upgrade para o Premium</span>  <img src="/external-link.svg" /> </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a> <span>Sair</span>  </a>
              </Link>
            </li>
          </ul>
          </>
        ) : <ArrowDropDown />}
      </button>
    </nav>
  );
}
