import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  styleDNA: { type: String, default: 'Minimal + Casual + Cool tones' },
  preferences: { mood: String, occasion: String },
}, { timestamps: true });

export default mongoose.model('Users', userSchema);
