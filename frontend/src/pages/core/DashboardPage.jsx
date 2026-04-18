import PageTemplate from '../../components/ui/PageTemplate';
import { dashboardCards } from '../../data/mockData';

export default function DashboardPage() {
  return (
    <PageTemplate title="Dashboard" subtitle="Your AI stylist command center.">
      <div className="grid md:grid-cols-4 gap-4">
        {dashboardCards.map((card) => (
          <article key={card.title} className="bg-white/70 rounded-2xl p-4 border border-white">
            <p className="text-sm text-slate-500">{card.title}</p>
            <h3 className="text-2xl font-bold text-slate-800">{card.value}</h3>
            <p className="text-accent text-sm">{card.trend}</p>
          </article>
        ))}
      </div>
      <div className="bg-white/70 rounded-2xl border border-white p-4">
        <p className="font-semibold">Style DNA</p>
        <p className="text-sm text-slate-600">Minimal + Casual + Cool tones</p>
      </div>
    </PageTemplate>
  );
}
