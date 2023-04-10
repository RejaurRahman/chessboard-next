import React from "react"
import styles from "./Board.module.scss"

export default function Board() {
  const items = []

  for (let i = 0; i < 64; i++) {
    items.push(<div key={i} className={styles.board__item} />)
  }

  return (
    <div className={styles.board}>
      {items}
    </div>
  )
}
