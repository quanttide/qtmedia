# 量潮媒体中心（qtmedia）

## 定位

量潮的**独立新闻网站**——脱离新媒体平台绑定，拥有自主内容与独立分发能力（RSS / SEO / 第一方域名）。

## 内容目录

新闻以 Markdown 存放于 `data/news/`，文件命名约定：`YYYY-MM-DD-slug.md`，格式：

```markdown
# 标题

正文……（首个段落作为列表页摘要）
```

新增新闻：创建文件 → 提交 → 构建 → 部署（git 即内容管理）。

## 技术栈

- React 19 + TypeScript
- Vite 6

## 开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build      # tsc + vite build + 生成 feed.xml / sitemap.xml
npm run preview
```

构建产物 `dist/` 包含静态站点与 `feed.xml`、`sitemap.xml`。
