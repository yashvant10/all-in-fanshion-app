import PageTemplate from '../../components/ui/PageTemplate';
import ProductGrid from '../../components/ui/ProductGrid';
import { useRecommendations } from '../../hooks/useRecommendations';
import { useAppStore } from '../../store/useAppStore';

export default function RecommendationsPage() {
  const { mood, occasion } = useAppStore();
  const recommendations = useRecommendations(mood, occasion);

  return (
    <PageTemplate title="Recommendations" subtitle="AI outfit suggestions + e-commerce discovery.">
      <div className="space-y-2">
        {recommendations.map((item) => (
          <p key={item} className="bg-white/70 rounded-xl border border-white px-3 py-2 text-sm">{item}</p>
        ))}
      </div>
      <h3 className="font-semibold text-slate-700">Shop Similar Products (Amazon, Myntra, Flipkart, Ajio)</h3>
      <ProductGrid />
    </PageTemplate>
  );
}
