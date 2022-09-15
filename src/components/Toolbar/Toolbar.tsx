import React, {useContext} from "react"
import styles from "./Toolbar.module.scss"
import {AppStateType} from "../../@types/app"
import {AppContext} from "../../context/appContext"
import Search from "../../components/Search/Search"
import LayoutSwitcher from "../LayoutSwitcher/LayoutSwitcher"
import Filter from "../Filter/Filter"

function Toolbar() {
  const {activeDevice, setActiveDevice} = useContext(AppContext) as AppStateType

  return (
    <nav className={styles.toolbar}>
      {activeDevice && (
        <>
          <button className={styles.toolbarBack} onClick={() => {
            setActiveDevice(null)
          }} />
          <span className={styles.toolbarTitle}>{activeDevice.product.name}</span>
        </>
      )}
      {!activeDevice && (
        <>
          <Search />
          <div className={styles.toolbarActions}>
            <LayoutSwitcher />
            <Filter />
          </div>
        </>
      )}
    </nav>
  )
}

export default Toolbar
