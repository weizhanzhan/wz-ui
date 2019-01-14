import demoBlock from './demo-block'
import demoTest from './demo-test'

const components = [
    demoBlock,
    demoTest
]
const install = {
    install:function(Vue){
        components.forEach(component =>{
            Vue.component(component.name,component)
        })
        
    }
}

export default install