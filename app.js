const got = require('got')
const ps5 = require('./config/ps5')
const xbox = require('./config/xbox')
const { ding } = require('./ding')
const rule = require('./config/rule')
const headers = require('./config/headers')
const logger = require('./log')
const loggerServer = require('./log/server')
function monitor (params, type) {
  got(params.url, {
    headers: headers[type]
  })
    .then(res => {
      if (res.body.includes(rule[type])) {
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
  monitor(ps5.us, 'amazon')
  monitor(ps5.jp, 'amazon')
  monitor(ps5.uk, 'amazon')
  monitor(ps5.de, 'amazon')
  monitor(ps5.au, 'amazon')
  monitor(ps5.rakuten_jp, 'rakuten')
  monitor(xbox.us, 'amazon')
  monitor(xbox.jp, 'amazon')
  monitor(xbox.uk, 'amazon')
  monitor(xbox.de, 'amazon')
  monitor(xbox.au, 'amazon')
}

// 开始定时任务
setInterval(() => {
  main()
}, 1000 * 60);