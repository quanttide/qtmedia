import { Link, useParams } from 'react-router-dom'
import { getNews } from '../data/news'

function renderParagraphs(paragraphs: string[]) {
  return paragraphs.map((para, i) => (
    <p key={i}>
      {para.split('\n').flatMap((line, j) =>
        j === 0 ? [line] : [<br key={`br-${i}-${j}`} />, line]
      )}
    </p>
  ))
}

export default function NewsDetail() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getNews(slug) : undefined

  if (!post) {
    return (
      <div className="page news-detail">
        <Link to="/news" className="back-link">&larr; 新闻</Link>
        <p className="empty">新闻不存在</p>
      </div>
    )
  }

  return (
    <div className="page news-detail">
      <Link to="/news" className="back-link">&larr; 新闻</Link>
      <article className="article">
        <header className="article-header">
          <h1 className="article-title">{post.title}</h1>
          <p className="article-date">{post.date}</p>
        </header>
        <div className="article-body">{renderParagraphs(post.paragraphs)}</div>
      </article>
    </div>
  )
}
