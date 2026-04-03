import Sidebar from '../../components/Sidebar/Sidebar'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import styles from '../shared/InnerPage.module.css'
import contactStyles from './ContactPage.module.css'

export default function ContactPage() {
  return (
    <div className={styles.innerPage}>
      <div className="container">
        <div className={styles.pageLayout}>
          <Sidebar />
          <div className={styles.mainContent}>
            <div className={styles.pageHeader}>
              <h2 className={styles.pageTitle}>联系我们</h2>
              <Breadcrumb items={[
                { to: '/', label: '首页' },
                { to: '/contact', label: '联系我们' },
              ]} />
            </div>
            <div className={contactStyles.contactBody}>
              <div className={contactStyles.contactCard}>
                <div className={contactStyles.contactIcon}>🏫</div>
                <div className={contactStyles.contactLabel}>单位名称</div>
                <div className={contactStyles.contactValue}>浙江工业职业技术学院</div>
              </div>
              <div className={contactStyles.contactCard}>
                <div className={contactStyles.contactIcon}>📍</div>
                <div className={contactStyles.contactLabel}>联系地址</div>
                <div className={contactStyles.contactValue}>浙江省绍兴市越城区曲屯路151号</div>
              </div>
              <div className={contactStyles.contactCard}>
                <div className={contactStyles.contactIcon}>📞</div>
                <div className={contactStyles.contactLabel}>联系电话</div>
                <div className={contactStyles.contactValue}>180#######</div>
              </div>
              <div className={contactStyles.contactCard}>
                <div className={contactStyles.contactIcon}>✉️</div>
                <div className={contactStyles.contactLabel}>电子邮箱</div>
                <div className={contactStyles.contactValue}>z75#######@126.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
