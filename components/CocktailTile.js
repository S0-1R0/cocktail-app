import { useState } from 'react'
import styles from '../styles/CocktailTile.module.css'

export default function CocktailTile({ cocktail }) {
  const [flipped, setFlipped] = useState(false)
  const toggle = () => setFlipped(!flipped)

  return (
    <div className={styles.card} onClick={toggle}>
      <div className={flipped ? styles.innerFlipped : styles.inner}>
        <div className={styles.front}>
          {cocktail.name}
        </div>
        <div className={styles.back}>
          {cocktail.recipe}
        </div>
      </div>
    </div>
  )
}
