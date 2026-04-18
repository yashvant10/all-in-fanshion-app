import AIResult from '../models/AIResult.js';
import Chat from '../models/Chat.js';
import { generateRecommendations } from '../services/ai.service.js';

export async function analyze(req, res) {
  const result = await AIResult.create({
    user: req.userId,
    faceShape: 'Oval',
    skinTone: 'Cool',
    styleType: 'Minimal Smart Casual',
    suggestions: ['Try structured tops', 'Use cool-tone palette'],
  });
  res.json(result);
}

export async function recommend(req, res) {
  const data = await generateRecommendations(req.body);
  res.json(data);
}

export async function chat(req, res) {
  const { message } = req.body;
  await Chat.create({ user: req.userId, role: 'user', message });
  const reply = `For ${message}, go with a polished casual silhouette and cool accent colors.`;
  await Chat.create({ user: req.userId, role: 'assistant', message: reply });
  res.json({ reply });
}

export async function tryOn(req, res) {
  res.json({ resultImage: 'https://placehold.co/800x1000?text=Virtual+TryOn+Result' });
}
