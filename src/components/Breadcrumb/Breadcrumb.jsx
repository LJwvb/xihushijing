import { Link } from 'react-router-dom'
import styles from './Breadcrumb.module.css'

export default function Breadcrumb({ items }) {
  return (
    <nav className={styles.breadcrumb} aria-label="面包屑导航">
      {items.map((item, index) => (
        <span key={index} className={styles.item}>
          {index < items.length - 1 ? (
            <>
              <Link to={item.to} className={styles.link}>{item.label}</Link>
              <span className={styles.separator}>/</span>
            </>
          ) : (
            <span className={styles.current}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
