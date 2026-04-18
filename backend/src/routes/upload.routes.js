import { Router } from 'express';
import { uploadImage } from '../controllers/upload.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = Router();
router.post('/image', protect, uploadImage);

export default router;
