<template>
    <div>
        我是测试组件1
        <Button @click="test">11</Button>
    </div>
</template>

<script>
export default {
    name:'demoTest',
    methods:{
        test(){
            console.log('test')
        }
    }
}
</script>

<style>

</style>
