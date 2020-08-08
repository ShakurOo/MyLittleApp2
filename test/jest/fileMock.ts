import path from 'path'

module.exports = {
  process: (_, filename: string): string => (
    'module.exports = ' + JSON.stringify(path.basename(filename))
  )
}