<template>
    <div v-show="visible">
       <slot></slot>
    </div>
</template>

<script>
export default {
    props:['label','name'],
    name:'wzTabPane',
    computed:{
        visible(){
            return this.$parent.active == this.name
        }
    },
 
}
</script>

<style>

</style>
