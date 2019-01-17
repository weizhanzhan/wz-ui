<template>
    <div>
        <div v-for="n in 10" :key="n" @click="test(n)">{{n}}Button</div>
        <wz-button type="success" ripple>test</wz-button>
    </div>
</template>

<script>
export default {
    inject: ['app'],
    methods:{
        test(n){
            console.log(n,this.app)
            this.app.changeLang(n)
        }
    }
}
</script>

<style>

</style>
