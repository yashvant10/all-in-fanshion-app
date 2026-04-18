import cloudinary from '../config/cloudinary.js';

export async function uploadImage(req, res) {
  const { imageBase64 } = req.body;
  if (!imageBase64) return res.status(400).json({ message: 'imageBase64 required' });
  if (!process.env.CLOUDINARY_CLOUD_NAME) return res.json({ imageUrl: 'https://placehold.co/600x800?text=Mock+Upload' });
  const result = await cloudinary.uploader.upload(imageBase64, { folder: 'ai-fashion-platform' });
  res.json({ imageUrl: result.secure_url });
}
