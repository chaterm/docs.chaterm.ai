---
date: 2025-12-19
title: "改善 DEVOPS/SRE 工作流程的 10 大 MCP 服务器"
author: Dsd2077
category: Technical
tags:
  - MCP
  - DevOps
  - SRE
  - AI
  - Chaterm
  - Infrastructure
  - CI/CD
  - Kubernetes
  - Cloud
  - Automation
---

本文精选了 10 款具有代表性的 MCP 服务器，横跨基础设施即代码（IaC）与云资源管理、容器化与编排平台运维、软件开发与 CI/CD 流程、系统可观测性与故障管理，以及数据层的访问与操作等核心场景。

将原本依赖复杂命令行或图形界面的操作能力以结构化接口的形式暴露给 AI，使工程师能够通过自然语言理解和执行任务，从而构建更高层次的智能化工作流，实现以 Terminal 为核心的统一工作体验。

---

### 引言

DevOps 工程师的日常工作，往往横跨从代码编写到系统运维的整个软件生命周期。无论是开发阶段的编码与构建，还是后续的发布、部署与运行维护，都需要在不同系统和工具之间不断切换。

在实践中，这种割裂感尤为明显：持续集成与交付通常依赖 GitHub、Jenkins 等工具；基础设施与资源管理需要在 AWS、阿里云等云平台上完成；服务部署与编排则交由 Docker、Kubernetes 处理；而进入运维阶段，又需要借助 Grafana、Sentry 等系统进行监控与问题追踪。工具本身并不复杂，但频繁的上下文切换却持续消耗着工程师的时间与注意力。

在这一整套流程背后，Terminal 仍然是 DevOps 工程师最核心、也是最常被使用的工作入口。如何围绕 Terminal，进一步简化工作流、减少工具切换成本，成为提升 DevOps 效率的一个关键问题。

MCP（Model Context Protocol）的出现，为这一问题提供了一种新的思路。通过 MCP Server，AI 可以接入不同的平台和工具，将原本分散在各个系统中的操作能力统一到一个上下文中。借助 AI 的理解与执行能力，工程师有机会直接在 Terminal 中完成构建、部署、运维等一系列操作，实现以 Terminal 为核心的统一工作体验。

在这一方向上，Chaterm 作为一款开源的 AI Terminal 工具，已经率先支持 MCP 协议，为“AI + Terminal”的 DevOps 工作模式提供了一个可落地的实践案例。

### 什么是 MCP 服务器？

![](../pic/mcp1001.png)

**MCP** 是一种开源协议标准，旨在为 AI 应用程序提供与外部系统连接的统一方式。通过 MCP，诸如 Claude 或 ChatGPT 等 AI 应用能够安全、标准化地接入各类数据源（如本地文件、数据库）、工具（如搜索引擎、计算器）及工作流程（如定制化提示链），从而扩展其信息获取与任务执行能力。

可以将其类比为 **AI 领域的“USB-C 端口”**：正如 USB-C 为电子设备提供了通用的物理连接标准，MCP 为 AI 应用与外部服务之间的交互定义了通用的通信协议与数据交换规范。这一定位使其成为构建模块化、可扩展 AI 智能体的关键基础设施。

