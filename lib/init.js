const {promisify} = require('util')
const figlet = promisify(require('figlet'))
const clear = require('clear')
const chalk = require('chalk')
const log = content => console.log(chalk.green(content))
const { clone } = require('./download')
const open = require('open')
const spawn = async (...args) => {
  const { spawn } = require('child_process')
  return new Promise(resolve => {
    const proc = spawn(...args)
    proc.stdout.pipe(process.stdout)
    proc.stderr.pipe(process.stderr)
    proc.on('close', () => {
      resolve()
    })
  })
}
module.exports = async name => {
  // 打印欢迎页面
  clear()
  const data = await figlet('KKB welcome')
  log(data)

  clone
  log(`🐻创建项目： ${name}`)
  await clone(`github:su37josephxia/vue-template`, name)

  // 自动安装依赖
  log('🔨安装依赖')
  await spawn('npm', ['install'], {cwd: `./${name}`})

  log(`
    ok安装完成:
    ===================
    cd ${name}
    npm run serve
    ===================
  `)
  open(`http://locahost: 8080`)
  // 启动
  await spawn('npm', ['run', 'serve'], {cwd: `./${name}`})
} 

