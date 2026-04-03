import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const footerLinks = [
  { to: '/', label: '首页' },
  { to: '/about', label: '关于西湖' },
  { to: '/scenic-spots', label: '景区景点' },
  { to: '/news', label: '景区动态' },
  { to: '/contact', label: '联系我们' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.qrCode}>
          <img src="/img/xioahui.jpg" alt="二维码" width={140} height={140} />
          <p>扫码关注</p>
        </div>
        <div className={styles.content}>
          <nav className={styles.footerNav}>
            {footerLinks.map((link) => (
              <Link key={link.to} to={link.to} className={styles.footerNavLink}>
                {link.label}
              </Link>
            ))}
          </nav>
          <div className={styles.footerInfo}>
            <p>浙江工业职业技术学院 &nbsp;|&nbsp; 地址：浙江省绍兴市越城区曲屯路151号</p>
            <p>© 2024 西湖十景 · 杭州西湖风景名胜区</p>
          </div>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialIcon} aria-label="微信">
              <img src="/img/wechat.png" alt="微信" />
            </a>
            <a href="#" className={styles.socialIcon} aria-label="微博">
              <img src="/img/weibo.png" alt="微博" />
            </a>
            <a href="#" className={styles.socialIcon} aria-label="QQ">
              <img src="/img/QQ.png" alt="QQ" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
