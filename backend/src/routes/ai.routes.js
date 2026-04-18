import { Router } from 'express';
import { analyze, chat, recommend, tryOn } from '../controllers/ai.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = Router();
router.post('/analyze', protect, analyze);
router.post('/recommend', protect, recommend);
router.post('/chat', protect, chat);
router.post('/tryon', protect, tryOn);

export default router;
