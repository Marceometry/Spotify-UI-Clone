import { useCallback, useEffect, useRef, useState } from "react"
import debounce from "lodash.debounce"
import { Search, Close } from "@material-ui/icons"
import styles from "./style.module.scss"

export default function SearchInput() {
    const inputRef = useRef<HTMLInputElement>(null)
    const [value, setValue] = useState('')

    useEffect(() => {
      inputRef.current && inputRef.current.focus()
    }, [])

    const debouncedSave = useCallback(
        debounce(value => console.log(value), 400), [],
    )
    
    const handleChange = (target: HTMLInputElement) => {
        const { value } = target
        setValue(value)
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

          <input ref={inputRef} type="text" name="search"
            onChange={() => handleChange(inputRef.current)}
            placeholder="Artistas, músicas ou podcasts"
            maxLength={80} autoCorrect="off" spellCheck="false"
          />

          {value && (
            <button onClick={clearInput}>
              <Close />
            </button>
          )}
        </fieldset>
    )
}