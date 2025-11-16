export default function Media({ items }) {
  return (
    <section id="media" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Media & Konten Inspirasi</h2>
        <p className="text-slate-600 mt-2">Video murottal, tutorial irama, dan konten viral.</p>
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {items && items.length > 0 ? items.map((m) => (
            <a key={m.id} href={m.url} target="_blank" rel="noreferrer" className="group overflow-hidden rounded-xl border">
              <img src={m.thumbnail || "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop"} alt={m.title} className="aspect-video w-full object-cover group-hover:scale-105 transition" />
              <div className="p-3">
                <div className="font-medium">{m.title}</div>
                <div className="text-xs text-slate-500">{m.type}</div>
              </div>
            </a>
          )) : (
            <div className="text-slate-600">Konten akan segera hadir.</div>
          )}
        </div>
      </div>
    </section>
  );
}
