<script setup>

</script>

<template>
  <router-view />
</template>

<style>
body {
  @apply bg-gray-100;
}

#nprogress .bar {
  background-color: #f4f4f4 !important;
  height: 3px !important;
}

::-webkit-scrollbar {
  width: 4px;
  height: 6px;
}

::-webkit-scrollbar-corner {
  display: block;
}

::-webkit-scrollbar-thumb {
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.2);
}

::-webkit-scrollbar-thumb,
::-webkit-scrollbar-track {
  border-right: transparent;
  border-left: transparent;
  background-color: rbga(0, 0, 0, 0.2);
}
</style>
