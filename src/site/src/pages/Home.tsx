import { Link } from 'react-router-dom'
import { news } from '../data/news'

const FEED_URL = '/feed.xml'

export default function Home() {
  const featured = news[0]
  // 仅一篇时：头条与「最新新闻」都展示该篇，避免列表空洞；多篇时列表展示其余
  const rest = news.length > 1 ? news.slice(1, 6) : news
  const total = news.length

  return (
    <div className="page home">
      <section className="hero">
        <span className="hero-kicker">INDEPENDENT NEWSROOM</span>
        <h1 className="hero-title">量潮媒体中心</h1>
        <p className="hero-sub">
          量潮自己的新闻网站：内容自主生产、存储与分发，不依赖任何新媒体平台的账号与规则。
        </p>
      </section>

      {featured && (
        <section className="section">
          <article className="featured">
            <div className="featured-meta">
              <span className="tag">头条</span>
              <span className="featured-date">{featured.date}</span>
            </div>
            <Link to={`/news/${featured.slug}`} className="featured-title">
              {featured.title}
            </Link>
            <p className="featured-summary">{featured.summary}</p>
            <Link to={`/news/${featured.slug}`} className="featured-link">
              阅读全文 &rarr;
            </Link>
          </article>
        </section>
      )}

      <section className="section">
        <div className="section-head">
          <h2 className="section-title">最新新闻</h2>
          <Link to="/news" className="section-more">全部 {total} 篇 &rarr;</Link>
        </div>
        <div className="news-list">
          {rest.length === 0 ? (
            <p className="empty">暂无更多新闻</p>
          ) : (
            rest.map(post => (
              <article className="news-item" key={post.slug}>
                <div className="news-meta">
                  <span className="news-date">{post.date}</span>
                </div>
                <Link to={`/news/${post.slug}`} className="news-title">
                  {post.title}
                </Link>
                <p className="news-summary">{post.summary}</p>
              </article>
            ))
          )}
        </div>
      </section>

      <section className="section">
        <div className="subscribe">
          <span className="hero-kicker subscribe-kicker">RSS SUBSCRIBE</span>
          <h2>订阅更新</h2>
          <p>
            本站提供标准 RSS 订阅。复制订阅链接到任意阅读器，即可在自有工具中接收更新——
            不经过任何平台的推荐算法。
          </p>
          <span className="feed-link">
            <a href={FEED_URL} target="_blank" rel="noopener noreferrer">
              https://media.quanttide.com/feed.xml
            </a>
          </span>
        </div>
      </section>
    </div>
  )
}
