const { REDIS_CONF } = require('./db_config'),
      { isPrd } = require('./env_config');

module.exports = {
	qiniu: {
		keys: {
			ak: 'gCyds_nz_v-QhVIDt6LtIIjo1jVoxJnXkoCFDUrt',
		  sk: 'm7bfJT6AbUU9jbTiYJFcpiLx4H4wcmQccFzVIz2r'
		},
    bucket: {
    	tximg: {
    		bucket_name: 'txclass-image', // 空间名
		    domain: 'http://tximg.jsplusplus.com/' // 空间域名
    	}
    }
	},
	crawler: {
		url: {
			main: 'https://msiwei.ke.qq.com/?tuin=304a784b#tab=0&category=-1',
			course: 'https://msiwei.ke.qq.com/?tuin=304a784b#tab=1&category=-1',
			teacher: 'https://msiwei.ke.qq.com/?tuin=304a784b#tab=2&category=-1',
		  aboutus: 'https://msiwei.ke.qq.com/?tuin=304a784b#category=-1&tab=3'
		}
	},
	sessionInfo: {
    keys: ['a1!s2@d3#f4_&g5h6'], // 加密cookie
    name: 'txclass.sid', 
    prefix: 'txclass.sess' // redis存储session的前缀项目名+.sess
	},
	cookieInfo: {
		path: '/', // 作用在根目录
		httpOnly: true, // 不允许修改
		maxAge: 24 * 60 * 60 * 1000 // cookie 过期时间
	},
	redisInfo: {
		all: `${REDIS_CONF[1]}:${REDIS_CONF[0]}` // 配置所有redis都使用一个连接
	},
	cryptoSecret: 'JKl&*9lj2F@#3kflsAfkDfl',
	adminAccount: {
		username: 'admin',
		password: 'admin'
	},
	corsOrigin: isPrd ? 'http://admin.jsplusplus.com' : 'http://localhost:3000'
}










