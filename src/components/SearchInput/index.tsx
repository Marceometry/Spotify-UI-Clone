import { useEffect, useRef } from "react"
import { useSearch } from "../../contexts/SearchContext"

import { Search, Close } from "@material-ui/icons"
import styles from "./style.module.scss"

export default function SearchInput() {
  const inputRef = useRef<HTMLInputElement>(null)
  const { searchText, setSearchText, debouncedSearch } = useSearch()

  useEffect(() => {
    inputRef.current && inputRef.current.focus()
  }, [])

  const handleChange = (value: string) => {
    setSearchText(value)
    if (value === '') return
    debouncedSearch(value)
  }

  function clearInput() {
    inputRef.current.value = ''
    inputRef.current.focus()
    setSearchText('')
  }

  return (
    <fieldset className={styles.searchInput}>
      <Search className={styles.searchIcon} />

      <input ref={inputRef} type="text" spellCheck="false"
        maxLength={80} autoCorrect="off" name="search"
        placeholder="Artistas, músicas ou podcasts" value={searchText}
        onChange={() => handleChange(inputRef.current.value)}
      />

      {searchText && (
        <button onClick={clearInput}>
          <Close />
        </button>
      )}
    </fieldset>
  )
}