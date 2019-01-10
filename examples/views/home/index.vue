<template>
    <div class="home">
        <img alt="Vue logo" src="../../assets/logo.png">
        <div class="home-title">
            <div @click="changeActive"> 
                <i class="iconfont icon-go">
                <span :class="[isActive?'test':'','title-value']">Go!</span></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isActive:false
        }
    },
    methods:{
        changeActive(){
            this.$router.push('/components')
            this.isActive=true
            setTimeout(()=>{
                this.isActive=false
            },1500)
            
        }
    }
}
</script>

<style>

</style>
