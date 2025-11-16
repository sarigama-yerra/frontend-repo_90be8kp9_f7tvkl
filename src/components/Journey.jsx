export default function Journey({ data }) {
  const benefits = data?.benefits || [];
  const testimonials = data?.testimonials || [];
  return (
    <section id="journey" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Soulful Qur’an Journey</h2>
          <p className="mt-3 text-slate-700">Filosofi pembelajaran yang menggabungkan teknik tilawah, seni suara, dan penghayatan makna spiritual.</p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {benefits.map((b, i) => (
              <li key={i} className="p-4 rounded-lg border border-slate-200 bg-slate-50">{b}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-slate-900">Testimoni Murid</h3>
          <div className="mt-4 grid gap-4">
            {testimonials.length === 0 && (
              <div className="p-4 rounded-lg border border-slate-200">Belum ada testimoni. Segera bergabung dan rasakan perbedaannya!</div>
            )}
            {testimonials.map((t) => (
              <div key={t.id} className="p-4 rounded-lg border border-slate-200">
                <div className="font-semibold">{t.name}</div>
                <p className="text-slate-700 mt-1">{t.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
