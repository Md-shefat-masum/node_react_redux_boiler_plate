const express = require("express");
const isAuthMiddleware = require("../../app/middlewares/isAuth.middleware");
const router = express.Router();

router.use(isAuthMiddleware()).get("/dashboard", function (req, res) {
	console.log(req.session);
	return res.render("backend/dashboard");
});

module.exports = () => router;
