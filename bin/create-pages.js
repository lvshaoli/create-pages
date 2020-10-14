#!/usr/bin/env node

// 添加gulp运行需要的参数
process.argv.push('--cwd')
process.argv.push(process.cwd())
process.argv.push('--gulpfile')
process.argv.push(require.resolve('../lib/index'))
console.log(process.argv)



require('gulp/bin/gulp')
