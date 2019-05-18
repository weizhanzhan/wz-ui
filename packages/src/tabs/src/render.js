export default {
    functional:true,
    porps:{
        render:Object
    },
    render: (h, ctx) => {
        console.log(ctx.props.render)
        return h('div',{},ctx.props.render)
    }
}