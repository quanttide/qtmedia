import { Link } from 'react-router-dom'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout">
      <header className="header">
        <div className="header-inner">
          <Link to="/" className="brand">
            QuantTide<span className="brand-accent">媒体中心</span>
          </Link>
          <nav className="nav">
            <Link to="/">首页</Link>
            <Link to="/news">新闻</Link>
            <a href="/feed.xml" target="_blank" rel="noopener noreferrer">RSS</a>
          </nav>
        </div>
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <div className="footer-inner">
          <p>&copy; 2026 QuantTide 量潮科技</p>
          <div className="footer-links">
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer">Sitemap</a>
            <a href="https://github.com/quanttide" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
