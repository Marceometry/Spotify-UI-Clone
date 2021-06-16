import { PlayArrow } from '@material-ui/icons'
import styles from './style.module.scss'

export default function PlayArrowGreen() {
    return (
        <button className={styles.playIcon}>
            <PlayArrow />
        </button>
    )
}