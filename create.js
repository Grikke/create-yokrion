#!/usr/bin/env node

const fs = require('fs');
const cp = require('child_process').exec
const shell = require('child_process').execSync;

var name

const consoleError = e => {
  console.error('An error occurred :')
  console.error(e.toString())
  console.log('Creation failed')
  process.exit(1);
}

if (!(name = process.argv.slice(2)[0])) 
  consoleError('No name specified')
else if (!name.match("^(?:@[a-z0-9-*~][a-z0-9-*._~]*/)?[a-z0-9-~][a-z0-9-._~]*$"))
  consoleError('Wrong name pattern')
try {
  name = name.trim().toLowerCase()
  fs.mkdirSync(`./${name}`)
  cp(`cp -r ${__dirname}/Framework/* ${__dirname}/Framework/.env ./${name}/`, e => {
    if (e)
      consoleError(e)
    cp(`npm install`, {cwd: `./${name}`} ,err => {
      if (err)
        consoleError(err)
      let content = fs.readFileSync(`./${name}/package.json`, {encoding: 'utf-8'})
      fs.writeFileSync(`./${name}/package.json`, content.replace('frame-work-name', name))
      console.log(`Project ${name} created successfully !`)
      console.log(`To start, type :`)
      console.log(`\tcd ${name}`)
      console.log('\tnpm start')
      process.exit()
    })
  })
}
catch (e) {consoleError(e)}

