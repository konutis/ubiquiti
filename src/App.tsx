import React from "react"
import styles from "./App.module.scss"
import AppProvider from "./context/appContext"
import Header from "./components/Header/Header"
import Toolbar from "./components/Toolbar/Toolbar"
import Panel from "./components/Panel/Panel"

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <AppProvider>
        <Toolbar />
        <Panel />
      </AppProvider>
    </div>
  )
}

export default App
