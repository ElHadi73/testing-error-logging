const winston = require('winston');

//configuration
const logConfiguration = {


	transports: [

		new winston.transports.File({
			level: 'warn',

		//create the log directory if it does not exist
			filename: 'logs/warns.log.json'
		})
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

module.exports = logger;
