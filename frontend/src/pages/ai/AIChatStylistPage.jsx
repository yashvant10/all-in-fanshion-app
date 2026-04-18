import { useState } from 'react';
import PageTemplate from '../../components/ui/PageTemplate';

export default function AIChatStylistPage() {
  const [messages, setMessages] = useState([{ role: 'assistant', text: 'Hi! Tell me your mood and occasion.' }]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { role: 'user', text: input }, { role: 'assistant', text: `For ${input}, I suggest a clean monochrome base with a statement layer.` }]);
    setInput('');
  };

  return (
    <PageTemplate title="AI Chat Stylist" subtitle="Conversational styling assistant powered by OpenAI.">
      <div className="bg-white/70 border border-white rounded-2xl p-4 h-80 overflow-y-auto space-y-3">
        {messages.map((msg, idx) => <p key={idx} className={`text-sm ${msg.role === 'assistant' ? 'text-primary' : 'text-slate-700'}`}>{msg.role}: {msg.text}</p>)}
      </div>
      <div className="flex gap-2">
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask for outfits, colors, fit..." className="flex-1 rounded-xl border border-white bg-white/80 px-3 py-2" />
        <button onClick={sendMessage} className="px-4 py-2 rounded-xl bg-primary text-white">Send</button>
      </div>
    </PageTemplate>
  );
}
