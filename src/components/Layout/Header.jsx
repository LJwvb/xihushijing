import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logo} />
        <div className={styles.logoDecor} />
      </div>
    </header>
  )
}
