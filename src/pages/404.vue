<template>
  <el-result
      icon="warning"
      title="404提示"
      sub-title="你找的页面走丢! 😀"
  >
    <template #extra>
      <el-button type="primary" @click="$router.push('/')">返回首页</el-button>
    </template>
  </el-result>
</template>
<script setup>
import {createRouter as $router} from "vue-router";
</script>
