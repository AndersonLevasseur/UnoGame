'use strict';

const Koa = require('koa');
const server = require('@koa/router');

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
  ctx.body = 'Some string';
});

app.use(router.routes())
  .use(router.allowedMethods())
  .listen(80);

// const { port } = require('./config').server;

// async function bootstrap() {
//   /**
//    * Add external services init as async operations (db, redis, etc...)
//    * e.g.
//    * await sequelize.authenticate()
//    */
//   return http.createServer(server.callback()).listen(port);
// }

// bootstrap()
//   .then(server =>
//     console.log(`🚀 Server listening on port ${server.address().port}!`),
//   )
//   .catch(err => {
//     setImmediate(() => {
//       console.error('Unable to run the server because of the following error:');
//       console.error(err);
//       process.exit();
//     });
//   });
