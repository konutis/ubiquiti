import React, {useContext, memo} from "react"
import styles from "./Grid.module.scss"
import {AppContext} from "../../context/appContext"
import {AppStateType, Device} from "../../@types/app"

const iconSrc = "https://static.ui.com/fingerprint/ui/icons"

interface Props {
  devices: Array<Device>
}

function TableGrid(props: Props) {
  const {setActiveDevice} = useContext(AppContext) as AppStateType

  return (
    <section className={styles.gridContainer}>
      <div className={styles.gridInner}>
        <div className={styles.gridHeader}>
          <div className={styles.gridHeaderCount}>{props.devices.length} devices</div>
        </div>
        <div className={styles.grid}>
          {props.devices.map((device, index) => {
            const {icon, product, line} = device
            const key = `table-list-item-${index}` // Index should be avoided here, need to get unique ID for each device from backend
            const sizeIndex = icon.resolutions.findIndex((size: Array<number>) => size[0] === 129)
            const sizeArray = icon.resolutions[sizeIndex === -1 ? 0 : sizeIndex]
            const iconSize = `${sizeArray[0]}x${sizeArray[1]}`
            return (
              <div className={styles.gridItem} key={key} onClick={() => {
                setActiveDevice(device)
              }} title={product.name}>
                <div className={styles.gridItemBackground}>
                  <img
                    className={styles.gridItemImg}
                    src={`${iconSrc}/${icon.id}_${iconSize}.png`}
                    alt="Device"
                  />
                </div>
                <div className={styles.gridItemName}>{product.name}</div>
                <div className={styles.gridItemType}>{line.name}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default memo(TableGrid)
