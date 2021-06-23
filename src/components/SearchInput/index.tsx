import { useCallback, useEffect, useRef, useState } from "react"
import debounce from "lodash.debounce"
import { search } from "../../pages/api/spotifyAPI"
import { Search, Close } from "@material-ui/icons"
import styles from "./style.module.scss"

export default function SearchInput() {
    const inputRef = useRef<HTMLInputElement>(null)
    const [value, setValue] = useState('')

    useEffect(() => {
      inputRef.current && inputRef.current.focus()
    }, [])

    const debouncedSave = useCallback(
        debounce(value => search(value), 400), [],
    )
    
    const handleChange = (value: string) => {
        setValue(value)
        if (value === '') return
        debouncedSave(value)
    }

    function clearInput() {
      inputRef.current.value = ''
      inputRef.current.focus()
      setValue('')
    }

    return (
        <fieldset className={styles.searchInput}>
          <Search className={styles.searchIcon} />

          <input ref={inputRef} type="text" spellCheck="false"
            maxLength={80} autoCorrect="off" name="search"
            placeholder="Artistas, músicas ou podcasts"
            onChange={() => handleChange(inputRef.current.value)}
          />

          {value && (
            <button onClick={clearInput}>
              <Close />
            </button>
          )}
        </fieldset>
    )
}