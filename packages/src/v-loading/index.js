import Loading from './src/loading.vue'

import vLoading from './src/directive'


Loading.install = function(Vue){

    Vue.directive('loading',vLoading)

}

export default Loading