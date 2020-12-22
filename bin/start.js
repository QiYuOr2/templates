const app = require('../app');
const http = require('http');

if (process.env.MODE === 'prod') {
  // 生产环境配置
  // 例如配置https
} else {
  http.createServer(app).listen(process.env.PORT, function () {
    console.log(`Running in http://localhost:${process.env.PORT}`);
  });
}
