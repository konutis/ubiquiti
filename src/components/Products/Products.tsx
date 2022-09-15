import React, {useContext, useMemo, memo} from "react"
import {AppContext} from "../../context/appContext"
import {AppStateType} from "../../@types/app"
import TableList from "../TableList/TableList"
import Grid from "../Grid/Grid"

function Products() {
  const {searchValue, devices, filterValue, layoutView} = useContext(AppContext) as AppStateType

  const getFilteredDevices = (searchValue: string, filterValue: Array<string>, devices: Array<any>) => {
    if (!searchValue && !filterValue.length) {
      return devices
    } else {
      return devices.filter((device) => {
        const {line, product} = device
        if (filterValue.length) {
          if (!filterValue.includes(line.id)) {
            return false
          }
        }

        const searchVal = searchValue.toLowerCase()
        // Search by line name, product abbrev, product name
        return line.name.toLowerCase().includes(searchVal) || product.abbrev.toLowerCase().includes(searchVal) || product.name.toLowerCase().includes(searchVal)
      })
    }
  }

  const filteredDevices = useMemo(() => getFilteredDevices(searchValue, filterValue, devices), [searchValue, filterValue, devices])

  return layoutView === "list" ? <TableList devices={filteredDevices} /> : <Grid devices={filteredDevices} />
}

export default memo(Products)
