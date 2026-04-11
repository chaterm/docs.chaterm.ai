# MCP 故障排除与最佳实践

本页帮助你诊断常见的 MCP 连接和运行时问题，并提供安全、性能和可维护性方面的建议。有关配置说明，请参阅 [MCP 使用指南](../usage/)。

---

## 故障排除

### 1. 一直是 connecting / 无法连接

- **检查配置**：
  - **stdio**：`command` 是否可执行？是否需要放入 `args`？`cwd` 是否存在？
  - **http**：`url` 是否可访问？是否需要认证 `headers`？是否命中企业代理/证书？
- **查看通知/错误**：界面会显示连接失败原因或 stderr 输出片段。
- **适当增大 `timeout`**（单位秒），避免短超时导致误判失败。

::: tip 正在开发本地服务器？
- 检查构建产物（如 `build/index.js`）是否已生成且可执行。
- 变更构建产物后，等待自动重启；若未生效，尝试**禁用然后启用**。
:::

### 2. 工具（Tools）或资源（Resources）为空

- 服务器已 `connected` 吗？若未连接，请先排查连接问题（见上文）。
- MCP 服务器是否本身就没有暴露工具/资源？参考其仓库文档确认。
- **http 型**：鉴权/headers 是否正确？是否返回 401/403？
- **stdio 型**：stderr 中是否提示依赖缺失/初始化失败？

### 3. 调用超时或不稳定

- 增大 `timeout`。
- 优先选择网络更稳定或距离更近的服务节点。
- 对 http 型，确认代理/网关未中断长连接或流式连接。
- 服务器负载高或冷启动慢时，适当放宽等待时间。

### 4. 权限和安全问题

::: warning
谨慎设置 `env` 与 `headers` —— 尤其是包含凭证的字段 —— 避免泄露。仅将信任的工具添加到 `autoApprove` 白名单。
:::

- 若服务器可访问本地文件或内部网络，应遵循最小权限原则和隔离策略（仅开放需要的目录/接口）。

### 5. 其他排查方法

- **最小复现**：在终端中手动运行 `command`/`args`，确认服务器是否能独立启动。
- **查看服务器仓库的 README/issues**，查询已知问题与解决方案。
- **提交问题时**，请附带：配置片段（隐去敏感数据）、日志/通知内容、系统与网络环境说明。

---

## 最佳实践

### 服务器选择

- 优先选择维护活跃、社区口碑较好的服务器。
- 使用官方目录与精选合集快速筛选：
  - [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers)
  - [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers)
  - 目录站点（见下方[参考资料](#参考资料)）。

### 安全

::: warning
- **最小权限**：仅暴露必要的资源、目录和网络。
- **谨慎使用 `autoApprove`**：仅将确定安全的工具加入白名单。
- **审查 `env`/`headers`**：避免将令牌或密钥硬编码在共享环境中。
:::

### 性能与稳定

- 根据网络与服务性能调整 `timeout`。
- 对 http 型，确保代理与负载均衡对 SSE/流式响应友好。
- 对本地开发服务器，利用构建产物变更触发的自动重启，加快调试迭代。

### 可维护性

- **统一命名与分组**：为相同类型的服务器使用前缀（如 `db-`、`search-`），便于检索与排序。
- **定期备份配置文件**；变更前后做好最小化验证。

---

## 参考资料

### GitHub 仓库

- [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers)
- [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers)

### 在线目录

- [mcpservers.org](https://mcpservers.org/)
- [mcp.so](https://mcp.so/)
- [glama.ai/mcp/servers](https://glama.ai/mcp/servers)

### PulseMCP

- [www.pulsemcp.com](https://www.pulsemcp.com/)

### 教程视频

- **AI-Driven Coder**（构建与使用 MCP 服务器）：
  - [YouTube 视频](https://www.youtube.com/watch?v=b5pqTNiuuJg)

---

## FAQ

**Q：为什么我点开工具没有"立即执行"的按钮？**

A：工具在聊天或自动化工作流中被调用。界面层面的**启用/禁用**开关控制的是可用性，并不直接触发执行。

**Q：我在配置里把 `command` 和 `args` 合并写在一行可以吗？**

A：可以。若未提供 `args` 且 `command` 中存在空格，Chaterm 会自动解析（支持引号与转义）。

**Q：怎么手动重启某个服务器？**

A：若自动重启未触发，可通过**禁用然后启用**该服务器来完成重连。

**Q：`autoApprove` 有什么风险？**

A：开启后，匹配的工具会自动批准执行，无需用户确认。请仅对可信的、可预测的工具启用，以减少误操作或越权访问的风险。

---

## 后续阅读

- 需要配置你的第一个 MCP 服务器？请参阅 [MCP 使用指南](../usage/)。
