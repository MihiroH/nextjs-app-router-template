// @ts-check
const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: '@use "src/styles/global/index" as *;',
  },
}

module.exports = nextConfig
