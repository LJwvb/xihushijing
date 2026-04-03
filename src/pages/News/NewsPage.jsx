import { useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import { newsItems } from '../../data/scenicSpots'
import styles from '../shared/InnerPage.module.css'
import newsStyles from './NewsPage.module.css'

export default function NewsPage() {
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => setOpenId(openId === id ? null : id)

  return (
    <div className={styles.innerPage}>
      <div className="container">
        <div className={styles.pageLayout}>
          <Sidebar />
          <div className={styles.mainContent}>
            <div className={styles.pageHeader}>
              <h2 className={styles.pageTitle}>动态中心</h2>
              <Breadcrumb items={[
                { to: '/', label: '首页' },
                { to: '/news', label: '动态中心' },
              ]} />
            </div>
            <div className={newsStyles.newsList}>
              {newsItems.map((item) => (
                <div key={item.id} className={newsStyles.newsItem}>
                  <button
                    className={newsStyles.newsToggle}
                    onClick={() => toggle(item.id)}
                  >
                    <span className={newsStyles.newsTitleText}>{item.title}</span>
                    <span className={`${newsStyles.toggleIcon} ${openId === item.id ? newsStyles.open : ''}`}>
                      ▼
                    </span>
                  </button>
                  {openId === item.id && (
                    <div className={newsStyles.newsDetail}>
                      <h1 className={newsStyles.detailTitle}>{item.title}</h1>
                      <p className={newsStyles.detailDate}>发布时间：{item.date}</p>
                      <div className={newsStyles.detailContent}>
                        {item.image && (
                          <img src={item.image} alt={item.title} className={newsStyles.routeImage} />
                        )}
                        {item.content.split('\n').map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
