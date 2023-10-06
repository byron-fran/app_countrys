const { Router } = require("express");
const  {getCountries, getCountrieById} = require('../controllers/countries.controller')
const {createActivity, getActivity, getAllActivities, deleteActivityByCountry, upadetActivityById} = require('../controllers/activity.controller')

const router = Router();

router.get('/countries', getCountries);
router.get('/countries/:id?', getCountrieById);


//Activitys

router.post('/activities', createActivity);
router.get('/activities/:id', getActivity);
router.get('/activitesAll',  getAllActivities)
router.delete('/activities/:id', deleteActivityByCountry);
router.put('/activities/:id',upadetActivityById )


module.exports = router;
