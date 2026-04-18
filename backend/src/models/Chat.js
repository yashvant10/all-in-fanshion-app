import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
  role: String,
  message: String,
}, { timestamps: true });

export default mongoose.model('Chat', chatSchema);
