import { Link, useParams } from 'react-router-dom'
import { marked } from 'marked'
import { getNews } from '../data/news'

marked.setOptions({
  gfm: true,
  breaks: true,
})

export default function NewsDetail() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getNews(slug) : undefined

  if (!post) {
    return (
      <div className="page news-detail">
        <Link to="/news" className="back-link">&larr; 返回新闻</Link>
        <p className="empty">新闻不存在</p>
      </div>
    )
  }

  const html = marked.parse(post.paragraphs.join('\n\n'))

  return (
    <div className="page news-detail">
      <Link to="/news" className="back-link">&larr; 返回新闻</Link>
      <article className="article">
        <header className="article-header">
          <h1 className="article-title">{post.title}</h1>
          <div className="article-meta">
            <span className="article-date">{post.date}</span>
            <span className="article-tag">新闻</span>
          </div>
        </header>
        <div
          className="article-body"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <footer className="article-footer">
          <Link to="/news" className="back-link">&larr; 返回全部新闻</Link>
        </footer>
      </article>
    </div>
  )
}
