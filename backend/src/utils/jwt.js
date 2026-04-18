import jwt from 'jsonwebtoken';

export const signToken = (userId) => jwt.sign({ userId }, process.env.JWT_SECRET || 'dev-secret', { expiresIn: '7d' });