> 以上是 MCP 的核心定义。关于协议技术细节，建议查阅其[官方文档](https://modelcontextprotocol.io/docs/getting-started/intro)以获取更深入的理解。

### 如何选择最佳的 MCP 服务器

在诸如 “[Awesome MCP Servers](https://github.com/punkpeye/awesome-mcp-servers)” 等社区仓库中，存在数以千计的 MCP 服务器实现。为了从众多选项中筛选出最适合自身需求的服务器，建议依据以下核心标准进行评估：

- **场景契合度**：评估该服务器是否围绕您日常使用或计划集成的服务构建。其提供的工具能否自动化处理您工作中最常见或最耗时的任务？MCP 服务器的核心价值在于其对特定业务流程的自动化能力。
- **核心工具**：仔细审查服务器所提供的工具列表。不同的实现侧重点不同，需确保其工具覆盖了您的关键需求。
- **实现情况**：优先选择由服务提供商官方发布和维护的 MCP 服务器，这通常意味着更好的稳定性、安全性和持续更新。若无官方版本，则应考察社区实现的流行度（如 GitHub Star 数量）、活跃度及文档完整性。
- **通信协议**：MCP 支持两种主要[通信方式](https://modelcontextprotocol.io/docs/learn/architecture#transport-layer)： - **Stdio Transport**：适用于本地部署的服务器，进程间通信，延迟低。 - **HTTP Transport**：适用于远程服务器，配置通常更简单，无需复杂本地环境，且不消耗本地计算资源。  
  根据您的部署环境（本地或云端）和网络条件进行选择。通常情况下，如果存在 http 实现方式，首选 http 方式

### 改善 devops/SRE 工作流程的 10 大 MCP 服务器推荐

为了提升 DevOps / SRE 工程师在实际工作中的效率与专注度，本文选取了 10 款具有代表性的 MCP 服务器作为分析对象。这些工具在稳定性、功能成熟度以及实际应用场景中均具备一定的验证基础。

从能力覆盖上看，它们横跨了 DevOps / SRE 工作流中的多个关键环节，包括基础设施即代码（IaC）与云资源管理、容器化与编排平台运维、软件开发与 CI/CD 流程、系统可观测性与故障管理，以及数据层的访问与操作，基本覆盖了日常工作的核心场景。

在技术路径上，这些 MCP 服务器尝试将原本依赖复杂命令行或图形界面的操作能力，以结构化接口的形式暴露给 AI，使其能够通过自然语言理解和执行任务，从而构建更高层次的智能化工作流。

接下来的内容中，将逐一介绍这十款 MCP 服务器的核心功能、适用场景以及各自的优势与边界。

需要说明的是，上述 MCP 服务器均可在开源 AI Terminal 工具 Chaterm 中进行导入和使用，文末附带相应的配置示例，方便读者进行实际体验。

#### 基础设施与云服务

**1、AWS 平台 MCP 服务器**

![](../pic/mcp1002.png)

AWS 官方提供了**一整套**专门的 MCP 服务器，让 AI 助手可以直接访问**AWS 文档**、**最佳实践**和**云资源**。通过这些服务器，AI 应用能够执行常见的云基础设施管理任务，例如使用 AWS CLI 或 Cloud Control API 操作资源、管理 EC2 实例、ECS/EKS 容器集群，或查询 IAM、RDS、S3 等服务。AWS 官网上指出，MCP 服务器显著提升了模型输出质量和准确性，因为模型能在上下文中获得最新的文档和服务信息。此外，AWS MCP 服务器还将常见的基础设施即代码（如 CDK、Terraform）流程封装为 AI 可调用的工具，提高了自动化程度。

- **功能与适用场景：** AWS MCP 服务器包括文档查询服务、基础设施管理服务和安全扫描服务等，可让 AI 按照自然语言执行 AWS 资源创建、配置和审计等操作。例如，可以查询最新的 AWS API 参考、生成 Cloud Formation 模板或监控 EKS 集群状态。
- **优势：** 提供与 AWS 官方文档的实时对齐，避免模型凭过时信息作答；统一接口支持多种 AWS 服务（EC2、S3、Lambda、RDS、等），显著减少了集成复杂度；内置最佳实践和安全检查，提高了代码质量和合规性。
- **通信协议：**不同 MCP server 有不同的连接方式
- **社区/商业支持：** 由 AWS 官方实现（开源）
- **官方文档/项目地址**：[https://awslabs.github.io/mcp/installation](https://awslabs.github.io/mcp/installation) [https://github.com/awslabs/mcp](https://github.com/awslabs/mcp)

除了 AWS，其他云服务产商也提供了相应的 MCP 服务。

- Azure ： [https://github.com/microsoft/azure-devops-mcp](https://github.com/microsoft/azure-devops-mcp)
- aliyun： [https://github.com/aliyun/alibaba-cloud-ops-mcp-server](https://github.com/aliyun/alibaba-cloud-ops-mcp-server)
- cloudflare： [https://github.com/cloudflare/mcp-server-cloudflare](https://github.com/cloudflare/mcp-server-cloudflare)

**2、HashiCorp Terraform MCP 服务器**

![](../pic/mcp1003.png)

HashiCorp 官方发布的 Terraform MCP 服务器，为 Terraform 配置管理引入了 MCP 支持。该服务器让 AI 模型实时访问 Terraform Registry 中提供商的文档、模块和策略，从而生成准确的 Terraform 配置，而不是依赖过时的训练数据。HashiCorp 文档指出，Terraform MCP 服务器集成了公共 Registry 的 API，支持**查找模块输入输出**、**引用 Sentinel 策略**，并且可以**管理 Terraform 云（HCP/TFE）组织和工作区**。

- **功能与适用场景：** AI 可以通过 MCP 服务器查询最新的 Terraform 提供商文档、示例代码和策略规则；也可以自动创建、更新或删除 Terraform 云环境中的工作区、变量和标记。这对编写和审查基础设施代码尤为有用，AI 助手可以生成符合最佳实践的配置片段或执行计划分析。
- **优势：** 消除了 Terraform 版本更新带来的知识盲区，使生成的 IaC 内容始终与最新 Registry 同步。支持对私有 Registry 和团队环境（HCP/TFE）的访问，适用于各种规模的团队。
- **通信协议：** http + stdio
- **社区/商业支持：** 由 HashiCorp 官方维护（开源）
- **官方文档/项目地址**：[https://developer.hashicorp.com/terraform/mcp-server/deploy](https://developer.hashicorp.com/terraform/mcp-server/deploy) [https://github.com/hashicorp/terraform-mcp-server](https://github.com/hashicorp/terraform-mcp-server)

**3、Pulumi 平台 MCP 服务器**

![](../pic/mcp1004.png)

Pulumi 推出了 MCP 服务器，使得 AI 助手能够访问 Pulumi 云（Pulumi Cloud）中的资源并委派任务给 Pulumi Neo 自动执行。Pulumi 文档说明，该 MCP 服务器允许 AI**查询 Pulumi 组织中的 Stack 及其资源**，**跨组织搜索云资源**，并**使用 Pulumi Registry 中的信息生成和管理基础设施代码**。

- **功能与适用场景：** 通过 MCP 接口，AI 可**检索 Pulumi Stack 状态、资源列表、策略合规报告**等；还能管理组织成员、修改基础设施配置并触发自动化部署（Pulumi Neo）。这使得基础设施开发更加对话化和可追溯。例如，可以问“列出我组织中所有 AWS EC2 实例”或“帮我根据需求生成 GCP 虚拟机配置”。
- **优势：** 支持多语言 IaC（TypeScript、Python 等），AI 可以直接生成跨云的 Pulumi 代码。集成了 Pulumi 的最佳实践和策略检查，提升了代码质量并避免手动部署失误。
- **通信协议**：http
- **社区/商业支持：** 由 Pulumi 官方实现并维护（未开源）
- **官方文档/项目地址**：[https://www.pulumi.com/docs/iac/guides/ai-integration/mcp-server/](https://www.pulumi.com/docs/iac/guides/ai-integration/mcp-server/)

**4、Kubernetes MCP 服务器**

![](../pic/mcp1005.png)

Kubernetes MCP 服务器由社区开发实现，允许用户使用自然语言命令管理和监控 Kubernetes 环境，支持执行 `kubectl` 的核心操作，如创建/删除 Pod、服务和 Deployment，诊断集群健康等。它还内置了安全连接和 RBAC 验证机制，确保 AI 访问符合 K8s 权限策略。

- **功能与适用场景：** AI 可以查询资源状态（如 pod 列表、节点指标），部署新服务或扩展现有部署，甚至执行复杂的故障排查。示例场景包括“检查命名空间内有哪些异常 Pod”“帮我滚动重启某个 Deployment”之类。
- **优势：** 将繁琐的 Kubernetes 命令行操作转化为直观的对话，降低了管理复杂集群的门槛。可实时监控集群健康，及时发现问题。
- **通信协议**：stdio
- **社区/商业支持：** 由社区开发（开源），
- **官方文档/项目地址：**[**https://github.com/Flux159/mcp-server-kubernetes**](https://github.com/Flux159/mcp-server-kubernetes)

**5、Docker MCP 服务器**

Docker Hub MCP 服务器将 Docker Hub 的海量镜像目录通过 MCP 协议暴露给 LLM，帮助开发者以自然语言方式发现、评估和管理容器镜像。它基于 Docker 生态，专为智能化容器管理场景而设计。

- **功能与适用场景**：提供一键安装和配置，LLM 可通过自然语言查询所需镜像（无需记住复杂标签或仓库名）并获取镜像详情，还能通过智能助手执行仓库管理任务，如列出个人命名空间下的仓库、查看镜像统计、搜索镜像内容，以及通过自然语言创建或更新仓库等。非常适合需要在 AI 辅助的开发流程中快速找到和管理容器镜像的场景。
- **优势**：官方推出的服务集成在 Docker 工具链中，解决了 MCP 服务器环境依赖难题，通过容器化实现了一键部署，无需用户手动配置环境。通过 MCP Catalog 简化设置流程，降低了集成成本。
- **兼容性**：http+stdio
- **社区/商业支持**：由 Docker 官方实现并维护（开源）。
- **官方文档/项目地址**： [https://github.com/docker/hub-mcp/tree/main](https://github.com/docker/hub-mcp/tree/main)

#### 代码与 CI/CD

**6、GitHub 平台 MCP 服务器**

![](../pic/mcp1006.jpg)

GitHub 官方推出了 MCP 服务器，将 AI 应用直接接入 GitHub 平台，使 AI 能**读取仓库文件**、**管理 Issue**与**Pull Request**、**分析代码质量**、**自动化工作流**等。该服务器可托管于 GitHub 端（远程 MCP）或本地运行，支持 VS Code（Copilot Agent）、Claude Desktop、Cursor 等客户端一键接入。GitHub 文档指出，通过 MCP，AI 助手可以浏览仓库结构、搜索历史提交、执行代码审查、监控 GitHub Actions 流水线并获得 CI/CD 反馈。

- **功能与适用场景：** 通过 MCP 服务器，AI 助手可以执行常见的版本控制和协作任务，例如创建/更新 Issue、合并分支、发布版本、审查代码安全警告等。例如，AI 可在 VS Code 中提问“项目当前哪些 PR 待合并？”，MCP 服务器返回 PR 列表并自动触发合并操作。
- **优势：** 减少了在 IDE 与 GitHub 界面间的上下文切换，让开发者可通过自然语言获取最新的仓库状态和历史信息。GitHub MCP 服务器实时同步官方平台数据，保证了信息的时效性和准确性。
- **通信协议：** http+stdio
- **社区/商业支持：** 由 GitHub 官方开发和维护（开源）
- **官方文档/项目地址**：[https://github.com/github/github-mcp-server](https://github.com/github/github-mcp-server)

Gitlab 同样提供了响应的 MCP 服务，不再赘述。

- GitLab ： [https://docs.gitlab.com/user/gitlab_duo/model_context_protocol/mcp_server/](https://docs.gitlab.com/user/gitlab_duo/model_context_protocol/mcp_server/)

**7、Jenkins 平台 MCP 服务器**

![](../pic/mcp1007.png)

Jenkins 社区推出了 MCP Server 插件，使 Jenkins 本身具备 MCP 服务器能力。安装该插件后，Jenkins 会自动将其作业、构建、日志等功能作为 MCP 工具暴露给 AI 助手。Jenkins 插件页面说明：“MCP Server 插件实现了 MCP 协议的服务端，使 Jenkins 能作为 MCP 服务器，为 AI 客户端提供上下文、工具和功能”。这意味着 AI 可以通过自然语言查询构建状态、触发构建任务或获取测试结果等，所有操作都由 Jenkins 执行并反馈。

- **功能与适用场景：** 插件将 Jenkins 的核心功能（如 Job 触发、构建查看、日志检索）以 MCP 工具形式提供给 AI。AI 助手可以提问“最新构建失败原因是什么？”或“启动夜间流水线”，Jenkins 会执行对应操作并返回结果。
- **优势：** 无需额外部署独立服务器，只要在现有 Jenkins 实例上安装插件即可。充分利用已有的 Jenkins 流水线配置和凭据管理，实现与 AI 的无缝集成。
- **兼容性：** 插件适用于 Jenkins 2.479+版本。
- **通信协议：** http + stdio
- **社区/商业支持：** 由 Jenkins 官方开发和维护（开源）
- **官方文档/项目地址**：[https://plugins.jenkins.io/mcp-server/](https://plugins.jenkins.io/mcp-server/)

#### 可观测性（Observability）

8、Grafana MCP 服务器

![](../pic/mcp1008.png)
Grafana MCP 服务器是 Grafana 官方推出的 MCP 服务，允许 LLM 通过 MCP 协议访问 Grafana 仪表板及其生态系统。它使 AI 能够以自然语言方式查询和管理 Grafana 中的可视化资源。

- **功能与适用场景**：支持对 Grafana 仪表板和数据源进行搜索、检索和修改。例如，可搜索和获取仪表板摘要或详细信息，创建/更新仪表板，列出和获取数据源（支持 Prometheus、Loki 等），执行 Prometheus/Loki 查询获取指标和日志，管理 Grafana 报警规则、事件和 Sift 日志调查等。适用于需要将监控数据和可视化资源引入智能运维或自动化分析流程的场景。
- **优势**：由 Grafana 官方维护，功能覆盖广泛，包括仪表板管理、查询和数据源操作等多数常用场景，提供 Apache-2.0 开源许可。官方实现具有稳定性和持续更新的保证，可充分利用 Grafana 平台已有功能。
- **兼容性**：Grafana 9.0 及以上版本以支持全部功能；在 9.0 之前的版本部分数据源相关操作可能不可用。兼容所有配置了管理 API 的 Grafana 实例。
- **通信协议：** http + stdio
- **社区/商业支持**：由 Grafana 官网实现（开源）
- **官方文档/项目地址**：[https://github.com/grafana/mcp-grafana](https://github.com/grafana/mcp-grafana)

9、**Sentry MCP 服务器**

![](../pic/mcp1009.png)
Sentry 的 MCP 服务器通过模型上下文协议（MCP）为接入系统提供 Sentry 的完整问题和错误上下文。它允许 AI 助手和开发工具安全地访问 Sentry 数据，适用于将 Sentry 的错误监控和调试信息集成到智能工作流中的场景。

- **功能与适用场景**：支持通过自然语言查询 Sentry 事件，如访问 Sentry 中的错误和问题、搜索特定文件中的错误、查询项目和组织信息、列出/创建项目的 DSN，以及执行自动修复（autofix）并获取状态等。适用于需要将 Sentry 错误日志和崩溃报告上下文引入 AI 辅助开发或自动化运维流程的场景。
- **优势**：官方托管的远程服务，无需自行搭建。工具和功能重点面向开发者工作流与调试需求（如编码助手中的错误分析），优化了与代码辅助工具（如 Cursor、Claude Code）配合使用的体验。
- **通信协议：** http + stdio
- **社区/商业支持**：由 Sentry 官方维护（开源）
- **官方文档/项目地址**：[https://github.com/getsentry/sentry-mcp](https://github.com/getsentry/sentry-mcp)

#### 数据库 ( Database)

10、MongoDB MCP 服务器

![](../pic/mcp1010.png)
MongoDB 官方提供的 MCP 服务器（公测版）允许通过 MCP 协议将 MongoDB 数据库（Atlas、Community 或 Enterprise）与 AI 工具连接。它使 AI 能够自然语言方式查询文档数据和执行管理操作。

- **功能与适用场景**：支持数据探索（例如“显示 users 集合的架构”或“查找活跃用户”）、数据库管理（如创建只读用户、列出网络访问规则）以及上下文感知的查询生成（AI 描述所需数据并自动生成 MongoDB 查询及应用代码）等。适用于通过智能助手完成数据库查询、文档分析和数据库运维任务的场景。
- **优势**：官方发布并与 MongoDB 生态集成，支持 Atlas 及本地部署，提供原生支持的 MCP 接口。集成在 Windsurf 等 AI 开发环境中，使开发者无需离开 IDE 即可访问 MongoDB 数据。
- **通信协议**：http+stdio
- **社区/商业支持**：由 MongoDB 官方实现并维护（开源）
- **官方文档/项目地址**：[https://www.mongodb.com/company/blog/announcing-mongodb-mcp-server](https://www.mongodb.com/company/blog/announcing-mongodb-mcp-server) [https://github.com/mongodb-js/mongodb-mcp-server](https://github.com/mongodb-js/mongodb-mcp-server)

同理，可以找到 Mysql、Redis 等其他数据的 MCP 服务器。

### 最佳实践

#### 管理工具数量

在实际使用 MCP 的过程中，工具数量的管理往往容易被忽视却至关重要。大部分时候，我们会为了某个特定任务添加一个 MCP 服务到应用中并使用它，但当这个任务完成后开启新对话时，我们很容易忘记之前添加的 MCP 工具仍然处于开启状态。这就导致在整个新对话任务中，这些工具虽然完全不会被用到，却一直占用着宝贵的上下文空间，造成资源的无谓浪费。

更好的做法是养成良好的习惯：在开启新对话任务之前，主动检查当前启用的 MCP 服务是否真的需要，及时关闭那些与新任务无关的服务。这样不仅能释放上下文空间，还能让模型的注意力更加聚焦在真正相关的工具上，提升整体的响应质量和效率。

此外，一些设计更为精细的应用还提供了对单个工具级别的开关功能，允许用户在不关闭整个 MCP 服务的情况下，选择性地禁用某些不需要的工具，建议适时的使用这个功能，让上下文管理变得更加精准和高效。

#### 渐进式披露

当在一个上下文内启用众多 MCP 服务时，开发者往往会遇到两个棘手的问题：(1) 上下文空间被过度占用 (2) 长对话中的工具遗忘。这些都是“一次性加载所有工具”的 MCP 使用模式下难以避免的瓶颈。虽然目前针对以上问题还没有形成统一的标准化改进方案，但已经出现了几种有前景的技术路径：无论是最近 Claude 推出的 Skills 还是 VS Code Copilot 的 ToolSets，其核心理念都是：**渐进式地披露工具细节**，而非一开始就将所有工具信息全部加载。随着社区的持续探索和标准的逐步完善，我们有理由期待一个更加高效、智能的 MCP 生态系统的到来。

### 常见 MCP 平台

| 平台                    | 收录数量（截至 2025.9） | 主要特点                                                                                                                                                                                | 使用门槛                                   | 推荐指数 / 适合人群                                           |
| ----------------------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | ------------------------------------------------------------- |
| **mcp.so**              | 16436                   | 全球最大 MCP 库；支持关键词搜索；MCP 分类精细；支持中文；提供直接复制的安装命令；支持用户提交自定义 MCP server，且已经有 1000+提交记录；有详细的对 MCP 进行介绍的文档；有评论交流功能； | 中等，需手动部署 MCP，但界面清晰，支持中文 | ⭐⭐⭐⭐⭐ 最推荐；适合需要大量 MCP、分类清晰、中文友好的用户 |
| **MCPHub**              | 26181                   | 支持关键词搜索 MCP；MCP 分类精细；支持用户提交自定义 MCP server；提供直接复制的安装命令；有详细的对 MCP 进行介绍的文档；有评论交流功能；                                                | 较低，约 5000 个 MCP 已经实现在线托管      | ⭐⭐⭐⭐ 适合开发者和想快速体验 MCP 的新手用户                |
| **PulseMCP**            | 5966                    | 动态更新；收录 MCP Servers + Clients；有最新的 MCP 相关新闻推送和详细的测试用例；支持用户提交自定义 MCP server；                                                                        | 中等，界面直观，直接链接 GitHub 仓库       | ⭐⭐⭐⭐ 适合关注 MCP 最新生态动态、想看 Client/趋势报告的人  |
| **Smithery**            | 6374                    | 支持关键词搜索 MCP；MCP 分类较为简单但提供直接复制的安装命令；标注客户端支持情况；对部分客户端提供自动安装命令；对 MCP 进行基本介绍；界面简洁                                           | 低，新手友好，但部分服务不稳定             | ⭐⭐⭐ 适合新手入门、想快速体验 MCP 的用户和开发者            |
| **Awesome MCP Servers** | 1968                    | 精选小而美的 MCP；分类清晰；注重 MCP 质量；对 MCP 进行基本介绍；支持用户提交自定义 MCP server；                                                                                         | 中等，界面简洁，需要一定开发经验           | ⭐⭐⭐ 适合想快速找到“靠谱 MCP”、不想被信息过载的人           |

### 在 Chaterm 中使用上述 MCP 服务器

1. 在 Chaterm 中打开“设置”页面。
2. 找到左侧 工具与 MCP` Tab，点击 添加服务器`，系统会自动打开 mcp_setting.json 文件。
3. 将下列配置添加到文件中，根据实际情况对配置中的相应参数进行调整。
4. 保存后，Chaterm 会自动读取并尝试连接服务器。

```plain
{
  "mcpServers": {
    "github": {
      "url": "https://api.githubcopilot.com/mcp/",
      "headers": {
        "Authorization": "Bearer your-token"
      },
      "disabled": false
    },
    "awslabs.aws-documentation-mcp-server": {
      "command": "uvx ",
      "args": [
        "awslabs.aws-documentation-mcp-server@latest"
      ],
      "env": {
        "FASTMCP_LOG_LEVEL": "ERROR",
        "AWS_DOCUMENTATION_PARTITION": "aws"
      },
      "disabled": false,
    },
    "grafana": {
      "command": "docker",
      "args": [
        "run",
        "--rm",
        "-i",
        "-e",
        "GRAFANA_URL",
        "-e",
        "GRAFANA_SERVICE_ACCOUNT_TOKEN",
        "mcp/grafana",
        "-t",
        "stdio"
      ],
      "env": {
        "GRAFANA_URL": "",
        "GRAFANA_SERVICE_ACCOUNT_TOKEN": "",
        "GRAFANA_USERNAME": "",
        "GRAFANA_PASSWORD": "",
        "GRAFANA_ORG_ID": "1"
      },
      "disabled": false
    },
    "sentry": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote@latest",
        "https://mcp.sentry.dev/mcp"
      ],
      "disabled": false
    }
  },
  "kubernetes": {
      "command": "npx",
      "args": [
        "mcp-server-kubernetes"
      ],
      "disabled": false
    },
  "MongoDB": {
    "command": "npx",
    "args": [
      "-y",
      "mongodb-mcp-server@latest",
      "--readOnly"
    ],
    "env": {
      "MDB_MCP_CONNECTION_STRING": ""
    },
    "disabled": false
  }
}
```

###

##
