const { Router } = require('express')
const categoryController = require('../../../controllers/categoryController')

const router = Router();

router.get('/', categoryController.getAllCategories)
router.get('/:id', categoryController.getCategory)
router.post('/', categoryController.createCategories)
router.put('/:id', categoryController.updateCategories)
router.delete('/:id', categoryController.deleteCategories)

module.exports = router;