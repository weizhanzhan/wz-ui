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
          },
          RouterPush(path){
              this.$router.push(path)
          },
      },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900');

body,html{
  padding: 0;
  margin: 0;
  /* height: 100%; */
  /* background: #f4f5f5 */
  font-family: 'Poppins', sans-serif;
}
#app {
  color: #2c3e50;
  height: 100%;
}


</style>
