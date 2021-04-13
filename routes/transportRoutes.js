require('dotenv').config();
const { Router } = require('express')
const {transportTotal,transportTimeFrame} = require('../controllers/transport')
const router = Router()

router.post('/logTransport', transportTotal);
router.post('/timeFrame', transportTimeFrame)
module.exports = router;