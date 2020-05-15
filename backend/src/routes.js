const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionsController = require('./controllers/SessionsController');

const routes = express.Router();

//Rota insert login
routes.post('/sessions', SessionsController.create);

//Select uma ong especifica 
routes.get('/profile', ProfileController.index);
//Select ONG
routes.get('/ongs', OngController.index );
//insert ONG
routes.post('/ongs', OngController.create);

//Insert incidents
routes.post('/incidents', IncidentController.create);
//Select incidents
routes.get('/incidents', IncidentController.index);
//DELETANDO incidents
routes.delete('/incidents/:id', IncidentController.delete);



module.exports = routes;