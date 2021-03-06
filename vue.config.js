const md = require('markdown-it')()
//const slugify = require('transliteration').slugify;
const striptags = require('./strip-tags');
function convert(str) {
  str = str.replace(/(&#x)(\w{4});/gi, function($0) {
    return String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16));
  });
  return str;
}

module.exports = {
  //解决打包后空白
  publicPath: '/',
  lintOnSave:false,//关闭eslint检测
   // 修改 src 为 examples
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
 
  // 强制内联CSS
  //css: { extract: false },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {

    config.module
      .rule('js')
      .include
        .add('/packages')
        .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      }),
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use("vue-markdown-loader")
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true,
        use: [
          // anchor 是用来放到每一个标题前的导航作用 我不需要 
          // [
          //   require('markdown-it-anchor'), {
          //   level: 2,
          //   slugify: slugify,
          //   permalink: true,
          //   permalinkBefore: true
          // }
        //],
          [require('markdown-it-container'), 'demo', {
            validate: function(params) {
              return params.trim().match(/^demo\s*(.*)$/);
            },

            render: function(tokens, idx) {
              var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
              if (tokens[idx].nesting === 1) {
                var description = (m && m.length > 1) ? m[1] : '';
                var content = tokens[idx + 1].content;
                var html = convert(striptags.strip(content, ['script', 'style'])).replace(/(<[^>]*)=""(?=.*>)/g, '$1');
                var script = striptags.fetch(content, 'script');
                var style = striptags.fetch(content, 'style');
                var jsfiddle = { html: html, script: script, style: style };
                var descriptionHTML = description
                  ? md.render(description)
                  : '';

                jsfiddle = md.utils.escapeHtml(JSON.stringify(jsfiddle));

                return `<demo-block class="demo-box" :jsfiddle="${jsfiddle}">
                          <div class="source" slot="source">${html}</div>
                          ${descriptionHTML}
                          <div class="highlight" slot="highlight">`;
              }
              return '</div></demo-block>\n';
            }
          }],
          [require('markdown-it-container'), 'tip'],
          [require('markdown-it-container'), 'warning']
        ]
      })
  },
  //以下方式可以在别的地方 可以引入md文件并查看，还可以在识别md的组件中展示 例如mavon-editor 可以引入md后 直接绑定在该组件的v-html上直接展示
  // configureWebpack: (config) => {
  //   config.module.rules.push({
  //     test: /\.md$/, 
  //     use: [ 
  //       { loader: 'html-loader' }, 
  //       { 
  //         loader: 'markdown-loader',
  //         options: {} 
  //       } 
  //     ] 
  //   })
  
  // }

  // [require('markdown-it-container'), 'demo', {
  //   validate: function (params) {
  //     return params.trim().match(/^demo\s*(.*)$/)
  //   },
  //   render: function (tokens, idx) {
  //     console.log(tokens, idx)
  //     if (tokens[idx].nesting === 1) {
  //       // 1.获取第一行的内容使用markdown渲染html作为组件的描述
  //       let demoInfo = tokens[idx].info.trim().match(/^demo\s+(.*)$/)
  //       let description = (demoInfo && demoInfo.length > 1) ? demoInfo[1] : ''
  //       let descriptionHTML = description ? markdownRender.render(description) : ''
  //       // 2.获取代码块内的html和js代码
  //       let content = tokens[idx + 1].content
  //       // 3.使用自定义开发组件【DemoBlock】来包裹内容并且渲染成案例和代码示例
  //       return `<demo-block>
  //         <div class="source" slot="source">${content}</div>
  //         ${descriptionHTML}
  //         <div class="highlight" slot="highlight">`
  //     } else {
  //       return '</div></demo-block>\n'
  //     }
  //   }
  // }]
}