import mongoose from 'mongoose';

const outfitSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
  title: String,
  items: [String],
  occasion: String,
  savedFromAI: Boolean,
}, { timestamps: true });

export default mongoose.model('Outfits', outfitSchema);
