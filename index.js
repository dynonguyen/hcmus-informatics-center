require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const homeRoute = require('./routes/home.route');
const accountRoute = require('./routes/account.route');
const cookieParser = require('cookie-parser');

const {
	userAuthenticate,
	getUserId,
} = require('./middlewares/auth.middleware');
const openingScheduleRoute = require('./routes/opening-schedule');
const registerCourseRoute = require('./routes/register-course.route');

// set port
const PORT = process.env.PORT || 8888;

// set static file
app.use(express.static(path.join(__dirname, 'public')));

// set view engine
app.set('view engine', 'pug');
app.set('views', './views');

// set logging
app.use(morgan('tiny'));

// set up cookie, body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.SIGNED_COOKIE || 'signed_cookie'));

// routes
app.use('/', homeRoute);
app.use('/account', accountRoute);
app.use('/opening-schedule', getUserId, openingScheduleRoute);
app.use('/register-course', getUserId, registerCourseRoute);

// 404 Not found redirect
app.use(function (req, res, next) {
	res.status(404);

	// respond with html page
	if (req.accepts('html')) {
		res.render('404', { url: req.url });
		return;
	}

	// respond with json
	if (req.accepts('json')) {
		res.json({ error: 'Not found' });
		return;
	}

	// default to plain-text. send()
	res.type('txt').send('Not found');
});

// =============== LISTENING ================= //
app.listen(PORT, () => {
	console.log(`SERVER IS STARTING ON PORT ${PORT}`);
});
