const vuese = require('../../src/')
const { name, description } = require('../../package.json')

module.exports = {
    base: '/' + name + '/',
    locales: {
        '/': { lang: 'en-US', title: name, description },
        '/zh/': {
            lang: 'zh-CN',
            title: name,
            description: '📖 基于 markdown-it 的 Vuese 插件',
        },
    },
    head: [
        ['link', { rel: 'icon', href: `/favicon.ico` }],
    ],
    markdown: {
        extendMarkdown: (md) => {
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

            md.use(require('markdown-it-include'))
        },
    },
    evergreen: true,
    serviceWorker: true,
    themeConfig: {
        repo: 'BuptStEve/' + name,
        docsDir: 'docs',
        editLinks: true,
        sidebarDepth: 2,
        locales: {
            '/': {
                selectText: 'Languages',
                label: 'English',
                editLinkText: 'Edit this page on GitHub',
                serviceWorker: {
                    updatePopup: {
                        message: 'New content is available.',
                        buttonText: 'Refresh',
                    }
                },
                nav: [
                    { text: 'Guide', link: '/' },
                    { text: 'Example', link: '/example/' },
                    {
                        text: 'Ecosystem',
                        items: [
                            { text: 'vuepress-plugin-demo-code', link: 'https://buptsteve.github.io/vuepress-plugin-demo-code/' }
                        ],
                    },
                ],
                sidebar: {
                    '/example/': [{
                        title: 'Example',
                        collapsable: false,
                        children: [
                            '',
                            ['demo', 'Vuese Demo'],
                            'vuepress',
                            'custom',
                        ],
                    }],
                    '/': [['', 'Guide']],
                },
            },
            '/zh/': {
                selectText: '选择语言',
                label: '简体中文',
                editLinkText: '在 GitHub 上编辑此页',
                serviceWorker: {
                    updatePopup: {
                        message: '发现新内容可用。',
                        buttonText: '刷新',
                    },
                },
                nav: [
                    { text: '指南', link: '/zh/' },
                    { text: '示例', link: '/zh/example/' },
                    {
                        text: '生态系统',
                        items: [
                            { text: 'vuepress-plugin-demo-code', link: 'https://buptsteve.github.io/vuepress-plugin-demo-code/' }
                        ],
                    },
                ],
                sidebar: {
                    '/zh/example/': [{
                        title: 'Example',
                        collapsable: false,
                        children: [
                            '',
                            ['demo', '默认渲染结果'],
                            'vuepress',
                            'custom',
                        ],
                    }],
                    '/zh/': [['', 'Guide']],
                },
            },
        },
    },
}
