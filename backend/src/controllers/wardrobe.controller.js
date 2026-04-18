import Wardrobe from '../models/Wardrobe.js';

export async function addWardrobeItem(req, res) {
  const item = await Wardrobe.create({ ...req.body, user: req.userId });
  res.status(201).json(item);
}

export async function listWardrobe(req, res) {
  const items = await Wardrobe.find({ user: req.userId });
  res.json(items);
}

export async function deleteWardrobeItem(req, res) {
  await Wardrobe.findOneAndDelete({ _id: req.params.id, user: req.userId });
  res.json({ success: true });
}
