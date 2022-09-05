const { isPrd } = require('./env_config');

module.exports = {
	MYSQL_CONF: {
		base: {
			host: 'localhost',
			dialect: 'mysql',
			pool: {  // 设置数据库连接池
				max: 5,
				min: 0, // 
				idle: 10000 // 挂起时间超过这个时间则会被释放
			}
		},
		conf: ['txclass', 'root', isPrd ? 'xxx' : '12345678']
	},
	REDIS_CONF: ['6379', '127.0.0.1'] // 端口 
};