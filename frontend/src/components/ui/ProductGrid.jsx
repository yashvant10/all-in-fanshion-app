import { mockProducts } from '../../data/mockData';

export default function ProductGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {mockProducts.map((item) => (
        <a key={item.id} href={item.link} className="bg-white/70 border border-white rounded-2xl p-3 hover:shadow-md transition block">
          <img src={item.image} alt={item.name} className="h-36 w-full object-cover rounded-xl" />
          <p className="text-xs text-primary mt-2">{item.source}</p>
          <h4 className="font-semibold text-sm">{item.name}</h4>
          <p className="text-accent font-semibold">{item.price}</p>
        </a>
      ))}
    </div>
  );
}
