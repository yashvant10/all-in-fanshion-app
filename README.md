# AI Fashion Platform

Startup-style full-stack scaffold with:
- **Frontend**: React + Vite + Tailwind + Framer Motion + Zustand
- **Backend**: Node + Express + MongoDB (Mongoose)
- **AI**: OpenAI-ready recommendation/chat service with mock fallback
- **Storage**: Cloudinary-ready image upload endpoint

## Run

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
npm install
npm run dev
```

Create `.env` in `backend`:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/ai-fashion-platform
JWT_SECRET=replace_me
OPENAI_API_KEY=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```
