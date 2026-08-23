# ROADMAP

量潮媒体中心（qtmedia）——独立新闻网站。

## 目标

实现 `docs/index.md` 的设计：量潮的独立新闻网站——脱离新媒体平台绑定，拥有自主内容与独立分发能力（RSS / SEO / 第一方域名）。

## 当前状态

- 首页：Hero + 最新新闻 + 订阅（RSS）+ 联系
- 新闻列表 `/news`：时间倒序
- 新闻详情 `/news/:slug`：Markdown 正文段落渲染
- 内容管线：`data/news/*.md`（`YYYY-MM-DD-slug.md` 约定）→ 构建脚本生成 `feed.xml` + `sitemap.xml`
- 设计文档：`docs/index.md`

---

## 阶段 1：内容生产

| 任务 | 说明 |
|------|------|
| 内容规范 | 新闻写作规范（标题 / 摘要 / 正文长度 / 引用体例） |
| 发布流程 | 新闻入库 → 提交 → 构建 → 部署（git 即内容管理） |
| 栏目标签 | `data/news/` 增加栏目元数据，首页/列表按栏目筛选 |

## 阶段 2：分发增强

| 任务 | 说明 |
|------|------|
| 订阅完善 | Atom / JSON Feed 补充；订阅页说明 |
| 分享链接 | 每篇新闻生成固定 URL 与分享文案 |
| 邮件订阅 | Newsletter 订阅入口（后端接入） |

## 阶段 3：部署

| 任务 | 说明 |
|------|------|
| 部署工作流 | `deploy-site.yml`：`site/*` tag → Vite build（含 feed/sitemap）→ OSS → CDN（media.quanttide.com），HTTPS 泛域名证书 |
| 基础设施 | OSS 桶 qtmedia-site、CDN 域名、DNS CNAME 已配置；组织级 ALIYUN secrets 供 Actions 使用 |

## 验收与发布

- 每阶段完成后运行 `npm run build` 验证（含 feed/sitemap 生成）
- 全部完成后打 `site/v0.1.0` tag 并更新 `src/site/CHANGELOG.md`

## 风格约束

- 维持克制 / 文字优先 / 留白原则（见 `docs/index.md`）
- 颜色仅黑、白、灰；无动画、无渐变、无卡片阴影
