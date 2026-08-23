# Changelog

## 2026-08-23

### 新增

- 初始化 src/site：Vite + React 19 + TS 脚手架（参考 qtfounder / qtbusiness）
- 定位：独立新闻网站（脱离新媒体平台绑定，自主内容与独立分发）
- 首页：Hero + 最新新闻 + 订阅（RSS）+ 联系
- 新闻列表 `/news`：时间倒序
- 新闻详情 `/news/:slug`：Markdown 正文段落渲染
- 内容管线：`data/news/*.md` → 构建脚本生成 `feed.xml` + `sitemap.xml`
- 设计文档 `docs/index.md`（新闻站定位与独立性原则）

### 变更

- 移除媒体矩阵展示（`data/platforms.ts`），改为新闻站定位
- 新闻内容目录从 `src/content/news/` 迁至仓库根 `data/news/`：内容资产与源码分离，遵循领域 data/ 惯例（journal / archive / library 同层）
