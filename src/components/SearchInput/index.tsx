import { useCallback, useRef, useState } from "react"
import { Search, Close } from "@material-ui/icons"
import styles from "./style.module.scss"

export default function SearchInput() {
    const inputRef = useRef<HTMLInputElement>(null)
    const [value, setValue] = useState('')
    const [dbValue, saveToDb] = useState('')

    // const debouncedSave = useCallback(
    //     debounce(nextValue => saveToDb(nextValue), 1000),
    //     [], // will be created only once initially
    // )
    // // highlight-ends
    
    // const handleChange = event => {
    //     const { value: nextValue } = event.target;
    //     setValue(nextValue);
    //     // Even though handleChange is created on each render and executed
    //     // it references the same debouncedSave that was created initially
    //     debouncedSave(nextValue);
    // }

    return (
        <fieldset className={styles.searchInput}>
          <Search />
          <input ref={inputRef} type="text" name="search"
            placeholder="Artistas, músicas ou podcasts"
            maxLength={80} autoCorrect="off" spellCheck="false"
          />
          {inputRef.current && <Close />}
        </fieldset>
    )
}