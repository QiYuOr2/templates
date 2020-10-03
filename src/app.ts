import 'reflect-metadata';
import express from 'express';
import register from './common/register';
import IndexController from './controllers/index.controller';
import UserController from './controllers/user.controller';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const controllerStore = {
  index: new IndexController(),
  user: new UserController(),
};

register(controllerStore, '/', app);

app.listen(3000, () => {
  console.info(`Running in http://localhost:3000`);
});
