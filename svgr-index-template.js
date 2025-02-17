const path = require('path')

function svgrIndexTemplate(filePaths) {
  const exportEntries = filePaths.map((filePath) => {
    const basename = path.basename(filePath, path.extname(filePath))
    const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename
    return `export { default as ${exportName}Icon } from './${basename}'`
  })
  return exportEntries.join('\n')
}

module.exports = svgrIndexTemplate
