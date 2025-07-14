<template>
  <div class="projects_page">
    <div class="header">项目列表</div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="less" scoped>
.projects_page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.header {
  text-align: center;
  padding: 16px;
  font-size: 24px;
  color: #fff;
  background-color: #333;
}

.main {
  padding: 16px;
  flex: 1;
}
</style>
