import CardsRow from '../components/CardsRow'
import styles from '../css/Home.module.scss'

export default function Home() {  
  return (
    <div className={styles.rowsContainer}>
      <CardsRow />
      <CardsRow />
      <CardsRow />
    </div>
  )
}
