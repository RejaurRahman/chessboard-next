import React from "react"
import styles from "./Board.module.scss"
import Cell from "../Cell/Cell"

export default function Board() {
  const items = []

  for (let y = 8; y >= 1; y--) {
    for (let x of ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']) {
      items.push(
        <Cell
          key={`${x}${y}`}
          x={x}
          y={y}
        />
      )
    }
  }

  return (
    <div className={styles.board}>
      {items}
    </div>
  )
}
