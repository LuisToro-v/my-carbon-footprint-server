require('dotenv').config();
const { Router } = require('express')
const {logFoodTotal,foodTimeFrame} = require('../controllers/food')
const router = Router()

router.post('/logFood', logFoodTotal);
router.post('/timeFrame', foodTimeFrame)

module.exports = router