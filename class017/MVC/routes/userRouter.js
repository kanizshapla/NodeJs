const Router = require('koa-router');
const { getUsers, saveUser } = require("../controllers/userController");

const router = new Router();

router.get("/users", getUsers);
router.post("/users", saveUser);

module.exports = router;