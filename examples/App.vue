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
      watch:{
          '$route'(route){
              this.lang = route.meta.lang?route.meta.lang:'zh-CN'
          }
      },
      methods: {
          changeLang(lang) {
              let { path } = this.$route
              path = path.replace(this.lang,lang)
              this.lang = lang
              this.$router.replace(path)
          }
      },
}
</script>

<style>
body,html{
  padding: 0;
  margin: 0;
  /* height: 100%; */
  /* background: #f4f5f5 */
}
#app {
  color: #2c3e50;
  height: 100%;
}


</style>
