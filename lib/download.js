const {promisify} = require('util')

async function clone (repo, desc) {
  // 下载git repo
  const download = promisify(require('download-git-repo'))
  // 进度条
  const ora = require('ora')
  const process = ora(`下载...${repo}`)
  process.start()
  await download(repo, desc)
  process.succeed()
}

module.exports = {
  clone
}