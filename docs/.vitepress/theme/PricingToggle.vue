<template>
  <div class="pricing-toggle-wrapper">
    <div class="pricing-toggle">
      <button 
        :class="['toggle-btn', { active: billingCycle === 'monthly' }]"
        @click="billingCycle = 'monthly'"
      >
        月度
      </button>
      <button 
        :class="['toggle-btn', { active: billingCycle === 'yearly' }]"
        @click="billingCycle = 'yearly'"
      >
        年度
      </button>
    </div>
  </div>
    <div class="pricing-grid">
      <div class="pricing-card" >
        <div class="pricing-title">社区版</div>
        <div class="pricing-price">免费</div>
        <a href="/download/" class="btn-outline">立即使用</a>
        <ul class="pricing-features">
          <li>智能命令补全</li>
          <li>云端数据同步</li>
          <li>有限的插件/扩展支持</li>
          <li>开源模型与基础模型</li>
          <li>有限的Agent请求次数</li>
          <li>个人知识库 1G</li>
          <li>上下文手动插入知识</li>
          <li>社区支持</li>
        </ul>
      </div>

      <div class="pricing-card">
        <div class="pricing-title">Pro版</div>
        <div class="pricing-price" v-if="billingCycle === 'yearly'">298元 /年</div>
        <div class="pricing-price" v-else>58元 /月</div>
        <a class="price-btn btn-primary">立即购买</a>
        <ul class="pricing-features">
          <li>所有社区版功能</li>
          <li>智能语音输入</li>
          <li>全部的插件/扩展支持</li>
          <li>更强的商业化模型</li>
          <li>10倍的Agent请求次数</li>
          <li>个人知识库 50G</li>
          <li>上下文自动引用知识库</li>
          <li>邮件支持</li>
        </ul>
      </div>

      <div class="pricing-card">
        <div class="pricing-title">商业版</div>
        <div class="pricing-price" v-if="billingCycle === 'yearly'">998元/人/年（10人以上）</div>
        <div class="pricing-price" v-else>198元/人/月（10人以上）</div>
        <a class="price-btn btn-primary">立即购买</a>
        <ul class="pricing-features">
          <li>所有Pro版功能</li>
          <li>50倍的Agent请求次数</li>
          <li>团队知识库管理和分享</li>
          <li>企业SSO登录</li>
          <li>零信任支持，可信设备</li>
          <li>企业级用户与资产管理，操作审计</li>
          <li>企业堡垒机支持</li>
          <li>企业支持 SLA</li>
        </ul>
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const billingCycle = ref('yearly')
</script>

<style scoped>
.pricing-toggle-wrapper {
  width: 100%;
}

.pricing-toggle {
  display: flex;
  justify-content: center;
  gap: 0;
  margin: 2rem auto 3rem;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 9999px;
  padding: 4px;
  width: fit-content;
}

.dark .pricing-toggle {
  background: rgba(255, 255, 255, 0.1);
}

.toggle-btn {
  padding: 0.6rem 2rem;
  border: none;
  background: transparent;
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  border-radius: 9999px;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.toggle-btn.active {
  background: linear-gradient(90deg, #91B4FF 0%, #4070FF 100%);
  color: #fff;
  font-weight: 600;
}

.toggle-btn:hover:not(.active) {
  color: var(--vp-c-text-1);
}
</style>
