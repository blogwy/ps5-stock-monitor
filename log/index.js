const log4js = require("log4js");
log4js.configure({
  appenders: { cheese: { type: "file", filename: 'file/log.log' } },
  categories: { default: { appenders: ["cheese"], level: "trace" } }
});
 
const logger = log4js.getLogger("cheese");

module.exports = logger