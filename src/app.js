const errlogger = require('./util/errorLogger');
const warnlogger = require('./util/warningLogger');
const infologger = require('./util/infoLogger');

errlogger.error("err");
warnlogger.warn("wr");
infologger.info("fd");
