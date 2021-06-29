import { useState, createContext, useContext, ReactNode, useRef, MutableRefObject } from "react"

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
    url: string
    name: string
    artists: Artist[]
    album: ALbum
    addedAt: string
    duration: number
}

type PlayerContextType = {
    audioRef: MutableRefObject<HTMLAudioElement>
    currentTrack: Track
    isPlaying: boolean
    setCurrentTrack: (track: Track) => void
    setIsPlaying: (playState: boolean) => void
    handlePlay: () => void
}

type PlayerContextProviderProps = {
    children: ReactNode
}

export const PlayerContext = createContext({} as PlayerContextType)

export function PlayerContextProvider({ children }: PlayerContextProviderProps) {
    const audioRef = useRef<HTMLAudioElement>(null)
    const [currentTrack, setCurrentTrack] = useState({} as Track)
    const [isPlaying, setIsPlaying] = useState(false)

    function handlePlay() {
      if (!currentTrack.url) {
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
        <PlayerContext.Provider value={{
            audioRef,
            currentTrack,
            setCurrentTrack,
            isPlaying,
            setIsPlaying,
            handlePlay
        }}>
            {children}
        </PlayerContext.Provider>
    )
}

export function usePlayer() {
    return useContext(PlayerContext)
}