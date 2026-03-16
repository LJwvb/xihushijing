import { Link, NavLink } from 'react-router-dom'
import { scenicSpots, newsItems } from '../../data/scenicSpots'
import styles from './Sidebar.module.css'

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sceicSection}>
        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionTitle}>景区景点</h3>
          <hr className={styles.divider} />
          <p className={styles.sectionSubtitle}>Scenic Spots</p>
        </div>
        <ul className={styles.spotList}>
          {scenicSpots.map((spot) => (
            <li key={spot.id}>
              <NavLink
                to={`/scenic-spots/${spot.id}`}
                className={({ isActive }) =>
                  `${styles.spotLink} ${isActive ? styles.active : ''}`
                }
              >
                {spot.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.newsSection}>
        <div className={styles.newsSectionHeader}>
          <span className={styles.newsTitle}>最新资讯</span>
          <Link to="/news" className={styles.moreLink}>更多 →</Link>
        </div>
        <ul className={styles.newsList}>
          {newsItems.map((item) => (
            <li key={item.id}>
              <Link to="/news" className={styles.newsLink}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.contactSection}>
        <div className={styles.newsSectionHeader}>
          <span className={styles.newsTitle}>联系我们</span>
          <Link to="/contact" className={styles.moreLink}>更多 →</Link>
        </div>
        <div className={styles.contactInfo}>
          <p>浙江省绍兴市越城区曲屯路151号</p>
          <p>📞 180#######</p>
          <p>✉ z75#######@126.com</p>
        </div>
      </div>
    </aside>
  )
}
