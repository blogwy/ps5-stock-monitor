const got = require('got')
const { us, jp } = require('./config/url')
const { ding } = require('./ding')

function monitor (params) {
  got(params.url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36'
    }
  })
    .then(res => {
      if (res.body.includes('id="buy-now-button"')) {
        const msg = {
          msgtype: 'link',
          link: {
            title: params.text,
            text: 'ps5有货了，赶快抢购',
            picUrl: 'https://ftp.bmp.ovh/imgs/2021/04/93181c6f1b3c0568.jpg',
            messageUrl: params.url
          }
        }
        ding(msg)
      } else {
        console.log('ps5没货')
      }
    })
    .catch(err => {
      console.log(err)
    })
}

function main () {
  monitor(us)
  monitor(jp)
}
main()
// module.exports = {
//   main
// }