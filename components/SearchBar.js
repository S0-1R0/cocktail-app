import styles from '../styles/SearchBar.module.css'

export default function SearchBar({ onSearch }) {
  return (
    <input
      className={styles.search}
      placeholder="Search cocktails..."
      onChange={e => onSearch(e.target.value)}
    />
  )
}
