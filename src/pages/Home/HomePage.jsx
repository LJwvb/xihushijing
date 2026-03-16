import { Link } from 'react-router-dom'
import Banner from '../../components/Banner/Banner'
import ScenicCard from '../../components/ScenicCard/ScenicCard'
import { scenicSpots, newsItems } from '../../data/scenicSpots'
import styles from './HomePage.module.css'

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <Banner />

      {/* Scenic Spots Section */}
      <section className={styles.scenicSection}>
        <div className="container">
          <div className="section-title">
            <span className="title-en">Scenic Spots</span>
            <h2 className="title-zh">景区景点</h2>
          </div>

          <div className={styles.spotFilters}>
            {scenicSpots.map((spot) => (
              <Link key={spot.id} to={`/scenic-spots/${spot.id}`} className={styles.filterTag}>
                {spot.name}
              </Link>
            ))}
          </div>

          <div className={styles.spotGrid}>
            {scenicSpots.map((spot) => (
              <ScenicCard key={spot.id} spot={spot} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutInner}>
          <div className={styles.aboutText}>
            <h2 className={styles.aboutTitle}>走进美丽的西湖</h2>
            <div className={styles.aboutDivider} />
            <div className={styles.aboutContent}>
              <p>西湖，位于浙江省杭州市西湖区龙井路1号，杭州市区西部，景区总面积49平方千米，汇水面积为21.22平方千米，湖面面积为6.38平方千米。</p>
              <p>西湖有100多处公园景点，有"西湖十景"、"新西湖十景"、"三评西湖十景"之说，有60多处国家、省、市级重点文物保护单位和20多座博物馆，有断桥、雷峰塔、钱王祠、净慈寺、苏小小墓等景点。</p>
              <p>2007年，杭州市西湖风景名胜区被评为"国家AAAAA级旅游景区"。2011年6月24日，"杭州西湖文化景观"正式被列入《世界遗产名录》。</p>
            </div>
            <Link to="/about" className="btn-primary">了解更多 →</Link>
          </div>
          <div className={styles.aboutImage}>
            <img src="/img/xihu.jpg" alt="西湖全景" />
          </div>
        </div>
      </section>

      {/* Reasons Section */}
      <section className={styles.reasonsSection}>
        <div className="container">
          <div className="section-title">
            <span className="title-en">Why Choose West Lake</span>
            <h2 className="title-zh">选择西湖的 <span className={styles.accent}>4</span> 大理由</h2>
          </div>
          <div className={styles.reasonsGrid}>
            <div className={styles.reasonCard}>
              <h3 className={styles.reasonTitle}>诗词之迷人意境</h3>
              <div className={styles.reasonContent}>
                <h4>饮湖上初晴后雨二首·其二</h4>
                <p className={styles.poet}>苏轼 · 宋</p>
                <div className={styles.poem}>
                  <p>水光潋滟晴方好，</p>
                  <p>山色空蒙雨亦奇。</p>
                  <p>欲把西湖比西子，</p>
                  <p>淡妆浓抹总相宜。</p>
                </div>
              </div>
            </div>
            <div className={styles.reasonCard}>
              <h3 className={styles.reasonTitle}>传说之浪漫爱情</h3>
              <div className={styles.reasonContent}>
                <p>白娘子与许仙</p>
                <p>梁山伯与祝英台</p>
              </div>
            </div>
            <div className={styles.reasonCard}>
              <h3 className={styles.reasonTitle}>老建筑浓厚历史</h3>
              <div className={styles.reasonContent}>
                <p>蒋经国旧居</p>
                <p>抱青别墅</p>
                <p>玛瑙寺</p>
              </div>
            </div>
            <div className={styles.reasonCard}>
              <h3 className={styles.reasonTitle}>地道西湖美食</h3>
              <div className={styles.reasonContent}>
                <p>龙井虾仁</p>
                <p>西湖醋鱼</p>
                <p>东坡肉</p>
                <p>宋嫂鱼羹</p>
                <p>西湖莼菜汤</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className={styles.newsSection}>
        <div className="container">
          <div className="section-title">
            <span className="title-en">News Center</span>
            <h2 className="title-zh">动态中心</h2>
          </div>
          <div className={styles.newsGrid}>
            <div className={styles.newsBlock}>
              <div className={styles.newsBlockHeader}>景区动态</div>
              <div className={styles.newsFeatured}>
                <div className={styles.newsFeaturedImage}>
                  <Link to="/news"><img src="/img/1.jpg" alt="景区动态" /></Link>
                </div>
                <p className={styles.newsFeaturedText}>很多人旅游会选择跟团旅行，既方便又省心，跟团旅行也要自己多注意。</p>
              </div>
              <ul className={styles.newsList}>
                {newsItems.map((item) => (
                  <li key={item.id} className={styles.newsItem}>
                    <Link to="/news" className={styles.newsTitle}>{item.title}</Link>
                    <span className={styles.newsDate}>{item.date}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.newsBlock}>
              <div className={styles.newsBlockHeader}>景区荣誉</div>
              <div className={styles.newsFeatured}>
                <div className={styles.newsFeaturedImage}>
                  <Link to="/about"><img src="/img/2.jpg" alt="景区荣誉" /></Link>
                </div>
                <p className={styles.newsFeaturedText}>1982年西湖被评为国家重点风景名胜区。西湖文化景观的保护正式被纳入到国家遗产保护体系之中。</p>
              </div>
              <ul className={styles.honorList}>
                <li>1985年被选为"全国十大风景名胜"之一。</li>
                <li>2006年西湖被列入中国世界文化遗产预备名单。</li>
                <li>2007年西湖被评为"国家AAAAA级旅游景区"。</li>
                <li>2011年6月24日"中国杭州西湖文化景观"正式被列入《世界遗产名录》。</li>
                <li>2020年6月，西湖位列"2019年度5A级景区品牌100强榜单"第5位。</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
