const sqlConfig = {
	user: process.env.SQL_SERVER_USERNAME,
	password: process.env.SQL_SERVER_PASSWORD,
	server: 'localhost\\MSSQLSERVER',
	database: process.env.SQL_SERVER_DB_NAME,
	port: parseInt(process.env.SQL_SERVER_PORT) || 1433,
	pool: {
		max: 10,
		min: 0,
		idleTimeoutMillis: 30000,
	},
	options: {
		encrypt: true, // for azure
		trustServerCertificate: true, // change to true for local dev / self-signed certs
	},
};

module.exports = sqlConfig;
