import { Link } from 'react-router-dom'
import { news } from '../data/news'

const contacts = [
  { label: 'GitHub', value: 'github.com/quanttide', href: 'https://github.com/quanttide' },
]

const FEED_URL = '/feed.xml'

export default function Home() {
  const latest = news.slice(0, 5)

  return (
    <div className="page home">
      <section className="hero">
        <h1 className="hero-tagline">
          量潮媒体中心。<br />
          量潮的独立新闻网站：与你分享量潮在发生什么、说了什么。
        </h1>
      </section>

      <section className="section">
        <h2>最新新闻</h2>
        {latest.length === 0 ? (
          <p className="empty">暂无新闻</p>
        ) : (
          latest.map(post => (
            <div className="news-item" key={post.slug}>
              <span className="news-date">{post.date}</span>
              <Link to={`/news/${post.slug}`} className="news-title">
                {post.title}
              </Link>
              <p className="news-summary">{post.summary}</p>
            </div>
          ))
        )}
        <Link to="/news" className="view-all">全部新闻 &rarr;</Link>
      </section>

      <section className="section">
        <h2>订阅</h2>
        <p>
          本站提供标准 RSS 订阅，复制订阅链接到任意阅读器即可：
        </p>
        <p className="feed-link">
          <a href={FEED_URL} target="_blank" rel="noopener noreferrer">{FEED_URL}</a>
        </p>
      </section>

      <section className="section">
        <h2>联系</h2>
        <div className="contact-list">
          {contacts.map(contact => (
            <div className="contact-item" key={contact.label}>
              <span className="contact-label">{contact.label}</span>
              <a href={contact.href} target="_blank" rel="noopener noreferrer">
                {contact.value}
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
