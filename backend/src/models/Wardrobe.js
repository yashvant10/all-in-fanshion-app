import mongoose from 'mongoose';

const wardrobeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
  name: String,
  category: String,
  color: String,
  imageUrl: String,
}, { timestamps: true });

export default mongoose.model('Wardrobe', wardrobeSchema);
