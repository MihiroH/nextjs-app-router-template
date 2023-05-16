const path = require('path')

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`

module.exports = {
  './**/*.{js,jsx,ts,tsx}': ['npm run format:script', buildEslintCommand],
  './**/*.scss': ['npm run format:style', 'npm run lint:fix:style'],
}
