//设置 左侧导航目录的菜单
module.exports = {
    'base': {
        home: {
            path: '/',
            redirect: '/zh-CN/install',
            title: '初始页'
        },
        layout: {
            path: '/',
            redirect: '/install',
            title: 'layout',
            children: 'nav'
        },
        blog: {
            path: '/blog',
            title: 'blog'
        },
        detail: {
            path: '/blog/:id'
        }
    },
    'zh-CN': {
        nav: [{
                name: '开发指南',
                groups: [{
                    list: [{
                        path: '/install',
                        title: '简介'
                    }]
                }]
            },
            {
                name: '组件',
                groups: [{
                    groupName: 'Basic',
                    list: [{
                            path: '/button',
                            title: 'Button'
                        },
                        {
                            path: '/icon',
                            title: 'Icon'
                        },
                        {
                            path: '/table',
                            title: 'Table'
                        }
                    ]
                },
                {
                    groupName: 'Notice',
                    list: [
                        {
                            path: '/tabs',
                            title: 'Tabs'
                        }
                    ]
                }]
            }
        ]
    },
    'en-US': {
        nav: [{
                name: 'Guide',
                groups: [{
                    list: [{
                        path: '/install',
                        title: 'install'
                    }]
                }]
            },
            {
                name: 'Components',
                groups: [{
                    groupName: 'Basic',
                    list: [{
                            path: '/button',
                            title: 'Button'
                        },
                        {
                            path: '/icon',
                            title: 'Icon'
                        },
                        {
                            path: '/table',
                            title: 'Table'
                        }
                    ]
                },
                {
                    groupName: 'Notice',
                    list: [
                        {
                            path: '/tabs',
                            title: 'Tabs'
                        }
                    ]
                }]
            }
        ]
    }
}