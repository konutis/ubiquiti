import React, {useContext} from "react"
import classNames from 'classnames'
import styles from "./LayoutSwitcher.module.scss"
import {AppContext} from "../../context/appContext"
import {AppStateType} from "../../@types/app"

function LayoutSwitcher() {
  const {layoutView, setLayoutView} = useContext(AppContext) as AppStateType

  return (
    <div className={styles.layoutSwitcher}>
      <button
        className={classNames({
          [styles.layoutButton]: true,
          [styles.layoutList]: true,
          [styles.layoutButtonActive]: layoutView === 'list'
        })}
        onClick={() => {
          setLayoutView('list')
        }}
      />
      <button
        className={classNames({
          [styles.layoutButton]: true,
          [styles.layoutGrid]: true,
          [styles.layoutButtonActive]: layoutView === 'grid'
        })}
        onClick={() => {
          setLayoutView('grid')
        }}
      />
    </div>
  )
}

export default LayoutSwitcher
