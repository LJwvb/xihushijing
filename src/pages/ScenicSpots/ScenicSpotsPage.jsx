import { Link } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import { scenicSpots } from '../../data/scenicSpots'
import styles from '../shared/InnerPage.module.css'
import gridStyles from './ScenicSpotsPage.module.css'

export default function ScenicSpotsPage() {
  return (
    <div className={styles.innerPage}>
      <div className="container">
        <div className={styles.pageLayout}>
          <Sidebar />
          <div className={styles.mainContent}>
            <div className={styles.pageHeader}>
              <h2 className={styles.pageTitle}>景区景点</h2>
              <Breadcrumb items={[
                { to: '/', label: '首页' },
                { to: '/scenic-spots', label: '景区景点' },
              ]} />
            </div>
            <div className={gridStyles.spotGrid}>
              {scenicSpots.map((spot) => (
                <Link key={spot.id} to={`/scenic-spots/${spot.id}`} className={gridStyles.spotCard}>
                  <div className={gridStyles.spotImageWrapper}>
                    <img src={spot.thumbnail} alt={spot.name} loading="lazy" />
                  </div>
                  <p className={gridStyles.spotName}>{spot.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
