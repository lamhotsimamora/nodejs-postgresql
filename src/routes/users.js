const express = require('express');
const { body, param } = require('express-validator');
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/', userController.getAll);
router.get('/:id', [param('id').isInt()], userController.getById);
router.post('/', [
body('name').notEmpty().withMessage('name required'),
body('email').isEmail().withMessage('valid email required'),
], userController.create);
router.put('/:id', [
param('id').isInt(),
body('name').optional().notEmpty(),
body('email').optional().isEmail(),
], userController.update);
router.delete('/:id', [param('id').isInt()], userController.remove);


module.exports = router;