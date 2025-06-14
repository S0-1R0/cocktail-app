import { useState } from 'react'
import styles from '../styles/Add.module.css'

export default function Add() {
  const [name, setName] = useState('')
  const [recipe, setRecipe] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    const cocktails = JSON.parse(localStorage.getItem('cocktails') || '[]')
    const id = cocktails.length ? cocktails[cocktails.length - 1].id + 1 : 1
    const newCocktail = { id, name, recipe }
    cocktails.push(newCocktail)
    localStorage.setItem('cocktails', JSON.stringify(cocktails))
    setName('')
    setRecipe('')
    alert('Cocktail added!')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>Add Cocktail</h1>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
      <textarea value={recipe} onChange={e => setRecipe(e.target.value)} placeholder="Recipe" required />
      <button type="submit">Add</button>
    </form>
  )
}
