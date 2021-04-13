require('dotenv').config();
const { Router } = require('express')
const {logFoodTotal,foodTimeFrame,deleteFood,updateFood} = require('../controllers/food')
const router = Router()

//Insert
router.post('/logFood', logFoodTotal);
// getByTime
router.post('/timeFrame', foodTimeFrame)
router.post('/delete', deleteFood)
router.patch('/update', updateFood)

module.exports = router