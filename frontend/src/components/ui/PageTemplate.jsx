import { motion } from 'framer-motion';

export default function PageTemplate({ title, subtitle, children }) {
  return (
    <motion.section initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-6 md:p-8 space-y-4">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800">{title}</h2>
        <p className="text-slate-600">{subtitle}</p>
      </div>
      {children}
    </motion.section>
  );
}
