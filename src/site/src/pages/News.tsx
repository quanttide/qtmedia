import { Link } from 'react-router-dom'
import { news } from '../data/news'

export default function News() {
  return (
    <div className="page news page-news">
      <section className="hero">
        <span className="hero-kicker">ALL STORIES</span>
        <h1 className="hero-title">新闻</h1>
        <p className="hero-sub">量潮媒体中心的全部新闻，按时间倒序排列。</p>
      </section>

      <div className="news-list">
        {news.length === 0 ? (
          <p className="empty">暂无新闻</p>
        ) : (
          news.map(post => (
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
    </div>
  )
}
