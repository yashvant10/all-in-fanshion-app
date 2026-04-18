import PageTemplate from '../../components/ui/PageTemplate';

export default function VirtualTryOnPage() {
  return (
    <PageTemplate title="Virtual Try-On" subtitle="Upload photo and overlay selected outfit.">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white/70 rounded-2xl border border-white p-4">
          <p className="font-semibold">User Image</p>
          <div className="h-64 rounded-xl bg-slate-100 grid place-items-center text-slate-400">Image upload preview</div>
        </div>
        <div className="bg-white/70 rounded-2xl border border-white p-4">
          <p className="font-semibold">Try-On Result</p>
          <div className="h-64 rounded-xl bg-slate-100 grid place-items-center text-slate-400">Outfit overlay output</div>
        </div>
      </div>
    </PageTemplate>
  );
}
