<template>
  <div id="app">
    <!-- router-view显示的是当前路由地址所对应的内容 -->
      <!-- keep-alive缓存组件 -->
        <!-- exclude 不进行缓存的组件 -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
</style>
