# 量潮课堂课程站（qtclass-site）发布 Alpha 版本

今天，量潮课堂课程展示站 **qtclass-site**（`v0.1.2-alpha.1`）发布 Alpha 版本，已部署至 [class.quanttide.com](https://class.quanttide.com)。

## 背景

qtclass-site 是量潮课堂的课程展示和教学资料平台，用于展示课程体系和提供生产实习课程教案。

本次重构将技术栈从 Vue 3 迁移到 React 19 + TypeScript，参考了 qtcrowd 和 qtrecurit 的项目架构，为后续功能扩展奠定基础。

## 主要更新

### 技术栈重构

- **Vue 3 → React 19 + TypeScript**：使用 Vite 构建，支持更好的类型检查和代码提示
- **添加 React Router**：支持客户端路由，实现多页面导航
- **添加 ESLint**：统一代码风格，提高代码质量

### 生产实习课程

从 tutorial 目录导入 8 篇文档作为生产实习课程教案，按业务划分章节：

| 章节 | 课程内容 |
|------|----------|
| 量潮数据 | 经营现状、业务模式 |
| 量潮课堂 | 课程简介、销售指南、经营目标 |
| 量潮云 | 产品简介 |
| 量潮招聘 | 招聘流程、发送准入问卷 |

### 课程路由

```
/                              → 课程体系首页
/courses/production-internship  → 生产实习课程列表
/courses/production-internship/lessons/<slug> → 课程详情
```

## 访问方式

- **线上地址**：[class.quanttide.com](https://class.quanttide.com)
- **源码仓库**：[quanttide/qtclass](https://github.com/quanttide/qtclass/tree/main/src/site)
- **GitHub Release**：[site/v0.1.2-alpha.1](https://github.com/quanttide/qtclass/releases/tag/site/v0.1.2-alpha.1)

## 下一步

- **课程内容完善**：将更多 tutorial 文档导入为课程内容
- **课程搜索功能**：支持按关键词搜索课程
- **学习进度跟踪**：记录用户学习进度
- **移动端适配**：优化移动端体验

## 技术细节

- Markdown 内容通过 Vite 的 `?raw` import 在构建时内联
- 简易 Markdown→HTML 转换器支持标题、粗体、代码块、列表、表格、引用块等
- 响应式设计支持桌面端和移动端

如有问题或建议，请提交至 [GitHub Issues](https://github.com/quanttide/qtclass/issues)。
