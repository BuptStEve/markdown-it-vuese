const vuese = require('../../src/')
const { name, description } = require('../../package.json')

module.exports = {
    base: '/' + name + '/',
    locales: {
        '/': { title: name, description }
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
        repo: 'BuptStEve/' + name,
        docsDir: 'docs',
        nav: [
            { text: 'Guide', link: '/' },
            { text: 'Example', link: '/example/' },
            {
                text: 'Ecosystem',
                items: [
                    { text: 'demo-code', link: 'https://buptsteve.github.io/vuepress-plugin-demo-code/' }
                ],
            },
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
