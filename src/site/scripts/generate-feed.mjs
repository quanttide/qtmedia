// 构建脚本：扫描仓库根 data/news/*.md，生成 dist/feed.xml（RSS 2.0）与 dist/sitemap.xml
// 在 vite build 之后运行：写入 dist/ 下的静态产物
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const CONTENT_DIR = join(__dirname, '..', '..', '..', 'data', 'news')
const DIST_DIR = join(__dirname, '..', 'dist')

const SITE_URL = process.env.SITE_URL ?? 'https://media.quanttide.com'
const SITE_TITLE = '量潮媒体中心'
const SITE_DESCRIPTION = '量潮的独立新闻网站'

function esc(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function parseFile(filename) {
  const match = filename.match(/^(\d{4}-\d{2}-\d{2})-(.+)\.md$/)
  if (!match) return null
  const [, date, slug] = match
  const raw = readFileSync(join(CONTENT_DIR, filename), 'utf8')
  const lines = raw.replace(/\r\n/g, '\n').split('\n')
  const titleLine = lines.findIndex(line => line.startsWith('# '))
  const title = titleLine >= 0 ? lines[titleLine].slice(2).trim() : ''
  const paragraphs = (titleLine >= 0 ? lines.slice(titleLine + 1) : lines)
    .join('\n')
    .split(/\n\s*\n/)
    .map(p => p.trim())
    .filter(Boolean)
  return { date, slug, title, summary: paragraphs[0] ?? '', content: paragraphs.join('\n\n') }
}

const posts = readdirSync(CONTENT_DIR)
  .filter(f => f.endsWith('.md'))
  .map(parseFile)
  .filter(Boolean)
  .sort((a, b) => b.date.localeCompare(a.date))

const pubDate = date => new Date(`${date}T00:00:00+08:00`).toUTCString()

// RSS 2.0
const items = posts
  .map(
    post => `    <item>
      <title>${esc(post.title)}</title>
      <link>${SITE_URL}/news/${post.slug}/</link>
      <guid isPermaLink="true">${SITE_URL}/news/${post.slug}/</guid>
      <pubDate>${pubDate(post.date)}</pubDate>
      <description>${esc(post.summary)}</description>
    </item>`
  )
  .join('\n')

const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${esc(SITE_TITLE)}</title>
    <link>${SITE_URL}/</link>
    <description>${esc(SITE_DESCRIPTION)}</description>
    <language>zh-cn</language>
${items}
  </channel>
</rss>
`

// sitemap
const urls = [
  { loc: `${SITE_URL}/`, priority: '1.0' },
  { loc: `${SITE_URL}/news/`, priority: '0.8' },
  ...posts.map(post => ({ loc: `${SITE_URL}/news/${post.slug}/`, priority: '0.6' })),
]
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    u => `  <url>
    <loc>${u.loc}</loc>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`

mkdirSync(DIST_DIR, { recursive: true })
writeFileSync(join(DIST_DIR, 'feed.xml'), feed)
writeFileSync(join(DIST_DIR, 'sitemap.xml'), sitemap)
console.log(`feed.xml: ${posts.length} items, sitemap.xml: ${urls.length} urls`)
