const fs = require('fs')

const { component, styles, test, barrel } = require('./template.js')

/**
 * V1 script to create react component folder structure
 */

// grab component name from terminal argument
const grc = (name, subDir = '') => {
  if (!name) throw new Error('You must include a component name.')

  const dir = `./components/${subDir ? subDir + '/' : ''}${name}`

  // throw an error if the file already exists
  if (fs.existsSync(dir))
    throw new Error('A component with that name already exists.')

  // create the folder
  fs.mkdirSync(dir, { recursive: true })

  function writeFileErrorHandler(err) {
    if (err) throw err
  }

  // component.tsx
  fs.writeFile(`${dir}/${name}.tsx`, component(name), writeFileErrorHandler)
  // styles.ts
  fs.writeFile(`${dir}/styles.ts`, styles(name), writeFileErrorHandler)
  // component.test.tsx
  fs.writeFile(`${dir}/${name}.test.tsx`, test(name), writeFileErrorHandler)
  // index.tsx
  fs.writeFile(`${dir}/index.ts`, barrel(name), writeFileErrorHandler)

  console.log(`Created component: ${name}`)
  console.log('Path:', dir)
}

module.exports = grc
