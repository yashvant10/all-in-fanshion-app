import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import uploadRoutes from './routes/upload.routes.js';
import aiRoutes from './routes/ai.routes.js';
import wardrobeRoutes from './routes/wardrobe.routes.js';
import outfitRoutes from './routes/outfit.routes.js';
import paymentRoutes from './routes/payment.routes.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));

app.get('/health', (_, res) => res.json({ ok: true, service: 'ai-fashion-platform' }));
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/wardrobe', wardrobeRoutes);
app.use('/api/outfit', outfitRoutes);
app.use('/api/payment', paymentRoutes);

const port = process.env.PORT || 5000;
connectDB().then(() => app.listen(port, () => console.log(`API running on ${port}`)));
