import React, {useContext} from "react"
import styles from "./Search.module.scss"
import {AppContext} from "../../context/appContext"
import {AppStateType} from "../../@types/app"

function Search() {
  const {searchValue, setSearchValue} = useContext(AppContext) as AppStateType

  return (
    <div className={styles.search}>
      <input
        className={styles.searchInput}
        value={searchValue}
        placeholder="Search"
        type="search"
        onChange={e => setSearchValue(e.currentTarget.value)}
      />
      <button className={styles.searchClose} onClick={() => {
        setSearchValue('')
      }} />
    </div>
  )
}

export default Search
