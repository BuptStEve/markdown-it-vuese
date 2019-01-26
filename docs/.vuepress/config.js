const vuese = require('../../src/')

module.exports = {
    base: '/markdown-it-vuese/',
    locales: {
        '/': {
            title: 'markdown-it-vuese',
            description: '📖 Vuese plugin for markdown-it markdown parser.'
        }
    },
    head: [
        ['link', { rel: 'icon', href: `/favicon.ico` }],
    ],
    markdown: {
        config: (md) => {
            md.use(vuese)
            md.use(vuese, {
                vueseRe: /<\[vuese-h3\]\((.+)\)/i,
                ruleName: 'vuese-h3',
                useRender: (vueseRender) => {
                    const renderRes = vueseRender.render()
                    const genMd = key => `### ${key}\n${renderRes[key]}\n`

                    return Object.keys(renderRes).map(genMd).join('')
                },
            })
        },
    },
    evergreen: true,
    serviceWorker: true,
    themeConfig: {
        repo: 'BuptStEve/markdown-it-vuese',
        docsDir: 'docs',
        nav: [
            { text: 'Guide', link: '/' },
            { text: 'Example', link: '/example/' },
        ],
        sidebarDepth: 2,
        sidebar: {
            '/example/': [{
                title: 'Example',
                collapsable: false,
                children: [
                    '',
                    ['demo', '默认渲染结果'],
                    'vuepress',
                    'custom',
                ],
            }],
            '/': [['', 'Guide']],
        },
        editLinks: true,
        serviceWorker: {
            updatePopup: {
               message: 'New content is available.',
               buttonText: 'Refresh',
            },
        },
    },
}
