import mongoose from 'mongoose';

const subscriptionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
  plan: { type: String, enum: ['free', 'pro', 'studio'], default: 'free' },
  status: { type: String, default: 'active' },
  renewalDate: Date,
}, { timestamps: true });

export default mongoose.model('Subscriptions', subscriptionSchema);
