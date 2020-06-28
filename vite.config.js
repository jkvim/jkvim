// @ts-check
const reactPlugin = require('vite-plugin-react')
const path = require('path')

/**
 * @type { import('vite').UserConfig }
 */
const config = {
  jsx: 'react',
  plugins: [reactPlugin],
  alias: {
    '/@/': path.resolve(__dirname, './src')
  }
}

module.exports = config
