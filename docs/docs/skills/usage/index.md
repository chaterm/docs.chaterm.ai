# Skills 使用指南

Skills 将你的工作流、最佳实践和领域知识转化为可复用的指令集，AI 会自动遵循这些指令执行任务。

![](../../image/skills.png)

---

## 为什么需要 Skills？

没有 Skills 时，Chaterm 的 AI 依赖其通用知识。有了 Skills，你可以将它从一个通用助手转变为按照**你**的方式工作的领域专家。

想象你是一名 Kubernetes SRE。每当某个 Pod 异常时，你通常需要：

1. 检查 Pod 状态和事件。
2. 查看日志。
3. 分析资源使用情况。
4. 执行修复操作。

与其手动运行这些命令或依赖 AI 的通用建议，不如创建一个 **Kubernetes Pod 故障排查 Skill**。AI 会端到端地遵循你的精确流程 —— 就像你亲自教过它一样。

---

## 快速开始

### 在哪里找到 Skills

- **Terminal Skills 官方仓库**：[chaterm/terminal-skills](https://github.com/chaterm/terminal-skills) —— 专为终端工作流设计的精选 Skills 集合。
- **社区贡献**：在 GitHub 上搜索 `terminal-skills`，发现更多社区维护的 Skills。

### 创建 Skill

1. 在 Chaterm 中打开**设置**。
2. 进入 **Skills** 标签页，点击**创建技能**（或**导入**）。
3. 填写以下字段：
   - **名称** —— Skill 的显示名称。
   - **描述** —— 何时使用此 Skill 以及它的功能。
   - **内容** —— 详细的工作流和指令（Markdown 格式）。
   - **资源文件**（可选）—— 关联的脚本、模板、配置文件等。
4. 点击**保存**。Skill 会立即启用并注入到 AI 上下文中。

::: tip
编写具体的描述并包含相关关键词。AI 使用描述来决定何时应用 Skill，因此描述的清晰度直接影响匹配准确度。
:::

---

## Skill 格式示例

### Kubernetes Pod 故障排查

```markdown
# Kubernetes Pod 故障排查

## 描述
当用户遇到 Pod 异常时，自动执行完整的排查流程。

## 操作步骤
1. 检查 Pod 状态和事件
   - 执行 `kubectl get pod <pod-name> -n <namespace> -o yaml`
   - 查看 `kubectl describe pod <pod-name> -n <namespace>` 输出的事件信息

2. 查看最近 100 行日志
   - 执行 `kubectl logs <pod-name> -n <namespace> --tail=100`

3. 分析资源使用情况
   - 检查 CPU 和内存使用：`kubectl top pod <pod-name> -n <namespace>`
   - 查看资源限制配置：`kubectl get pod <pod-name> -n <namespace> -o jsonpath='{.spec.containers[*].resources}'`

4. 提供修复建议
   - 根据检查结果，提供针对性的修复建议
   - 如果资源不足，建议调整资源限制
   - 如果配置错误，提供正确的配置示例
```

### Git 分支清理

```markdown
# Git 分支清理

## 描述
清理已合并的本地和远程分支，保持仓库整洁。

## 操作步骤
1. 获取最新的远程状态
   - 执行 `git fetch --prune`

2. 列出已合并的分支
   - 执行 `git branch --merged main | grep -v 'main'`

3. 删除前与用户确认
   - 显示分支列表并请求确认。

4. 删除确认的分支
   - 本地：`git branch -d <branch>`
   - 远程：`git push origin --delete <branch>`
```

### Docker 日志分析

```markdown
# Docker 日志分析

## 描述
分析 Docker 容器日志，识别错误、告警和性能问题。

## 操作步骤
1. 检查容器状态
   - 执行 `docker ps -a --filter name=<container>`

2. 获取最近的日志
   - 执行 `docker logs --tail=200 --timestamps <container>`

3. 搜索错误和告警
   - 过滤 ERROR、WARN、FATAL、OOM 等模式。

4. 汇总发现并提出修复建议
```

---

## 在对话中使用 Skills

Skill 启用后，只需用自然语言描述你的任务。AI 会识别场景并自动应用匹配的 Skill。

**示例对话：**

```text
你：这个 Pod 有问题，帮我排查一下

AI：[自动使用 Kubernetes Pod 故障排查 Skill]
    - 正在检查 Pod 状态...
    - 正在查看日志...
    - 正在分析资源使用情况...
    - 正在提供修复建议...
```

### 多个 Skills 协同工作

你可以同时启用多个 Skills。AI 会根据对话上下文选择并组合使用：

- 当多个 Skills 匹配时，AI 可以将它们串联起来。
- Skills 之间可以相互补充，形成端到端的解决方案。

### 启用或禁用 Skill

在 **Skills** 管理页面，你可以：

- **启用**：开启后将 Skill 注入到 AI 上下文中。
- **禁用**：关闭后从上下文中移除。
- **编辑**：随时更新内容和配置。
- **删除**：移除不再需要的 Skill。

---

## 核心能力

| 能力 | 说明 |
| --- | --- |
| **可复用指令集** | 创建一次，即可在多个场景中反复使用，无需重复编写。 |
| **自动注入上下文** | 启用的 Skills 会自动添加到 AI 系统提示中 —— 无需手动调用。 |
| **支持资源文件** | 可附加脚本、模板和配置文件，让 Skill 不仅仅是纯文本。 |
| **团队共享** | 在团队内共享 Skills，统一工作流和最佳实践。 |

### 高级特性

**条件判断** —— Skill 可以包含分支逻辑：

```markdown
## 操作步骤
1. 检查服务状态
2. 如果状态为 failed：
   - 查看错误日志
   - 尝试重启服务
3. 如果状态为 active：
   - 验证服务功能正常
```

**资源文件引用** —— 附加外部文件：

```markdown
## 资源文件
- scripts/deploy.sh
- templates/config.yaml
```

---

## 实际应用场景

### 企业标准化

- **部署 Skill**：标准化的应用部署流程。
- **回滚 Skill**：统一的生产事故回滚流程。
- **安全检查 Skill**：标准的安全审计工作流。

Skills 降低了入职成本 —— 新团队成员只需描述目标，AI 就会使用现有 Skills 处理工作流。资深工程师的经验被转化为可执行、可共享的知识。

### 个人效率提升

- **自动化重复任务**：将常用的多步骤工作流转化为一键式 Skill。
- **扩展 AI 能力**：注入 AI 默认不具备的领域专业知识。
- **更快响应**：让 AI 执行复杂流程，无需手动逐步指导。

---

## 导入和导出

### 导入 Skill

你可以从以下来源导入 Skill：

1. **本地文件**
   - Markdown 格式的 `SKILL.md` 文件。
   - 包含资源文件的 ZIP Skill 包。

2. **Terminal Skills 仓库**
   - 访问 [chaterm/terminal-skills](https://github.com/chaterm/terminal-skills)。
   - 选择需要的 Skill，将其文件夹复制到 Chaterm `skills` 目录。

---

## 后续阅读

- 遇到问题或想了解编写技巧，请参阅 [Skills 故障排除与最佳实践](../troubleshooting/)。
- 了解设置页面功能，请参考 [Skills 设置](/docs/settings/skills/)。
