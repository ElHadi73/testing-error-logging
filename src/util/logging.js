const winston = require('winston');

//configuration
const logConfiguration = {


	transports: [

		new winston.transports.File({
			level: 'warn',

		//create the log directory if it does not exist
			filename: 'logs/warns.log.json'
		}),

		new winston.transports.File({
			level: 'error',

		//create the log directory if it does not exist
			filename: 'logs/errors.log.json'

		}),

		new winston.transports.File({
			level: 'info',

		//create the log directory if it does not exist
			filename: 'logs/infos.log.json',

		}),

	],

	format: winston.format.combine(

		winston.format.timestamp({
			format: 'DD-MMM-YYYY HH:mm:ss'
		}),

		winston.format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`),
		winston.format.json()

	)
};

//create a logger instance
const logger = winston.createLogger(logConfiguration);

logger.info("Winston logger, some info!");
logger.error("Winston logger, some error!");
logger.warn("Winston logger, some warn!");
