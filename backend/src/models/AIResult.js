import mongoose from 'mongoose';

const aiResultSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
  faceShape: String,
  skinTone: String,
  styleType: String,
  suggestions: [String],
}, { timestamps: true });

export default mongoose.model('AIResults', aiResultSchema);
