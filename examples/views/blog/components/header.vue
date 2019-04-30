<template>
     <div class="blog-topnav-wrapper">
        <header :class="['main-header',scroll?'no-header':'']" >
            <div class="blog-topnav" style="width:100%">
                <router-link  to="/">
                    <img src="../../../assets/logo.png" alt="">
                </router-link>                    
                <ul class="wz-header-nav">
                    <li> <input type="text" placeholder="Search.."></li>              
                    <li> <i  class="iconfont icon-git-1"></i></li>
                </ul>
            </div>
        </header>     
    </div>
</template>

<script>
export default {
    props:{
        scroll:Boolean,
    }
}
</script>

<style>

</style>
