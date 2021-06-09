import { useState, useRef } from 'react'
import Image from 'next/image'
import { PlayCircleFilled, RepeatRounded, ShuffleRounded, SkipPreviousRounded, SkipNextRounded, VolumeUpRounded, PauseCircleFilled } from '@material-ui/icons'
import Slider from "rc-slider"
import "rc-slider/assets/index.css"
import durationToTimeString from '../../utils/durationToTimeString'

import styles from './style.module.scss'

export default function Player() {
    const audioRef = useRef<HTMLAudioElement>(null)
    const [progress, setProgress] = useState(0)
    const [volume, setVolume] = useState(100)
    const [duration, setDuration] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [test, setTest] = useState(false)

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
        setTest(true)
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

    return (
        <div className={styles.container}>
            <div className={styles.song}>
                <Image width={56} height={56} src="/teste-img.jpg" alt="Álbum" />

                <div className={styles.info}>
                    <p>...And Justice for All</p>
                    <span>Metallica</span>
                </div>

                {test ? (
                  <audio
                      src="/teste.m4a"
                      ref={audioRef}
                      // loop={isLooping}
                      onLoadedMetadata={setupProgressListener}
                      // onPlay={() => setPlayingState(true)}
                      // onPause={() => setPlayingState(false)}
                      // onEnded={playNext}
                  />
                ) : ''}
            </div>

            <div className={styles.controls}>
                <div className={styles.buttons}>
                    <ShuffleRounded />

                    <SkipPreviousRounded className={styles.skipButton} />

                    {isPlaying ? (
                      <PauseCircleFilled
                        className={styles.playButton}
                        onClick={handlePlay}
                      />
                    ) : (
                      <PlayCircleFilled
                        className={styles.playButton}
                        onClick={handlePlay}
                      />
                    )}

                    <SkipNextRounded className={styles.skipButton} />

                    <RepeatRounded />
                </div>

                <div className={styles.progressBar}>
                  <span>{durationToTimeString(progress)}</span>

                  <div id={styles.slider}>
                    <Slider
                        max={audioRef.current ? duration : 0}
                        value={audioRef.current ? progress : 0}
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