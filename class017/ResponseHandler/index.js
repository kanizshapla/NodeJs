const Koa = require('koa');
const Router = require('koa-router');
const {koaBody} = require('koa-body');

const userRouter = require("./routes/userRouter");
const responseHandler = require('./handler/responseHandler');
const PORT = 3001;

const app = new Koa();
const router = new Router();

app.use(koaBody());

router.use(userRouter.routes());

app.use(responseHandler());

app.use(router.routes());
app.use(router.allowedMethods());

app.use(async (ctx, next) => {
    ctx.status = 404;
    ctx.body = "Resource not found";
});

app.listen(PORT, () => {
    console.log("Server is running on PORT", PORT);
});