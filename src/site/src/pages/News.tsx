import { Link } from 'react-router-dom'
import { news } from '../data/news'

export default function News() {
  return (
    <div className="page news">
      <section className="hero">
        <h1 className="hero-tagline">全部新闻</h1>
      </section>

      <section className="section">
        {news.length === 0 ? (
          <p className="empty">暂无新闻</p>
        ) : (
          news.map(post => (
            <div className="news-item" key={post.slug}>
              <span className="news-date">{post.date}</span>
              <Link to={`/news/${post.slug}`} className="news-title">
                {post.title}
              </Link>
              <p className="news-summary">{post.summary}</p>
            </div>
          ))
        )}
      </section>
    </div>
  )
}
