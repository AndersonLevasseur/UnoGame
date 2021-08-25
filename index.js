const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
    ctx.body = 'Some string';
});

app.use(router.routes())
    .use(router.allowedMethods())
    .listen(3001);
