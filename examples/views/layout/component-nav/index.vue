<template>
    <ul class="layout-component-nav-ul">
        <li class="nav-item" v-for="(nav,index) in navLinks" :key="index">
            <a href="javascript:;">{{nav.name}}</a>
            <template v-for="(group,index) in nav.groups" >
                <template v-if="!group.groupName" >            
                    <ul-item  
                        v-for="sub in group.list"  
                        :key="'g'+sub" 
                        ulclass="sub-nav" 
                        :to="sub.path"
                    >{{sub.title}}</ul-item>
                </template>
                <template v-else>
                    <div class="nav-group" :key="'g-name'+index">
                        <div class="nav-group-title">{{group.groupName}}</div>
                        <ul-item 
                            v-for="pure in group.list" 
                            :key="'p'+pure.title" 
                            ulclass="pure-menu-list" 
                            :to="pure.path"
                        >{{pure.title}}</ul-item>   
                    </div>
                </template>       
            </template>           
        </li>
        
    </ul>
</template>

<script>
import UlItem from '../../../common/ul-item.vue'
import DocConfig from '../../../docs/docs.config.js'
export default {
    inject:['app'],
    components:{
        UlItem
    },
    computed:{
        navLinks(){
            return DocConfig[this.app.lang].nav
        }
    }
}
</script>

<style>

</style>
