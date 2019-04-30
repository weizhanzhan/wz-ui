<template>
      <div class="blog-aside" > 
        <div class="aside-list" :style="[noHeaderTop]">
                <div class="aside-item">
                <Account/>               
            </div>          
            <div class="aside-item">
                <CssDemo/>
            </div>             
        </div>   
        
    </div>
</template>

<script>
import Account from './account'
import CssDemo from '../../../components/css-demo'
export default {
    props:{
        noHeaderTop:Object 
    },
    components:{
        Account,
        CssDemo
    }
}
</script>

<style>

</style>
