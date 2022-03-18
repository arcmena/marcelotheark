const grc = require('./grc')

const [script, ...args] = process.argv.slice(2)

if (script === 'grc') {
  const [name, subDir] = args

  grc(name, subDir)
}
