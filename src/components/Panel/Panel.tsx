import React, {useContext} from "react"
import Product from "../Product/Product"
import Products from "../Products/Products"
import {AppContext} from "../../context/appContext"
import {AppStateType} from "../../@types/app"
import styles from "./Panel.module.scss"

function Panel() {
  const {activeDevice} = useContext(AppContext) as AppStateType

  return (
    <div className={styles.panel}>
      <Products />
      {activeDevice &&  <Product />}
    </div>
  )
}

export default Panel
