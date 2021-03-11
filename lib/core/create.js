const program = require('commander');

const {
  createProject,
  addComponent,
  addPage,
  addStore
} = require('./actions');

const createCommands = () => {
  // 创建项目指令
  program
    .command('create <project> [otherArgs...]')
    .description('clone a repository into a newly created directory')
    .action(createProject);

  program
    .command('addcmp <name>')
    .description('add react component, ex: ya addcpn NavBar [-d src/components]')
    .action(name => addComponent(name, program.dest || `src/components/${name}`))

  program
    .command('addpage <name>')
    .description('add react page, ex: yang addpage Home [-d dest]')
    .action(name => {
      addPage(name, program.dest || `src/pages/${name}`)
    })

  program
    .command('addstore <name>')
    .description('add react store, ex: yang addstore favor [-d dest]')
    .action(name => {
      addStore(name, program.dest || `src/store/modules/${name}`)
    })

  program.command('test').action(() => {
    // terminal.spawn("npm", ['--version']);
    // terminal.exec("npm --version");
    // open('http://localhost:8080/');`
  })
}

module.exports = createCommands;
