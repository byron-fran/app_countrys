const { Router } = require("express");
const  {getCountries, getCountrieById, searchCountryByaName} = require('../controllers/countries.controller')
const {createActivity, getActivity,} = require('../controllers/activity.controller')
const router = Router();

router.get('/countries', getCountries);
router.get('/countries/:id?', getCountrieById);
router.get('/countries/?name',searchCountryByaName);
//Activitys
router.post('/activities', createActivity);
router.get('/activities/:id', getActivity)
module.exports = router;
