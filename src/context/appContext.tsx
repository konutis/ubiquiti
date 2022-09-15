import React, {useState, createContext, useEffect} from "react"
import {Device} from "../@types/app"
import {AppStateType, FilterList} from "../@types/app"

export const AppContext = createContext<AppStateType | null>(null)

interface Props {
  children: React.ReactNode;
}

const AppProvider: React.FC<Props> = ({children}) => {
  const [searchValue, setSearchValue] = useState("")
  const [devices, setDevices] = useState([])
  const [activeDevice, setActiveDevice] = useState(null)
  const [layoutView, setLayoutView] = useState("list")
  const [filterValue, setFilterValue] = useState([])
  const [filterList, setFilterList] = useState({})

  useEffect(() => {
    const fetchData = () => {
      fetch("https://static.ui.com/fingerprint/ui/public.json")
        .then((response) => response.json())
        .then((data) => {
          setDevices(data.devices)

          const filters: FilterList = {}
          data.devices.forEach((item: Device) => {
            filters[item.line.id] = item.line.name
          })
          setFilterList(filters)
        })
    }
    fetchData()
  }, [])

  return (
    <AppContext.Provider value={{
      searchValue,
      setSearchValue,
      devices,
      activeDevice,
      setActiveDevice,
      layoutView,
      setLayoutView,
      filterValue,
      setFilterValue,
      filterList
    }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
