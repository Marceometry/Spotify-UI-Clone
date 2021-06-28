import { format, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useEffect, useState } from 'react'
import durationToTimeString from '../../utils/durationToTimeString'
import styles from './style.module.scss'

type TrackRowProps = {
  key: number
  index: number
  name: string
  artists: [{ name: string }]
  albumImg: string
  album: string
  addedAt?: string
  duration: number
}

export default function TrackRow({index, name, artists, albumImg, album, addedAt, duration}: TrackRowProps) {
  const [stringArtists, setStringArtists] = useState('')

  useEffect(() => {
    let artistsArray = []

    for (let i = 0; i < artists.length; i++) {
      artistsArray.push(artists[i].name)
    }

    setStringArtists(artistsArray.join(", "))
  })

    return (
      <li className={styles.song}>
          <span className={styles.position}>{index + 1}</span>
          <button className={styles.play}></button>
          <span>
              <img src={albumImg} alt="Álbum" />
              <div>
                  <strong> {name} </strong>
                  <p> {stringArtists} </p>
              </div>
          </span>
          <span className={styles.album}> {album} </span>
          {addedAt && <span> {format(parseISO(addedAt), 'dd MMM yyyy', { locale: ptBR })} </span>}
          <span> {durationToTimeString(duration / 1000)} </span>
      </li>
    )
}