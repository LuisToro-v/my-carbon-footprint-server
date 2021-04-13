require('dotenv').config();
const { Router } = require('express');
const {transportTotal,transportTimeFrame, deleteTransport,updateTransport} = require('../controllers/transport');
const router = Router()

router.post('/logTransport', transportTotal);
router.post('/timeFrame', transportTimeFrame);
router.delete('/delete', deleteTransport);
router.patch('/update', updateTransport);
module.exports = router;