import { useState, useRef } from 'react'
import Image from 'next/image'
import { PlayCircleFilled, RepeatRounded, ShuffleRounded, SkipPreviousRounded, SkipNextRounded } from '@material-ui/icons'
import Slider from "rc-slider"
import "rc-slider/assets/index.css"

import styles from './style.module.scss'

export default function Player() {
    const audioRef = useRef<HTMLAudioElement>(null)
    const [progress, setProgress] = useState(0)

    function setupProgressListener() {
      audioRef.current.currentTime = 0
  
      audioRef.current.addEventListener('timeupdate', () => {
        setProgress(Math.floor(audioRef.current.currentTime))
      })
    }

    function handleSeek(amount: number) {
      audioRef.current.currentTime = amount
      setProgress(amount)
    }

    return (
        <div className={styles.container}>
            <div className={styles.song}>
                <Image width={64} height={64} src="/teste-img.jpg" alt="Álbum" />

                <div className={styles.info}>
                    <strong>...And Justice for All</strong>
                    <span>Metallica</span>
                </div>

                <audio
                    src="/teste.mp3"
                    ref={audioRef}
                    // loop={isLooping}
                    onLoadedMetadata={setupProgressListener}
                    // onPlay={() => setPlayingState(true)}
                    // onPause={() => setPlayingState(false)}
                    // onEnded={playNext}
                />
            </div>

            <div className={styles.controls}>
                <div className={styles.buttons}>
                    <ShuffleRounded />

                    <SkipPreviousRounded />

                    <PlayCircleFilled className={styles.playButton} />

                    <SkipNextRounded />

                    <RepeatRounded />
                </div>

                <Slider
                    max={1000}
                    value={progress}
                    onChange={handleSeek}
                    trackStyle={{ backgroundColor: "#1ed760" }}
                    railStyle={{ backgroundColor: "#535353" }}
                    handleStyle={{
                    backgroundColor: "#fff",
                    borderColor: "#fff",
                    }}
                />
            </div>

            <div className={styles.volume}>
              <Slider
                max={100}
                // value={0}
                // onChange={handleSeek}
                trackStyle={{ backgroundColor: "#1ed760" }}
                railStyle={{ backgroundColor: "#535353" }}
                handleStyle={{
                  backgroundColor: "#fff",
                  borderColor: "#fff",
                }}
              />
            </div>
        </div>
    )
}