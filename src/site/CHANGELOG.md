# CHANGELOG

## [Unreleased]

## [0.1.9] - 2026-08-25

### Added

- 新增 qtclass-site-alpha 发布公告

### Changed

- 更新 package.json 版本号至 0.1.9

## [0.1.8] - 2026-08-24

### Changed

- 补充文章表格与代码块样式
- 支持 qtrecurit-cli 公告渲染

## [0.1.7] - 2026-08-24

### Added

- 新增 qtrecurit-cli-alpha 发布公告

## [0.1.6] - 2026-08-24

### Changed

- 优化新闻详情页面样式

## [0.1.5] - 2026-08-24

### Added

- 新增 qtcrowd-init 发布公告

## [0.1.4] - 2026-08-23

### Changed

- 优化新闻列表页面样式

## [0.1.3] - 2026-08-23

### Added

- 新增 qtmedia-init 发布公告

## [0.1.2] - 2026-08-23

### Changed

- 完善 RSS feed 生成

## [0.1.1] - 2026-08-23

### Added

- 添加 feed.xml 和 sitemap.xml 生成脚本

## [0.1.0] - 2026-08-23

### Added

- 初始化 src/site：Vite + React 19 + TS 脚手架
- 首页：Hero + 最新新闻 + 订阅（RSS）+ 联系
- 新闻列表 `/news`：时间倒序
- 新闻详情 `/news/:slug`：Markdown 正文段落渲染
- 内容管线：`data/news/*.md` → 构建脚本生成 `feed.xml` + `sitemap.xml`
