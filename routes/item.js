const { Router } = require('express');
const itemController = require('../controllers/itemControllers');
const router = Router();

router.get('/', itemController.get_items);
router.post('/',itemController.post_item);
router.put('/:id',itemController.update_item);
router.delete('/:id',itemController.delete_item);

module.exports = router;