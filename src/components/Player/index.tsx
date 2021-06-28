import { useState, useRef } from 'react'
import Image from 'next/image'
import Slider from "rc-slider"
import "rc-slider/assets/index.css"

import { PlayCircleFilled, RepeatRounded, ShuffleRounded, SkipPreviousRounded, SkipNextRounded, VolumeUpRounded, PauseCircleFilled, RepeatOneRounded } from '@material-ui/icons'
import { usePlayer } from '../../contexts/PlayerContext'

import durationToTimeString from '../../utils/durationToTimeString'
import artistsNamesToString from '../../utils/artistsNamesToString'

import styles from './style.module.scss'

export default function Player() {
    const audioRef = useRef<HTMLAudioElement>(null)
    const {
      currentTrack
    } = usePlayer()

    const [progress, setProgress] = useState(0)
    const [duration, setDuration] = useState(0)
    const [volume, setVolume] = useState(100)

    const [isPlaying, setIsPlaying] = useState(false)
    const [isLooping, setIsLooping] = useState(false)

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

    function handlePlay() {
      if (!audioRef.current) {
        return
      }
      
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        audioRef.current.play()
        setIsPlaying(true)
      }
    }

    function handleLoop() {
      if (isLooping) {
        setIsLooping(false)
      } else {
        setIsLooping(true)
      }
    }

    return (
        <div className={styles.player}>
            <div className={styles.track}>
                <Image width={56} height={56} alt="Álbum"
                  className={!currentTrack.album?.img ? styles.placeholderImg : ''}
                  src={currentTrack.album?.img ? currentTrack.album.img : '/music-note.png'}
                />

                <div className={styles.info}>
                    <p>{currentTrack.name}</p>
                    <span>{artistsNamesToString(currentTrack.artists)}</span>
                </div>

                {currentTrack.id && (
                  <audio
                      ref={audioRef}
                      onLoadedMetadata={setupProgressListener}
                      src={currentTrack.url}
                      loop={isLooping}
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                      onEnded={() => setIsPlaying(false)}
                  />
                )}
            </div>

            <div className={styles.controls}>
                <div className={styles.buttons}>
                    <button disabled>
                      <ShuffleRounded />
                    </button>

                    <button disabled>
                      <SkipPreviousRounded className={styles.skipButton} />
                    </button>

                    {isPlaying ? (
                      <button onClick={handlePlay}>
                        <PauseCircleFilled className={styles.playButton} />
                      </button>
                    ) : (
                      <button onClick={handlePlay}>
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

                  <span>{durationToTimeString(duration)}</span>
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