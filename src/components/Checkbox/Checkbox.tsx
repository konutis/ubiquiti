import React from "react"
import styles from "./Checkbox.module.scss"

interface Props {
  id: string,
  label: string,
  isChecked: boolean,
  setChecked: (isChecked: boolean) => void
}

function Checkbox(props: Props) {
  return (
    <div className={styles.checkbox}>
      <input
        className={styles.checkboxInput}
        id={`checkbox-${props.id}`}
        type="checkbox"
        checked={props.isChecked}
        onChange={() => {
          props.setChecked(!props.isChecked)
        }}
      />
      <label htmlFor={`checkbox-${props.id}`} className={styles.checkboxLabel}>{props.label}</label>
    </div>
  )
}

export default Checkbox
