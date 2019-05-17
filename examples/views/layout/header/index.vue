<template>
    <div class="topnav-wrapper">
        <div class="topnav">
            <router-link to="/">
                <!-- <img src="../../../assets/logo.png" alt=""> -->
            </router-link>
            
            <ul class="wz-header-nav">
                <li> <input type="text" placeholder="Search.."></li>
                <li> 
                    <i  class="iconfont icon-zh-CN" v-if="app.lang=='zh-CN'" @click="app.changeLang('en-US')" ></i>
                    <i  class="iconfont icon-en-US" v-else  @click="app.changeLang('zh-CN')"></i>
                </li>
                <li> <i  class="iconfont icon-git-1"></i></li>
                <li > <span @click="app.RouterPush('/blog')">Blog</span></li>
            </ul>
        </div>
    </div>
    
</template>

<script>
    export default {
        inject:['app']
    }
</script>

<style>

</style>