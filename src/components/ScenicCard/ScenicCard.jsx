import { Link } from 'react-router-dom'
import styles from './ScenicCard.module.css'

export default function ScenicCard({ spot }) {
  return (
    <Link to={`/scenic-spots/${spot.id}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={spot.thumbnail} alt={spot.name} className={styles.image} loading="lazy" />
        <div className={styles.imageOverlay}>
          <span className={styles.viewMore}>查看详情 →</span>
        </div>
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{spot.name}</h3>
        <p className={styles.nameEn}>{spot.nameEn}</p>
      </div>
    </Link>
  )
}
