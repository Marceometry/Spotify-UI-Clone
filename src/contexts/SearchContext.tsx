import debounce from "lodash.debounce"
import { useState, createContext, useContext, ReactNode, useCallback } from "react"
import { search } from "../pages/api/spotifyAPI"

type SearchResult = {
    artistsResult: {
        title: string
        type: string
        items: Artist[]
    }
    albumsResult: {
        title: string
        type: string
        items: ALbum[] 
    }
    playlistsResult: {
        title: string
        type: string
        items: Playlist[]
    }
    tracksResult: {
        title: string
        type: string
        items: Track[]
    }
}

type ALbum = {
    id: string
    name: string
    images: Image[]
    artists: Artist[]
}

type Artist = {
    id: string
    name: string
    images: Image[]
}

type Playlist = {
    id: string
    name: string
    description: string
    images: Image[]
}

type Track = {
    id: string
    name: string
    artists: Artist[]
    album: ALbum
}

type Image = {
    url: string
}

type SearchContextType = {
    searchText: string
    searchResult: SearchResult
    isInputEmpty: boolean
    setSearchText: (value: string) => void
    setIsInputEmpty: (value: boolean) => void
    debouncedSearch: Function
}

type SearchContextProviderProps = {
    children: ReactNode
}

export const SearchContext = createContext({} as SearchContextType)

export function SearchContextProvider({ children }: SearchContextProviderProps) {
    const [searchResult, setSearchResult] = useState({} as SearchResult)
    const [searchText, setSearchText] = useState('')
    const [isInputEmpty, setIsInputEmpty] = useState(true)

    const debouncedSearch = useCallback(
        debounce(value => 
            search(value).then(response => {
            setSearchResult(response),
            setIsInputEmpty(false)
            }),
            400
        ), [],
    )

    return (
        <SearchContext.Provider value={{searchText, setSearchText, searchResult, debouncedSearch, isInputEmpty, setIsInputEmpty}}>
            { children }
        </SearchContext.Provider>
    )
}

export function useSearch() {
    return useContext(SearchContext)
}