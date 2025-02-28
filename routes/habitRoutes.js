const express = require('express');
const habitController = require('../controllers/habitcontroller');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();


router.post('/', habitController.createHabit);
router.get('/', habitController.getHabits);
// router.put('/',authMiddleware.usercheck,habitController.updateHabit);
router.delete('/:id',habitController.deleteHabit);

module.exports = router;