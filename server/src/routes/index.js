const { Router } = require("express");
const  {getCountries, getCountrieById, searchCountryByaName} = require('../controllers/countries.controller')
const {createActivity, getActivity, getAllActivities} = require('../controllers/activity.controller')
const {filterByContinent, orderByName,orderByPopulation } = require('../controllers/filtres')



const router = Router();

router.get('/countries', getCountries);
router.get('/countries/:id?', getCountrieById);
router.get('/countries/',searchCountryByaName);

//Activitys

router.post('/activities', createActivity);
router.get('/activities/:id', getActivity);
router.get('/activitesAll',  getAllActivities)
//Filters
router.get('/countriesFilters/:name?', filterByContinent);
router.get('/countriesOrders/:name?', orderByName);
router.get('/countriesPopulation/:name?', orderByPopulation)
module.exports = router;
