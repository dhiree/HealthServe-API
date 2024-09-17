const express = require('express')
const userService = require('../controller/ServiceController')

const router = express.Router()

router.post('/create', userService.createService);
router.get('/get', userService.getService);
router.get('/get/:id', userService.getServiceById);
router.put('/update/:id', userService.updateService);
router.delete('/delete/:id', userService.deleteService);

module.exports = router