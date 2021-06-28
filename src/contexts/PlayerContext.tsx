import { useState, createContext, useContext, ReactNode } from "react"

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

type PlayerContextType = {
    currentTrack: Track
    setCurrentTrack: (track: Track) => void
}

type PlayerContextProviderProps = {
    children: ReactNode
}

export const PlayerContext = createContext({} as PlayerContextType)

export function PlayerContextProvider({ children }: PlayerContextProviderProps) {
    const [currentTrack, setCurrentTrack] = useState({} as Track)

    return (
        <PlayerContext.Provider value={{
            currentTrack,
            setCurrentTrack
        }}>
            {children}
        </PlayerContext.Provider>
    )
}

export function usePlayer() {
    return useContext(PlayerContext)
}