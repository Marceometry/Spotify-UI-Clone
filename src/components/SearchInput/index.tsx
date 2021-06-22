import { useCallback, useRef, useState } from "react"
import debounce from "lodash.debounce"
import { Search, Close } from "@material-ui/icons"
import styles from "./style.module.scss"

export default function SearchInput() {
    const inputRef = useRef<HTMLInputElement>(null)
    const [value, setValue] = useState('')
    const [dbValue, saveToDb] = useState('')

    const debouncedSave = useCallback(
        debounce(nextValue => console.log(nextValue), 400),
        [], // will be created only once initially
    )
    // highlight-ends
    
    const handleChange = target => {
        const { value: nextValue } = target
        setValue(nextValue)
        // Even though handleChange is created on each render and executed
        // it references the same debouncedSave that was created initially
        debouncedSave(nextValue)
    }

    function clearInput() {
      inputRef.current.value = ''
      inputRef.current.focus()
      setValue('')
    }

    return (
        <fieldset className={styles.searchInput}>
          <Search />
          <input onChange={() => handleChange(event.target)} ref={inputRef} type="text" name="search"
            placeholder="Artistas, músicas ou podcasts"
            maxLength={80} autoCorrect="off" spellCheck="false"
          />
          {inputRef.current && value && <Close onClick={clearInput} />}
        </fieldset>
    )
}