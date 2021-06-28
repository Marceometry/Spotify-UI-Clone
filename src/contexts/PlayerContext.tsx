import { useState, createContext, useContext, ReactNode, useCallback } from "react"
import debounce from "lodash.debounce"

type PlayerContextType = {
    currentTrackId: string
    currentTrackUrl: string
    setCurrentTrackId: (id: string) => void
    setCurrentTrackUrl: (id: string) => void
}

type PlayerContextProviderProps = {
    children: ReactNode
}

export const PlayerContext = createContext({} as PlayerContextType)

export function PlayerContextProvider({ children }: PlayerContextProviderProps) {
    const [currentTrackId, setCurrentTrackId] = useState('')
    const [currentTrackUrl, setCurrentTrackUrl] = useState('')

    // const debouncedSearch = useCallback(
    //     debounce(value => 
    //         search(value).then(response => {
    //         setSearchResult(response),
    //         setIsInputEmpty(false)
    //         }),
    //         400
    //     ), [],
    // )

    return (
        <PlayerContext.Provider value={{
            currentTrackId,
            setCurrentTrackId,
            currentTrackUrl,
            setCurrentTrackUrl
        }}>
            { children }
        </PlayerContext.Provider>
    )
}

export function usePlayer() {
    return useContext(PlayerContext)
}