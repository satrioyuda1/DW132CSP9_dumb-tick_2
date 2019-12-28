require('express-group-routes');
const middleware = require('./middleware');
const express = require('express');
const cors = require('cors');

const app = express();
const bodyParser = require('body-parser');
const port = 5000;

const categoriesController = require('./controllers/category');
const userController = require('./controllers/auth');
const eventController = require('./controllers/event');
const orderController = require('./controllers/order');

app.use(bodyParser.json());
app.use(cors());

app.group('/api/v1', (router) => {
	//crud categories
	router.get('/categories/', categoriesController.index);
	router.get('/categories/:id/events', eventController.showCategoryEvents);
	//crud users
	router.post('/signup', userController.signUp);
	router.post('/login', userController.login);
	router.get('/profile/:id', userController.showProfile);
	//crude events
	router.get('/event', eventController.search);
	router.get('/events/:id', eventController.showEvents);
	router.get('/events', eventController.index);
	router.post('/events', middleware.auth, eventController.addEvent);
	//crud order
	router.post('/order', middleware.auth, orderController.addOrder);
});

app.listen(port, () => {
	console.log(`Listening on port ${port}!`);
});
