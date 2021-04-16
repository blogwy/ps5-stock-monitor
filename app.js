const got = require('got')
const ps5 = require('./config/ps5')
const xbox = require('./config/xbox')
const { ding } = require('./ding')
const rule = require('./config/rule')
const headers = require('./config/headers')
const logger = require('./log')
// 开启log服务
require('./log/server')
function monitor (params, type) {
  got(params.url, {
    headers: headers[type]
  })
    .then(res => {
      if (res.body.includes(rule['amazon'])) {
        console.log(`${params.title}${params.yesText}`)
        logger.info(`${params.title}${params.yesText}`)
        const msg = {
          msgtype: 'link',
          link: {
            title: params.title,
            text: params.yesText,
            picUrl: params.img,
            messageUrl: params.url
          }
        }
        ding(msg)
      } else {
        console.log(`${params.title}${params.noText}`)
        logger.info(`${params.title}${params.noText}`)
      }
    })
    .catch(err => {
      console.log('请求页面失败')
      console.log(err)
      logger.error('请求页面失败')
      logger.error(err)
    })
}

function main () {
  monitor(ps5.us, 'us')
  monitor(ps5.jp, 'jp')
  monitor(ps5.uk, 'uk')
  monitor(ps5.de, 'de')
  monitor(ps5.au, 'au')
  monitor(xbox.us, 'us')
  monitor(xbox.jp, 'jp')
  monitor(xbox.uk, 'uk')
  monitor(xbox.de, 'de')
  monitor(xbox.au, 'au')
}

// 开始定时任务，docker/自己本地测试请使用自定义定时器
setInterval(() => {
  main()
}, 1000 * 60);

// serverless服务使用下面代码导出函数
module.exports = {
  main
}