const express = require('express');
const habitController = require('../controllers/habitcontroller');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();


router.post('/',authMiddleware.usercheck, habitController.createHabit);
router.get('/', authMiddleware.usercheck,habitController.getHabits);
// router.put('/',authMiddleware.usercheck,habitController.updateHabit);
router.delete('/:id',authMiddleware.usercheck,habitController.deleteHabit);

module.exports = router;