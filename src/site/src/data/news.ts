// 新闻数据层：扫描仓库根 data/news/*.md 构建新闻列表
// 文件约定：YYYY-MM-DD-slug.md；首行 # 标题；首个段落为摘要
export interface NewsPost {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  summary: string;
  /** 正文段落（已按空行切分，标题与摘要已剥离），末端不含空段落 */
  paragraphs: string[];
}

const modules = import.meta.glob('../../data/news/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

function parseFile(path: string, raw: string): NewsPost {
  const filename = path.split('/').pop() ?? ''
  const match = filename.match(/^(\d{4}-\d{2}-\d{2})-(.+)\.md$/)
  const date = match?.[1] ?? ''
  const slug = match?.[2] ?? filename.replace(/\.md$/, '')

  const lines = raw.replace(/\r\n/g, '\n').split('\n')
  const titleLine = lines.findIndex(line => line.startsWith('# '))
  const title = titleLine >= 0 ? lines[titleLine].slice(2).trim() : ''

  // 正文 = 标题行之后的内容；段落按空行切分
  const bodyLines = titleLine >= 0 ? lines.slice(titleLine + 1) : lines
  const paragraphs = bodyLines
    .join('\n')
    .split(/\n\s*\n/)
    .map(p => p.trim())
    .filter(Boolean)

  const summary = paragraphs[0] ?? ''
  return { slug, title, date, summary, paragraphs }
}

export const news: NewsPost[] = Object.entries(modules)
  .map(([path, raw]) => parseFile(path, raw))
  .sort((a, b) => b.date.localeCompare(a.date))

export function getNews(slug: string): NewsPost | undefined {
  return news.find(post => post.slug === slug)
}
