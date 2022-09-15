import React, {useContext, useState} from "react"
import classNames from 'classnames'
import styles from "./Filter.module.scss"
import {AppStateType} from "../../@types/app"
import {AppContext} from "../../context/appContext"
import Checkbox from "../Checkbox/Checkbox"

function Filter() {
  const {
    filterList,
    filterValue,
    setFilterValue
  } = useContext(AppContext) as AppStateType
  const [isOpened, setOpened] = useState(false)

  return (
    <div className={classNames(styles.filter, {[styles.filterOpened]: isOpened})}>
      <button className={styles.filterButton} onClick={() => {
        setOpened(true)
      }}>
        Filter
      </button>
      <div className={styles.filterBox}>
        <div className={styles.filterHeader}>
          Filter
          <button className={styles.filterClose} onClick={() => {
            setOpened(false)
          }} />
        </div>
        <div className={styles.filterInner}>
          <div className={styles.filterTitle}>Product line</div>
          <div className={styles.filterActions}>
            {Object.keys(filterList).map((filterKey) => <Checkbox
              key={`product-filter-${filterKey}`}
              id={`product-filter-${filterKey}`}
              label={filterList[filterKey]}
              isChecked={filterValue.includes(filterKey)}
              setChecked={(isChecked) => {
                if (isChecked) {
                  setFilterValue([...filterValue, filterKey])
                } else {
                  const index = filterValue.indexOf(filterKey)
                  const copiedValue = [...filterValue]
                  copiedValue.splice(index, 1)
                  setFilterValue(copiedValue)
                }
              }}
            />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter
