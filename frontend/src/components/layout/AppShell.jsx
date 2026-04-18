import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const nav = [
  ['/', 'Landing'],
  ['/dashboard', 'Dashboard'],
  ['/recommendations', 'Recommendations'],
  ['/virtual-try-on', 'Try-On'],
  ['/my-closet', 'Closet'],
  ['/community-feed', 'Community'],
  ['/pricing', 'Pricing'],
];

export default function AppShell({ children }) {
  const location = useLocation();
  return (
    <div className="min-h-screen p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <motion.header initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-4 mb-6 flex flex-wrap items-center gap-3 justify-between">
          <h1 className="text-xl font-bold gradient-text">AI Fashion Platform</h1>
          <nav className="flex gap-2 flex-wrap">
            {nav.map(([path, label]) => (
              <Link key={path} to={path} className={`px-3 py-1.5 rounded-full text-sm ${location.pathname === path ? 'bg-primary text-white' : 'bg-white/70 hover:bg-white'}`}>
                {label}
              </Link>
            ))}
          </nav>
        </motion.header>
        {children}
      </div>
    </div>
  );
}
