---
name: devops-site-release
description: 发布 qtmedia site 版本，创建 Git 标签并发布 GitHub Release。
---

# qtmedia Site 发布技能

## 概述

本技能用于发布 qtmedia site 版本，包括更新 CHANGELOG、创建 Git 标签和发布 GitHub Release。

## 发布流程

### 1. 更新 CHANGELOG

在 `src/site/CHANGELOG.md` 中添加新版本记录：

```markdown
## [X.Y.Z] - YYYY-MM-DD

### Added

- 新增功能描述

### Changed

- 变更描述

### Removed

- 移除功能描述
```

### 2. 更新 package.json

更新 `src/site/package.json` 中的版本号：

```json
{
  "version": "X.Y.Z"
}
```

### 3. 提交更改

```bash
git add -A
git commit -m "docs(site): update CHANGELOG for vX.Y.Z"
```

### 4. 执行预检查

```bash
qtcloud-devops release --version site/vX.Y.Z --changelog src/site/CHANGELOG.md --dry-run
```

### 5. 发布

```bash
qtcloud-devops release --version site/vX.Y.Z --changelog src/site/CHANGELOG.md -y
```

## 版本号规范

- 遵循 semver（MAJOR.MINOR.PATCH）
- Alpha 版本：`X.Y.Z-alpha.N`
- Beta 版本：`X.Y.Z-beta.N`
- 正式版本：`X.Y.Z`

## 标签格式

```
site/vX.Y.Z
```

示例：
- `site/v0.1.9`
- `site/v0.2.0-alpha.1`

## 常见问题

### Q: CHANGELOG 格式错误

确保 CHANGELOG 使用以下格式：

```markdown
## [X.Y.Z] - YYYY-MM-DD
```

版本号不带 `v` 前缀。

### Q: 标签已存在

使用新版本号，或删除旧标签（谨慎操作）：

```bash
git tag -d site/vX.Y.Z
git push origin --delete site/vX.Y.Z
```

### Q: 发布失败

检查 GitHub CLI 登录状态：

```bash
gh auth status
```

## 相关文件

- `src/site/CHANGELOG.md`：版本变更记录
- `src/site/package.json`：包版本号
- `.github/workflows/deploy-site.yml`：部署工作流

## 输出

### 成功

```
✓ 标签 site/vX.Y.Z 已创建并推送
✓ GitHub Release site/vX.Y.Z 已创建
  https://github.com/quanttide/qtmedia/releases/tag/site/vX.Y.Z
```

### 失败

检查错误信息并根据提示修复。
