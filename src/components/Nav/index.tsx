import Link from 'next/link'
import { NavigateBefore, NavigateNext, Person, ArrowDropDown } from '@material-ui/icons'

import styles from './style.module.scss'

export default function Nav() {
    return (
        <nav className={styles.container}>
          <div className={styles.router}>
            <NavigateBefore className={styles.disabled} />
            <NavigateNext />
          </div>

          <Link href="/">
            <a className={styles.upgrade}>FAÇA UPGRADE</a>
          </Link>

          <button className={styles.user}>
            <Person />

            <span>Marcelino Teixeira</span>

            <ArrowDropDown />
          </button>
        </nav>
    )
}