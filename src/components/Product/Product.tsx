import React, {useContext, useEffect, useState} from "react"
import classNames from "classnames"
import styles from "./Product.module.scss"
import {AppContext} from "../../context/appContext"
import {AppStateType} from "../../@types/app"
import getProductDetails from "./productDetails"

const iconSrc = "https://static.ui.com/fingerprint/ui/icons"

function Product() {
  const {activeDevice} = useContext(AppContext) as AppStateType
  const [isMounted, setMounted] = useState(false)

  useEffect(() => {
    window.setTimeout(() => {
      setMounted(true)
    }, 100)
  }, [])

  if (!activeDevice) {
    return null
  }

  const {icon} = activeDevice
  const listData = getProductDetails(activeDevice)

  const sizeIndex = icon.resolutions.findIndex((size: Array<number>) => size[0] === 257)
  const sizeArray = icon.resolutions[sizeIndex === -1 ? 0 : sizeIndex]
  const iconSize = `${sizeArray[0]}x${sizeArray[1]}`
  const src = `${iconSrc}/${icon.id}_${iconSize}.png`

  return (
    <section className={styles.product}>
      <div className={styles.productContainer}>
        <div className={classNames(styles.productInner, {[styles.productInnerActive]: isMounted})}>
          <img className={styles.productImage} src={src} alt="Product" />
          <div className={styles.description}>
            {listData.map((item: { title: string, text: string }, index) => (
              <div className={styles.descriptionItem} key={`product-list-item-${index}`}>
                <span>{item.title}</span>
                <span className={styles.descriptionItemText}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product
