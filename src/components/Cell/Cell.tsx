import React from "react"
import styles from "./Cell.module.scss"

type CellProps = {
  x: string
  y: number
}

export default function Cell({
  x,
  y
}: CellProps) {
  return (
    <div
      className={styles.cell}
      data-value={`cell-${x}-${y}`}
    />
  )
}
