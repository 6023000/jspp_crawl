const seq = require('./connections/mysql_connect');

require('./models');

seq.authenticate().then(() => {
	console.log('MySQL server is connected completely.');
}).catch ((error) => {
	console.log('MySQL server is failed to be connected. Error information is below: ' + error);
}); // 连接成功后自动执行

seq.sync({
	//force: true
}).then(() => {
	console.log('The table has been synchronised into database successfully');
	process.exit();
}); // 将模型同步到数据库中