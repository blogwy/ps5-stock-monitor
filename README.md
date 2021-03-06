# ps5-stock-monitor
监控美亚/日亚/英亚/德亚/澳亚ps5和xbox库存发送到钉钉群

**建议代码直接上传到谷歌/亚马逊/阿里/腾讯 云函数上，创建定时任务进行监控**

**日亚国内应该是访问不了，如果是用国内的云服务(阿里/腾讯)建议用非大陆区域的服务**

## 入门

首先创建一个钉钉群，添加一个自定义机器人。机器人开启消息推送，安全选择加签即可。记录下机器人的`access_token`和`secret`，然后在`config/secret.js`文件里面填入你的钉钉群`secret`和`access_token`，支持本地运行，docker容器部署，serverless云函数方式部署(不同部署方式都需要修改代码，具体请看项目入口文件`app.js`)

## docker部署

```bash
docker image build -t ps5-stock-monitor:v1.0.0 .

docker container run -e TZ="Asia/Shanghai" -p 8000:3000 ps5-stock-monitor:v1.0.0
```

docker部署后，浏览器打开`http://localhost:8000/log.log`即可查看运行日志

## 监控数据

### PS5

[https://www.amazon.com/PlayStation-5-Console/dp/B08FC5L3RG/ref=sr_1_10?crid=QCE1WR0PQHS5&dchild=1&keywords=ps5+console&qid=1618057361&sprefix=ps5%2Caps%2C448&sr=8-10](https://www.amazon.com/PlayStation-5-Console/dp/B08FC5L3RG/ref=sr_1_10?crid=QCE1WR0PQHS5&dchild=1&keywords=ps5+console&qid=1618057361&sprefix=ps5%2Caps%2C448&sr=8-10)

[https://www.amazon.co.jp/-/zh/dp/B08GGGBKRQ/ref=sr_1_2?__mk_zh_CN=亚马逊网站&crid=1AY0YHS0R3AMZ&dchild=1&keywords=ps5&qid=1618060372&sprefix=ps5%2Caps%2C512&sr=8-2](https://www.amazon.co.jp/-/zh/dp/B08GGGBKRQ/ref=sr_1_2?__mk_zh_CN=亚马逊网站&crid=1AY0YHS0R3AMZ&dchild=1&keywords=ps5&qid=1618060372&sprefix=ps5%2Caps%2C512&sr=8-2)

[https://www.amazon.co.uk/PlayStation-9395003-5-Console/dp/B08H95Y452/ref=sr_1_2?crid=18T9NKW7KVCFT&dchild=1&keywords=ps5+console+disc+version&qid=1618289270&sprefix=ps5+con%2Caps%2C372&sr=8-2](https://www.amazon.co.uk/PlayStation-9395003-5-Console/dp/B08H95Y452/ref=sr_1_2?crid=18T9NKW7KVCFT&dchild=1&keywords=ps5+console+disc+version&qid=1618289270&sprefix=ps5+con%2Caps%2C372&sr=8-2)

[https://www.amazon.de/Sony-Interactive-Entertainment-PlayStation-5/dp/B08H93ZRK9/ref=sr_1_2?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=G2O8GVGP0J4N&dchild=1&keywords=ps5+console&qid=1618294801&sprefix=ps5+con%2Caps%2C373&sr=8-2](https://www.amazon.de/Sony-Interactive-Entertainment-PlayStation-5/dp/B08H93ZRK9/ref=sr_1_2?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=G2O8GVGP0J4N&dchild=1&keywords=ps5+console&qid=1618294801&sprefix=ps5+con%2Caps%2C373&sr=8-2)

[https://www.amazon.com.au/PlayStation-5-Console/dp/B08HHV8945/ref=sr_1_1?dchild=1&qid=1618372398&rd=1&s=videogames&sr=1-1](https://www.amazon.com.au/PlayStation-5-Console/dp/B08HHV8945/ref=sr_1_1?dchild=1&qid=1618372398&rd=1&s=videogames&sr=1-1)

### XBOX

[https://www.amazon.com/Xbox-X/dp/B08H75RTZ8/ref=sr_1_2?crid=3HIR65ZUUB8E9&dchild=1&keywords=xbox+series+x&qid=1618312164&s=videogames&sprefix=xbox%2Cvideogames%2C530&sr=1-2](https://www.amazon.com/Xbox-X/dp/B08H75RTZ8/ref=sr_1_2?crid=3HIR65ZUUB8E9&dchild=1&keywords=xbox+series+x&qid=1618312164&s=videogames&sprefix=xbox%2Cvideogames%2C530&sr=1-2)

[https://www.amazon.co.jp/-/en/dp/B08GGKZ34Z/ref=sr_1_1?crid=1D80D3Y96GXF1&dchild=1&keywords=xbox+series+x&qid=1618312305&sprefix=xbox%2Caps%2C437&sr=8-1](https://www.amazon.co.jp/-/en/dp/B08GGKZ34Z/ref=sr_1_1?crid=1D80D3Y96GXF1&dchild=1&keywords=xbox+series+x&qid=1618312305&sprefix=xbox%2Caps%2C437&sr=8-1)

[https://www.amazon.co.uk/Xbox-RRT-00007-Series-X/dp/B08H93GKNJ/ref=sr_1_1?crid=11FWH55N54CQJ&dchild=1&keywords=xbox+series+x&qid=1618312344&sprefix=xbox%2Caps%2C530&sr=8-1](https://www.amazon.co.uk/Xbox-RRT-00007-Series-X/dp/B08H93GKNJ/ref=sr_1_1?crid=11FWH55N54CQJ&dchild=1&keywords=xbox+series+x&qid=1618312344&sprefix=xbox%2Caps%2C530&sr=8-1)

[https://www.amazon.de/Microsoft-RRT-00009-Xbox-Series-1TB/dp/B08LNTDL5S/ref=sr_1_1?crid=1213BVOFZ5CTJ&dchild=1&ie=UTF8&keywords=xbox%2Bseries%2Bx&language=en_GB&qid=1618312410&sprefix=xbox%2Caps%2C713&sr=8-1&th=1](https://www.amazon.de/Microsoft-RRT-00009-Xbox-Series-1TB/dp/B08LNTDL5S/ref=sr_1_1?crid=1213BVOFZ5CTJ&dchild=1&ie=UTF8&keywords=xbox%2Bseries%2Bx&language=en_GB&qid=1618312410&sprefix=xbox%2Caps%2C713&sr=8-1&th=1)

[https://www.amazon.com.au/Microsoft-RRT-00021-Xbox-Series-Console/dp/B08HLW5TDS/ref=sr_1_3?dchild=1&qid=1618372458&rd=1&s=videogames&sr=1-3](https://www.amazon.com.au/Microsoft-RRT-00021-Xbox-Series-Console/dp/B08HLW5TDS/ref=sr_1_3?dchild=1&qid=1618372458&rd=1&s=videogames&sr=1-3)
