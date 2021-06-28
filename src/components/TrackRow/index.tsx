import { useEffect, useState } from 'react'
import { format, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { usePlayer } from '../../contexts/PlayerContext'
import artistsNamesToString from '../../utils/artistsNamesToString'
import durationToTimeString from '../../utils/durationToTimeString'

import styles from './style.module.scss'

type TrackRowProps = {
  index: number
  track: Track
}

type ALbum = {
  id: string
  name: string
  img: string
}

type Artist = {
  id: string
  name: string
}

type Track = {
  id: string
  name: string
  artists: Artist[]
  album: ALbum
  addedAt: string
  duration: number
}

export default function TrackRow({ index, track }: TrackRowProps) {
  const [stringArtists, setStringArtists] = useState('')
  const { currentTrack, setCurrentTrack } = usePlayer()
  const {
    id,
    name,
    artists,
    album,
    addedAt,
    duration
  } = track

  useEffect(() => {
    setStringArtists(artistsNamesToString(artists))
  }, [artists])

  return (
    <li className={`${styles.track} ${currentTrack.id === id ? styles.nowPlaying : ''}`}
      onDoubleClick={() => setCurrentTrack(track)}
    >
      <span className={styles.position}>{index}</span>
      <button className={styles.play} onClick={() => setCurrentTrack(track)}></button>
      <span>
        <img src={album.img} alt="Álbum" />
        <div>
          <strong> {name} </strong>
          <p> {stringArtists} </p>
        </div>
      </span>
      <span className={styles.album}> {album.name} </span>
      {addedAt && <span> {format(parseISO(addedAt), 'dd MMM yyyy', { locale: ptBR })} </span>}
      <span> {durationToTimeString(duration / 1000)} </span>
    </li>
  )
}