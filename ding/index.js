const sign = require('./sign')
const got = require('got')
const { secret, access_token } = require('../config/secret')
const logger = require('../log')

function ding (message) {
  const url = 'https://oapi.dingtalk.com/robot/send'

  const time = Date.now()

  const content = `${time}\n${secret}`

  const signSecret = sign(secret, content)

  got.post(url, {
    searchParams: {
      access_token,
      timestamp: time,
      sign: signSecret
    },
    json: message
  })
    .then(res => {
      console.log('钉钉发送成功')
      logger.info('钉钉发送成功')
    })
    .catch(err =>  {
      console.log('钉钉发送失败')
      console.log(err)
      logger.error('钉钉发送失败')
      logger.error(err)
    })
}

module.exports = {
  ding
}