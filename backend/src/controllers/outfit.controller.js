import Outfit from '../models/Outfit.js';

export async function saveOutfit(req, res) {
  const outfit = await Outfit.create({ ...req.body, user: req.userId, savedFromAI: true });
  res.status(201).json(outfit);
}

export async function listOutfits(req, res) {
  const outfits = await Outfit.find({ user: req.userId });
  res.json(outfits);
}
