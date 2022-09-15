import React, {useContext, memo} from "react"
import styles from "./TableList.module.scss"
import {AppContext} from "../../context/appContext"
import {AppStateType, Device} from "../../@types/app"

const iconSrc = "https://static.ui.com/fingerprint/ui/icons"

interface Props {
  devices: Array<Device>
}

function TableList(props: Props) {
  const {setActiveDevice} = useContext(AppContext) as AppStateType

  return (
    <section className={styles.tableContainer}>
      <div className={styles.tableHeader}>
        <div className={styles.tableHeaderCount}>{props.devices.length} devices</div>
        <div className={styles.tableHeaderType}>Product Line</div>
        <div className={styles.tableHeaderName}>Name</div>
      </div>
      <div className={styles.tableList}>
        {props.devices.map((device, index) => {
          const {icon, product, line} = device
          const key = `table-list-item-${index}` // Index should be avoided here, need to get unique ID for each device from backend
          const sizeIndex = icon.resolutions.findIndex((size: Array<number>) => size[0] === 25)
          const sizeArray = icon.resolutions[sizeIndex === -1 ? 0 : sizeIndex]
          const iconSize = `${sizeArray[0]}x${sizeArray[1]}`
          return (
            <div className={styles.tableItem} key={key} onClick={() => {
              setActiveDevice(device)
            }}>
              <div className={styles.tableItemIcon}>
                <img
                  className={styles.tableItemIconImg}
                  src={`${iconSrc}/${icon.id}_${iconSize}.png`}
                  alt="Device"
                />
              </div>

              <div className={styles.tableItemType}>{line.name}</div>
              <div className={styles.tableItemName}>{product.name}</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default memo(TableList)
