# ps5-stock-monitor
监控美亚/日亚ps5库存发送到钉钉群

**建议代码直接上传到谷歌/亚马逊/阿里/腾讯 云函数上，创建定时任务进行监控**

**日亚国内应该是访问不了，如果是用国内的云服务就注释掉相关代码**

## 入门

1. clone代码

2. 在`config/secret.js`文件里面填入你的钉钉群`secret`和`access_token`

3. 本地测试一下

4. 上传云服务并创建定时任务