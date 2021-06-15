import CardsRow from '../components/CardsRow'
import { fakeData } from '../utils/fakedata'
import styles from '../css/Home.module.scss'

export default function Home() {  
  return (
    <div className={styles.rowsContainer}>
      {fakeData.map((item, key) => (
        <CardsRow data={item} key={key} />
      ))}
    </div>
  )
}
