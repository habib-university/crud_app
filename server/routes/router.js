const express = require('express')
const route = express.Router()

const services = require('../services/render');


/**
* @description Root Route
* @method GET/
*/
route.get('/', services.homeRoutes);

/**
* @description add form
* @method GET /add-form
*/
route.get('/add_form', services.add_form);

/**
* @description update form
* @method GET /update-form
*/
route.get('/update_form', services.update_form);

module.exports = route