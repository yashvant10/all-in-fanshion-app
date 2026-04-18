export async function createPayment(req, res) {
  res.json({ orderId: 'mock_order_123', amount: req.body.amount || 999, currency: 'INR' });
}

export async function verifyPayment(_, res) {
  res.json({ verified: true, message: 'Mock verification successful' });
}
