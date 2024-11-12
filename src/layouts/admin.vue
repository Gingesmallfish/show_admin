<script setup>
import Header from '@/layouts/components/Header.vue'
import Menu from "@/layouts/components/Menu.vue";
import TagList from "@/layouts/components/TagList.vue";
</script>

<template>
  <el-container>
    <el-header>
      <Header />
    </el-header>
    <el-container>
      <el-aside :width="$store.state.asideWidth">
        <Menu />
      </el-aside>
      <el-main>
        <TagList />
        <router-view v-slot="{ Component }">
          <!-- 过渡动画 -->
          <Transition name="fade">
            <KeepAlive :max="10">
              <Component :is="Component"></Component>
            </KeepAlive>
          </Transition>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
.el-aside {
  transition: all 0.2s;
}

.fade-enter-from {
  opacity: 0;
  -webkit-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
}

.fade-enter-to {
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.fade-leave-from {
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
  -webkit-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}

.fade-enter-active {
  transition-delay: 0.3s;
}
</style>
