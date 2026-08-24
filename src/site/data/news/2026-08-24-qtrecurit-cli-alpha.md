# 量潮招聘 CLI（qtrecurit-cli）开始内测

今天，量潮招聘命令行工具 **qtrecurit-cli**（`0.1.0-alpha`）开始内测，已发布至 [crates.io](https://crates.io/crates/qtrecurit-cli) 与 [GitHub Releases](https://github.com/quanttide/qtrecurit/releases)。

## 来源

qtrecurit-cli 是量潮招聘域（qtrecurit）的命令行工具，从两个方向沉淀而来：

- **业务归位**：招聘业务（凭证化人才推荐等）原本混在沟通云 CLI 中，经归位调整后迁入招聘域——招聘业务在招聘域做，沟通云只留发送通道（见 [qtcloud-connect issue #1](https://github.com/quanttide/qtcloud-connect/issues/1)）
- **规范对齐**：项目命名、版本、CI（发布校验 + 三平台构建 + crates.io 发布）完全对齐 `qtcloud-devops-cli` 的工程惯例；招聘沟通话术严格照业务实体手册 `qtrecurit/connect/content.md`，不自行发明

## 功能

一个命令对应一个招聘业务动作（草稿确认制：默认只生成草稿，确认后才发送）：

| 命令 | 做什么 |
|------|--------|
| `qtrecurit report` | 从招聘邮箱拉取投递，生成岗位分布、投递趋势、招聘漏斗统计报告 |
| `qtrecurit refer` | 人才推荐：把量潮验证过的候选人以推荐信形式推荐给企业 |
| `qtrecurit access survey` | 准入问卷发放（投递后进入筛选前置） |
| `qtrecurit access invite` | 实训基地邀请（初筛通过后，可附群二维码） |
| `qtrecurit access exam` | 笔试邀请（以实际成果为核心的量潮式考核） |
| `qtrecurit access interview` | 面试通知（飞书线上面试） |

## 使用方法

```bash
cargo install qtrecurit-cli

# 生成招聘统计报告（最近 30 天）
qtrecurit report --days 30

# 人才推荐（推荐信草稿 → 确认发送）
qtrecurit refer --name 候选人 --candidate-email a@example.com --company 某企业 --confirm-send

# 招聘考核流程沟通（问卷 / 实训 / 笔试 / 面试）
qtrecurit access survey    --to a@example.com --name 候选人 --link https://问卷链接
qtrecurit access invite    --to a@example.com --name 候选人 --qr 群二维码.png
qtrecurit access exam      --to a@example.com
qtrecurit access interview --to a@example.com --name 候选人 --position 数据工程师 --time "6月20日 10:00"
```

前置依赖：安装 [lark-cli](https://github.com/quanttide/lark-cli) 并完成登录（招聘邮箱发送/收取）。

## 下一步

- **数据入库**：招聘记录（推荐、评估）经 Provider 写入数据库，CLI 不再本地落文件
- **考核流程完整化**：笔试、评级、评估记录闭环，候选人可凭凭证查询自己的考评档案
- **正式版本**：内测反馈收敛后发布 beta / 稳定版

欢迎内测反馈，邮件至 hr@quanttide.com。
