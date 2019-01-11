<template>
    <mark-down-item :md-page="IconMd"></mark-down-item>
</template>

<script>
import MarkDownItem from '../../../common/mark-down-item'
import IconMD from './index.md'
export default {
    computed:{
        IconMd(){return IconMD}
    },
    components:{
        MarkDownItem
    }
}
</script>

<style>

</style>
