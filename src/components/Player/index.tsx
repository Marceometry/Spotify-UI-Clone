import { useState, useEffect } from 'react'
import Image from 'next/image'
import toast from 'react-hot-toast'
import Slider from "rc-slider"
import "rc-slider/assets/index.css"

import { PlayCircleFilled, RepeatRounded, ShuffleRounded, SkipPreviousRounded, SkipNextRounded, VolumeUpRounded, PauseCircleFilled, RepeatOneRounded } from '@material-ui/icons'
import { usePlayer } from '../../contexts/PlayerContext'
import { getTrack } from '../../pages/api/spotifyAPI'

import durationToTimeString from '../../utils/durationToTimeString'
import artistsNamesToString from '../../utils/artistsNamesToString'

import styles from './style.module.scss'

export default function Player() {
  const {
    audioRef,
    currentTrack,
    handlePlay,
    setIsPlaying,
    isPlaying
  } = usePlayer()

  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(100)

  const [currentTrackUrl, setCurrentTrackUrl] = useState('')
  const [isLooping, setIsLooping] = useState(false)

  useEffect(() => {
    toast.dismiss()
    
    currentTrack.url ? (
      setCurrentTrackUrl(currentTrack.url)
    ) : currentTrack.id ? (
      setProgress(0),
      setIsPlaying(false),
      setCurrentTrackUrl(''),
      toast.error('Amostra de áudio não disponível')
    ) : ''
  }, [currentTrack])

  useEffect(() => {
    currentTrackUrl && audioRef.current.play()
  }, [currentTrackUrl])

  function setupProgressListener() {
    audioRef.current.currentTime = 0
    audioRef.current.volume = volume / 100

    setDuration(audioRef.current.duration)
    audioRef.current.addEventListener('timeupdate', () => {
      setProgress(Math.floor(audioRef.current.currentTime))
    })
  }

  function handleSeek(amount: number) {
    if (!audioRef.current) {
      return
    }
    audioRef.current.currentTime = amount
    setProgress(amount)
  }

  function handleVolume(amount: number) {
    if (!audioRef.current) {
      return
    }
    audioRef.current.volume = amount / 100
    setVolume(amount)
  }

  function handleLoop() {
    if (isLooping) {
      setIsLooping(false)
    } else {
      setIsLooping(true)
    }
  }

  function handleSkipPervius() {
    if (progress > 5) {
      audioRef.current.currentTime = 0
    }
  }

  return (
    <div className={styles.player}>
      <div className={styles.track}>
        <Image width={56} height={56} alt="Álbum"
          className={!currentTrack.album?.img ? styles.placeholderImg : ''}
          src={!currentTrack.album?.img ? '/music-note.png' : currentTrack.album.img}
        />

        <div className={styles.info}>
          <p>{currentTrack.name}</p>
          <span>{artistsNamesToString(currentTrack.artists)}</span>
        </div>

        <audio
          ref={audioRef}
          onLoadedMetadata={setupProgressListener}
          src={currentTrackUrl}
          loop={isLooping}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
        />
      </div>

      <div className={styles.controls}>
        <div className={styles.buttons}>
          <button disabled>
            <ShuffleRounded />
          </button>

          <button disabled={progress < 5} onClick={handleSkipPervius}>
            <SkipPreviousRounded
              className={styles.skipButton}
            />
          </button>

          {isPlaying ? (
            <button onClick={handlePlay}>
              <PauseCircleFilled className={styles.playButton} />
            </button>
          ) : (
            <button onClick={handlePlay} disabled={!currentTrackUrl}>
              <PlayCircleFilled className={styles.playButton} />
            </button>
          )}

          <button disabled>
            <SkipNextRounded className={styles.skipButton} />
          </button>

          {isLooping ? (
            <button onClick={handleLoop}>
              <RepeatOneRounded />
            </button>
          ) : (
            <button onClick={handleLoop}>
              <RepeatRounded />
            </button>
          )}
        </div>

        <div className={styles.progressBar}>
          <span>{durationToTimeString(progress)}</span>

          <div id={styles.slider}>
            <Slider
              max={duration}
              value={progress}
              onChange={handleSeek}
              trackStyle={{ backgroundColor: "#1ed760" }}
              railStyle={{ backgroundColor: "#535353" }}
              handleStyle={{ borderColor: "#fff", }}
            />
          </div>

          <span>{currentTrackUrl ? durationToTimeString(duration) : '00:00'}</span>
        </div>
      </div>

      <div className={styles.volume}>
        <VolumeUpRounded />

        <Slider
          max={100}
          value={volume}
          onChange={handleVolume}
          trackStyle={{ backgroundColor: "#1ed760" }}
          railStyle={{ backgroundColor: "#535353" }}
          handleStyle={{ borderColor: "#fff", }}
        />
      </div>
    </div>
  )
}