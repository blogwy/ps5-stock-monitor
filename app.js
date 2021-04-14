const got = require('got')
const ps5 = require('./config/ps5')
const xbox = require('./config/xbox')
const { ding } = require('./ding')
function monitor (params) {
  got(params.url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36'
    }
  })
    .then(res => {
      if (res.body.includes('id="buy-now-button"')) {
        console.log(`${params.title}${params.yesText}`)
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
      }
    })
    .catch(err => {
      console.log(err)
    })
}

function main () {
  monitor(ps5.us)
  monitor(ps5.jp)
  monitor(ps5.uk)
  monitor(ps5.de)
  monitor(ps5.au)
  monitor(xbox.us)
  monitor(xbox.jp)
  monitor(xbox.uk)
  monitor(xbox.de)
  monitor(xbox.au)
}

module.exports = {
  main
}