import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { scenicSpots } from '../../data/scenicSpots'
import styles from './ScenicSpotDetail.module.css'

export default function ScenicSpotDetail() {
  const { slug } = useParams()
  const spot = scenicSpots.find((s) => s.id === slug)
  const [activeImage, setActiveImage] = useState(0)

  if (!spot) {
    return (
      <div className={styles.notFound}>
        <h2>未找到该景点</h2>
        <Link to="/scenic-spots">返回景区列表</Link>
      </div>
    )
  }

  return (
    <div className={styles.detailPage}>
      <div className={styles.hero}>
        <img src={spot.images[activeImage]} alt={spot.name} className={styles.heroImage} />
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroTitle}>{spot.name}</h1>
          <p className={styles.heroSubtitle}>{spot.nameEn}</p>
        </div>
        <Link to="/scenic-spots" className={styles.backBtn}>
          <span>←</span> 返回列表
        </Link>
      </div>

      <div className={styles.thumbnails}>
        {spot.images.map((img, index) => (
          <button
            key={index}
            className={`${styles.thumbnailBtn} ${index === activeImage ? styles.thumbnailActive : ''}`}
            onClick={() => setActiveImage(index)}
          >
            <img src={img} alt={`${spot.name} ${index + 1}`} />
          </button>
        ))}
      </div>

      <div className={styles.info}>
        <p className={styles.description}>{spot.description}</p>
      </div>
    </div>
  )
}
