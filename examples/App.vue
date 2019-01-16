<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  provide() {
          return {
              app: this
          }
      },
      data() {
          return {
              lang: 'zh-CN'
          }
      },
      methods: {
          changeLang(lang) {
              this.lang = lang
          }
      },
}
</script>

<style>
body,html{
  padding: 0;
  margin: 0;
  height: 100%;
  /* background: #f4f5f5 */
}
#app {
  color: #2c3e50;
  height: 100%;
}
</style>
