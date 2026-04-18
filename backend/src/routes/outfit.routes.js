import { Router } from 'express';
import { listOutfits, saveOutfit } from '../controllers/outfit.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = Router();
router.post('/save', protect, saveOutfit);
router.get('/', protect, listOutfits);

export default router;
