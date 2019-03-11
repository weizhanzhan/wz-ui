class Wz {
    constructor(options){
        this.options = options
    }
    getTypeUrl(type){
        var url = ''
        switch(type){
            case 'Html5':
                url = 'http://111.231.59.56/images/html5.gif'
                break;
            case 'Javascript':
                url = 'http://111.231.59.56/images/javascript.jpg'
                break;
            case 'Vue.js':
                url = 'http://111.231.59.56/images/vue.png'
                break;
            default:
                url = 'http://111.231.59.56/images/vue.png'
        }
        return url
    }
}
export {
    Wz
}