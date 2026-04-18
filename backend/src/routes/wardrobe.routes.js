import { Router } from 'express';
import { addWardrobeItem, deleteWardrobeItem, listWardrobe } from '../controllers/wardrobe.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = Router();
router.post('/add', protect, addWardrobeItem);
router.get('/', protect, listWardrobe);
router.delete('/:id', protect, deleteWardrobeItem);

export default router;
