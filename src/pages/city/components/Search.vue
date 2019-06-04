<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音">
  </div>
</template>
<script>
export default {
  name:"CitySearch"
}
</script>
<style lang="stylus" scoped>
  @import '~styles/base.styl'
  .search
    height .62rem
    padding .1rem
    background $baseColor
    .search-input
      inputStyl()
</style>

