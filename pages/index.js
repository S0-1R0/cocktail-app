import { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import CocktailTile from '../components/CocktailTile'
import styles from '../styles/Home.module.css'

import Link from "next/link"
export default function Home() {
  const [cocktails, setCocktails] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('cocktails') || '[]')
    if (stored.length === 0) {
      const sample = [
        { id: 1, name: 'Margarita', recipe: 'Tequila, Triple Sec, Lime Juice' },
        { id: 2, name: 'Mojito', recipe: 'White Rum, Lime Juice, Mint, Sugar, Soda' },
        { id: 3, name: 'Old Fashioned', recipe: 'Bourbon, Bitters, Sugar, Water' }
      ]
      localStorage.setItem('cocktails', JSON.stringify(sample))
      setCocktails(sample)
    } else {
      setCocktails(stored)
    }
  }, [])

  const filtered = cocktails.filter(c => c.name.toLowerCase().includes(query.toLowerCase()))

  return (
    <div className={styles.container}>
      <SearchBar onSearch={setQuery} />
      <Link href="/add">Add New Cocktail</Link>
      <div className={styles.grid}>
        {filtered.map(c => (
          <CocktailTile key={c.id} cocktail={c} />
        ))}
      </div>
    </div>
  )
}
