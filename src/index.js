// @ts-check

const fs = require('fs')
const path = require('path')
const { parser: vueseParser } = require('@vuese/parser')
const { Render: VueseRender } = require('@vuese/markdown-render')

const isFn = fn => typeof fn === 'function'

module.exports = (md, options = {}) => {
    const VUESE_RE = /<\[vuese\]\((.+)\)/i
    const {
        root = process.cwd(),
        vueseRe = VUESE_RE,
        ruleName = 'vuese',
        useAll = null,
        useParser = null,
        useRender = null,
        parserOptions = {},
        renderOptions = {},
    } = options

    md.core.ruler.after('inline', ruleName, (state) => {
        if (!vueseRe.test(state.src)) return

        for (let i = state.tokens.length - 1; i >= 0; i--) {
            const token = state.tokens[i]

            if (token.type !== 'inline') continue

            const match = vueseRe.exec(token.content)
            if (!match || match.length < 2) continue

            const rawPath = match[1].trim()
            const mdContent = getMdFromSfc(rawPath)
            const vueseTokens = md.parse(mdContent)

            state.tokens = state.tokens
                .slice(0, i - 1)
                // replace tokens
                .concat(vueseTokens)
                .concat(state.tokens.slice(i + 2))
        }
    })

    function getMdFromSfc (rawPath) {
        const tmpPath = rawPath
            .replace(/^['|"]/, '')
            .replace(/['|"]$/, '')
            .replace(/^@/, root)
        const filePath = path.resolve(root, tmpPath)

        if (!fs.existsSync(filePath)) return `Not found: ${filePath}`

        try {
            const content = fs.readFileSync(filePath, 'utf-8')
            const parserRes = vueseParser(content, parserOptions)

            if (isFn(useParser)) return useParser(parserRes)

            const vueseRender = new VueseRender(parserRes, renderOptions)

            if (isFn(useRender)) return useRender(vueseRender)

            const renderRes = vueseRender.render()
            const markdownRes = vueseRender.renderMarkdown()

            return isFn(useAll)
                ? useAll({ content, parserRes, renderRes, markdownRes })
                : markdownRes.content
        } catch (e) {
            return e.message
        }
    }
}
