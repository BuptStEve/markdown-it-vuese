import fs from 'fs-extra'
import Md from 'markdown-it'
import path from 'path'
import vuese from '../src/'

describe('markdown-it-vuese', () => {
    const md = Md().use(vuese)

    describe('should', () => {
        it('render full documentation', async () => {
            const output = await renderOutput('at-path', md)

            expect(output).toMatchSnapshot()
        })

        it('render by custom root', async () => {
            const md = Md().use(vuese, {
                root: process.cwd() + '/test',
                useParser: parserRes => parserRes.name,
            })
            const output = await renderOutput('custom-root', md)

            expect(output).toBe(`<p>MyComponent</p>\n<p>MyComponent</p>`)
        })

        it('render by useParser', async () => {
            const md = Md().use(vuese, {
                useParser: parserRes => parserRes.name,
            })
            const output = await renderOutput('relative-path', md)

            expect(output).toBe(`<p>MyComponent</p>`)
        })

        it('render by useRender', async () => {
            const md = Md().use(vuese, {
                useRender: (vueseRender) => {
                    let content = ''
                    const renderRes = vueseRender.render()

                    Object.keys(renderRes).forEach((key) => {
                        content += `### ${key}\n\n${renderRes[key]}\n`
                    })

                    return content
                },
            })
            const output = await renderOutput('relative-path', md)

            expect(output).toMatchSnapshot()
        })

        it('render by useAll', async () => {
            const md = Md().use(vuese, {
                useAll: ({ markdownRes }) => markdownRes.componentName,
            })
            const output = await renderOutput('relative-path', md)

            expect(output).toBe(`<p>MyComponent</p>`)
        })

        it('match by custom vueseRe', async () => {
            const md = Md().use(vuese, {
                vueseRe: /\+{3}my-rule\((.+)\)/im,
                useAll: ({ markdownRes }) => markdownRes.componentName,
            })
            const output = await renderOutput('custom-re', md)

            expect(output).toBe(`<p>MyComponent</p>`)
        })

        it('render parse error', async () => {
            const output = await renderOutput('error', md)

            expect(output).toBe(`<p>Unexpected token, expected &quot;,&quot; (12:0)</p>`)
        })

        it('render multiple times', async () => {
            const md = Md().use(vuese, {
                useAll: ({ markdownRes }) => markdownRes.componentName,
            })
            const output = await renderOutput('multiple-times', md)

            expect(output).toBe(`<p>MyComponent</p>\n<p>MyComponent</p>`)
        })
    })

    describe('should not', () => {
        it('match fence', async () => {
            const output = await renderOutput('not-match', md)

            expect(output).toBe(`<pre><code class="language-md">&lt;[vuese](not-match.vue)\n</code></pre>`)
        })

        it('match code block', async () => {
            const output = await renderOutput('code-block', md)

            expect(output).toBe(`<pre><code>&lt;[vuese](@/test/MyComponent.vue)\n</code></pre>`)
        })

        it('found', async () => {
            const output = await renderOutput('not-found', md)

            expect(output).toBe(`<p>Not found: ${process.cwd()}/not-found.vue</p>`)
        })
    })

    // helpers

    async function renderOutput (name, md) {
        const input = await readFile(name)
        return md.render(input).trim()
    }

    async function readFile (name) {
        const target = path.resolve(__dirname, `./fragments/${name}.md`)
        return fs.readFile(target, 'utf-8')
    }
})
