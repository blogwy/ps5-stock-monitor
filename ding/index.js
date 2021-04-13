const sign = require('./sign')
const got = require('got')
const { secret, access_token } = require('../config/secret')

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
      console.log('success')
    })
    .catch(err =>  {
      console.log('error')
      console.log(err)
    })
}

module.exports = {
  ding
}