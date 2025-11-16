export default function Community({ events }) {
  return (
    <section id="community" className="py-16 bg-emerald-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Komunitas Soulful Qur’an</h2>
        <p className="text-slate-600 mt-2">Berkumpulnya para pembelajar yang saling menguatkan.</p>
        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {(events || []).map((e) => (
            <div key={e.id} className="p-4 rounded-lg bg-white border">
              <div className="font-semibold">{e.title}</div>
              <div className="text-xs text-slate-500">{e.date || ''} {e.location || ''}</div>
              <p className="text-slate-700 mt-2 text-sm">{e.description}</p>
              {e.gallery && e.gallery.length > 0 && (
                <img src={e.gallery[0]} alt={e.title} className="mt-3 rounded-md w-full h-32 object-cover" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
