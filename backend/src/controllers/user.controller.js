import User from '../models/User.js';

export async function getProfile(req, res) {
  const user = await User.findById(req.userId).select('-password');
  res.json(user);
}

export async function updateProfile(req, res) {
  const user = await User.findByIdAndUpdate(req.userId, req.body, { new: true }).select('-password');
  res.json(user);
}
