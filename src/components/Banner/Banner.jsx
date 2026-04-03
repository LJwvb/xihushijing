import { useState, useEffect, useCallback } from 'react'
import styles from './Banner.module.css'

const bannerSlides = [
  { src: '/img/banner_1.jpg', alt: '西湖美景' },
  { src: '/img/banner_2.jpg', alt: '西湖风光' },
]

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % bannerSlides.length)
  }, [])

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length)
  }, [])

  useEffect(() => {
    if (isHovered) return
    const timer = setInterval(goToNext, 4000)
    return () => clearInterval(timer)
  }, [isHovered, goToNext])

  return (
    <div
      className={styles.banner}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={styles.slideTrack}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {bannerSlides.map((slide) => (
          <div key={slide.src} className={styles.slide}>
            <img src={slide.src} alt={slide.alt} />
            <div className={styles.overlay}>
              <div className={styles.overlayContent}>
                <h1 className={styles.overlayTitle}>西湖十景</h1>
                <p className={styles.overlaySubtitle}>杭州西湖风景名胜区 · 世界文化遗产</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className={`${styles.arrowBtn} ${styles.arrowLeft}`} onClick={goToPrev} aria-label="上一张">
        ‹
      </button>
      <button className={`${styles.arrowBtn} ${styles.arrowRight}`} onClick={goToNext} aria-label="下一张">
        ›
      </button>

      <div className={styles.indicators}>
        {bannerSlides.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentIndex ? styles.indicatorActive : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`第${index + 1}张`}
          />
        ))}
      </div>
    </div>
  )
}
